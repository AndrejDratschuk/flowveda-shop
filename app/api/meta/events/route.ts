import type { NextRequest } from "next/server";

export const runtime = "nodejs";

type IncomingMetaEvent = {
  event_name?: unknown;
  event_id?: unknown;
  event_time?: unknown;
  event_source_url?: unknown;
  referrer_url?: unknown;
  user_data?: unknown;
  custom_data?: unknown;
};

type JsonRecord = Record<string, unknown>;

const DEFAULT_GRAPH_API_VERSION = "v25.0";
const DEFAULT_ALLOWED_EVENT_HOSTS = new Set([
  "flowveda.co",
  "www.flowveda.co",
  "localhost",
  "127.0.0.1",
]);
const ALLOWED_EVENTS = new Set([
  "PageView",
  "ViewContent",
  "Lead",
  "CompleteRegistration",
  "Contact",
  "Subscribe",
]);

function isRecord(value: unknown): value is JsonRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function optionalString(value: unknown) {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function optionalNumber(value: unknown) {
  return typeof value === "number" && Number.isFinite(value) ? value : undefined;
}

function cleanObject(value: JsonRecord): JsonRecord {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => {
      if (entry === undefined || entry === null || entry === "") return false;
      if (Array.isArray(entry)) return entry.length > 0;
      if (isRecord(entry)) return Object.keys(cleanObject(entry)).length > 0;
      return true;
    }),
  );
}

function getClientIp(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    undefined
  );
}

function getConfig() {
  return {
    accessToken: process.env.META_CONVERSIONS_API_ACCESS_TOKEN,
    allowedHosts: new Set([
      ...DEFAULT_ALLOWED_EVENT_HOSTS,
      ...(process.env.META_EVENT_ALLOWED_HOSTS || "")
        .split(",")
        .map((host) => host.trim().toLowerCase())
        .filter(Boolean),
    ]),
    apiVersion: process.env.META_GRAPH_API_VERSION || DEFAULT_GRAPH_API_VERSION,
    pixelId: process.env.META_PIXEL_ID || process.env.NEXT_PUBLIC_META_PIXEL_ID,
    testEventCode: process.env.META_TEST_EVENT_CODE,
  };
}

function getHost(value: string) {
  try {
    return new URL(value).hostname.toLowerCase();
  } catch {
    return undefined;
  }
}

function getRequestSourceHost(request: NextRequest) {
  const originHost = getHost(request.headers.get("origin") || "");
  if (originHost) return originHost;

  return getHost(request.headers.get("referer") || "");
}

function isAllowedHost(host: string | undefined, allowedHosts: Set<string>) {
  return !!host && allowedHosts.has(host);
}

export async function POST(request: NextRequest) {
  const config = getConfig();

  if (!config.pixelId || !config.accessToken) {
    return Response.json({ ok: false, skipped: true }, { status: 202 });
  }

  let payload: IncomingMetaEvent;

  try {
    payload = (await request.json()) as IncomingMetaEvent;
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const eventName = optionalString(payload.event_name);
  const eventId = optionalString(payload.event_id);
  const eventSourceUrl = optionalString(payload.event_source_url);

  if (!eventName || !ALLOWED_EVENTS.has(eventName)) {
    return Response.json({ ok: false, error: "Unsupported event_name" }, { status: 400 });
  }

  if (!eventId || !eventSourceUrl) {
    return Response.json(
      { ok: false, error: "event_id and event_source_url are required" },
      { status: 400 },
    );
  }

  if (
    !isAllowedHost(getHost(eventSourceUrl), config.allowedHosts) ||
    !isAllowedHost(getRequestSourceHost(request), config.allowedHosts)
  ) {
    return Response.json({ ok: false, error: "Event source is not allowed" }, { status: 403 });
  }

  const incomingUserData = isRecord(payload.user_data) ? payload.user_data : {};
  const userData = cleanObject({
    client_ip_address: getClientIp(request),
    client_user_agent:
      optionalString(incomingUserData.client_user_agent) ||
      request.headers.get("user-agent") ||
      undefined,
    fbc: optionalString(incomingUserData.fbc) || request.cookies.get("_fbc")?.value,
    fbp: optionalString(incomingUserData.fbp) || request.cookies.get("_fbp")?.value,
  });

  const event = cleanObject({
    action_source: "website",
    event_id: eventId,
    event_name: eventName,
    event_source_url: eventSourceUrl,
    event_time: optionalNumber(payload.event_time) || Math.floor(Date.now() / 1000),
    referrer_url: optionalString(payload.referrer_url),
    user_data: userData,
    custom_data: isRecord(payload.custom_data) ? cleanObject(payload.custom_data) : undefined,
  });

  const metaPayload = cleanObject({
    data: [event],
    test_event_code: config.testEventCode,
  });

  const response = await fetch(
    `https://graph.facebook.com/${config.apiVersion}/${config.pixelId}/events?access_token=${config.accessToken}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(metaPayload),
      cache: "no-store",
    },
  );

  if (!response.ok) {
    const error = await response.text();
    console.error("Meta Conversions API request failed", error);
    return Response.json({ ok: false }, { status: 502 });
  }

  return Response.json({ ok: true });
}
