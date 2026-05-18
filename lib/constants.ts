// Starter Kit = FlowVeda® "Edge / 2 Bottles" (product `flowveda`,
// variant 44080479862924, SKU "Edge2"). Subscription is the "Edge
// Bi-Monthly" selling plan: deliver every 2 months, $84.00.
const EDGE_2_BOTTLE_VARIANT_ID = "44080479862924";
export const SUBSCRIPTION_SELLING_PLAN_ID = "1759445132";

// IMPORTANT: must use the /cart/add permalink with return_to=/checkout.
// This store's checkout edge silently DROPS ?selling_plan= on the
// /cart/{id}:{qty} permalink (it bounces to a Shop Pay checkout and the
// plan is lost). /cart/add binds the selling plan to the line item.
// Verified against the live store: the line item resolves to the
// "Deliver every 2 months, $84.00" Edge Bi-Monthly plan.
export const SUBSCRIPTION_CHECKOUT_URL = `https://checkout.flowveda.com/cart/add?id=${EDGE_2_BOTTLE_VARIANT_ID}&quantity=1&selling_plan=${SUBSCRIPTION_SELLING_PLAN_ID}&return_to=/checkout`;

// One-time: same Edge / 2 Bottles variant, no selling plan.
export const ONE_TIME_CHECKOUT_URL = `https://checkout.flowveda.com/cart/add?id=${EDGE_2_BOTTLE_VARIANT_ID}&quantity=1&return_to=/checkout`;

// Default checkout target (kept for existing imports).
export const CHECKOUT_URL = ONE_TIME_CHECKOUT_URL;
export const PRODUCT_NAME = "FlowVeda® Edge — 2 Bottles";
export const STORE_NAME = "FlowVeda®";

// Single source of truth for clinician count.
// Update this number in one place to propagate everywhere.
export const CLINICIAN_COUNT = 900;
