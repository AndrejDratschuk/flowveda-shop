// One-time purchase: cart permalink for variant 43287923458188, qty 1.
export const ONE_TIME_CHECKOUT_URL =
  "https://checkout.flowveda.com/cart/43287923458188:1";

// Subscription: durable selling-plan id for the "FlowVeda® 60-Day
// Membership — deliver every 2 months, 15% off" plan.
export const SUBSCRIPTION_SELLING_PLAN_ID = "3367764108";
// Must use the /cart/add permalink (not /cart/{id}:{qty}?selling_plan=):
// this store's checkout edge silently DROPS selling_plan on the
// /cart/{id}:{qty} permalink and checks out at the one-time price.
// /cart/add binds the selling plan to the line item; return_to forwards
// to checkout. Verified: line item resolves to the 15%-off plan price.
export const SUBSCRIPTION_CHECKOUT_URL = `https://checkout.flowveda.com/cart/add?id=43287923458188&quantity=1&selling_plan=${SUBSCRIPTION_SELLING_PLAN_ID}&return_to=/checkout`;

// Default checkout target (kept for existing imports).
export const CHECKOUT_URL = ONE_TIME_CHECKOUT_URL;
export const PRODUCT_NAME = "FlowVeda® 60-Day Awakening";
export const STORE_NAME = "FlowVeda®";

// Single source of truth for clinician count.
// Update this number in one place to propagate everywhere.
export const CLINICIAN_COUNT = 900;
