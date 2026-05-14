import Script from "next/script";

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const META_EVENTS_ENDPOINT = "/api/meta/events";

export default function MetaPixel() {
  if (!META_PIXEL_ID) return null;

  return (
    <>
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');

(function() {
  function readCookie(name) {
    var match = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/[.$?*|{}()[\\]\\\\/+^]/g, '\\\\$&') + '=([^;]*)'));
    return match ? decodeURIComponent(match[1]) : undefined;
  }

  function writeCookie(name, value) {
    var secure = window.location.protocol === 'https:' ? '; Secure' : '';
    document.cookie = name + '=' + encodeURIComponent(value) + '; Path=/; Max-Age=7776000; SameSite=Lax' + secure;
  }

  function createEventId(eventName) {
    var id = window.crypto && window.crypto.randomUUID
      ? window.crypto.randomUUID()
      : String(Date.now()) + '.' + Math.random().toString(16).slice(2);
    return 'fv.' + eventName + '.' + id;
  }

  function getFbp() {
    var existing = readCookie('_fbp');
    if (existing) return existing;

    var randomId = Math.floor(Math.random() * 100000000000000000);
    var fbp = 'fb.1.' + Date.now() + '.' + randomId;
    writeCookie('_fbp', fbp);
    return fbp;
  }

  function getFbc() {
    var existing = readCookie('_fbc');
    if (existing) return existing;

    var fbclid = new URLSearchParams(window.location.search).get('fbclid');
    if (!fbclid) return undefined;

    var fbc = 'fb.1.' + Date.now() + '.' + fbclid;
    writeCookie('_fbc', fbc);
    return fbc;
  }

  function sendMetaServerEvent(payload) {
    var body = JSON.stringify({
      event_source_url: window.location.href,
      referrer_url: document.referrer || undefined,
      user_data: {
        fbp: getFbp(),
        fbc: getFbc(),
        client_user_agent: window.navigator.userAgent
      },
      event_time: Math.floor(Date.now() / 1000),
      ...payload
    });

    if (window.navigator.sendBeacon) {
      window.navigator.sendBeacon(
        '${META_EVENTS_ENDPOINT}',
        new Blob([body], { type: 'application/json' })
      );
      return;
    }

    fetch('${META_EVENTS_ENDPOINT}', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body,
      keepalive: true
    }).catch(function() {});
  }

  var pageViewEventId = createEventId('PageView');
  fbq('track', 'PageView', {}, { eventID: pageViewEventId });
  sendMetaServerEvent({
    event_name: 'PageView',
    event_id: pageViewEventId
  });
})();
          `,
        }}
      />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
