// Starter Kit = FlowVeda® "Edge / 2 Bottles" (product `flowveda`,
// variant 44080479862924, SKU "Edge2"). Subscription is the "Edge
// Bi-Monthly" selling plan: deliver every 2 months, $84.00.
const CHECKOUT_HOST = "https://checkout.flowveda.com";
const EDGE_2_BOTTLE_VARIANT_ID = "44080479862924";
export const SUBSCRIPTION_SELLING_PLAN_ID = "1759445132";

// Why /cart/clear -> return_to -> /cart/add (and not /cart/{id}:{qty}):
//  1. The /cart/{id}:{qty}?selling_plan= permalink is silently stripped
//     by this store's checkout edge (it bounces to Shop Pay and the plan
//     is lost), so the subscription must go through /cart/add.
//  2. /cart/add APPENDS to the existing Shopify cart, so a returning
//     visitor stacks items (e.g. an old line item still at checkout).
// Clearing first then adding via return_to guarantees a clean,
// single-item checkout. Verified live: exactly one line item, with the
// Edge Bi-Monthly "$84.00 / 2 months" plan bound.
function clearThenCheckout(addParams: string) {
  const add = `/cart/add?${addParams}&return_to=/checkout`;
  return `${CHECKOUT_HOST}/cart/clear?return_to=${encodeURIComponent(add)}`;
}

export const SUBSCRIPTION_CHECKOUT_URL = clearThenCheckout(
  `id=${EDGE_2_BOTTLE_VARIANT_ID}&quantity=1&selling_plan=${SUBSCRIPTION_SELLING_PLAN_ID}`,
);

// One-time: same Edge / 2 Bottles variant, no selling plan.
export const ONE_TIME_CHECKOUT_URL = clearThenCheckout(
  `id=${EDGE_2_BOTTLE_VARIANT_ID}&quantity=1`,
);

// Default checkout target (kept for existing imports).
export const CHECKOUT_URL = ONE_TIME_CHECKOUT_URL;
export const PRODUCT_NAME = "FlowVeda® Edge · 2 Bottles";
export const STORE_NAME = "FlowVeda®";

// Single source of truth for clinician count.
// Update this number in one place to propagate everywhere.
export const CLINICIAN_COUNT = 900;
