import { CHECKOUT_URL } from "@/lib/constants";

const FORWARDED_PARAMS = [
  "fbclid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
];

const CHECKOUT_EVENT = {
  content_name: "FlowVeda 60-Day Awakening",
  content_type: "product",
  contents: [{ id: "43287923458188", quantity: 1 }],
  currency: "USD",
  value: 99,
};

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function buildCheckoutUrl() {
  if (typeof window === "undefined") return CHECKOUT_URL;

  const checkoutUrl = new URL(CHECKOUT_URL);
  const currentUrl = new URL(window.location.href);

  FORWARDED_PARAMS.forEach((param) => {
    const values = currentUrl.searchParams.getAll(param);
    if (!values.length || checkoutUrl.searchParams.has(param)) return;

    values.forEach((value) => checkoutUrl.searchParams.append(param, value));
  });

  return checkoutUrl.toString();
}

export function trackCheckoutStart() {
  window.fbq?.("track", "InitiateCheckout", CHECKOUT_EVENT);
  window.fbq?.("trackCustom", "CheckoutClick", {
    destination: "checkout.flowveda.com",
  });
}
