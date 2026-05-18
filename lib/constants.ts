// One-time purchase: cart permalink for variant 43287923458188, qty 1.
export const ONE_TIME_CHECKOUT_URL =
  "https://checkout.flowveda.com/cart/43287923458188:1";

// Subscription: same cart permalink + the durable selling-plan id for the
// "FlowVeda® 60-Day Membership — deliver every 2 months, 15% off" plan.
// selling_plan is the stable Shopify identifier; it does NOT expire like a
// shop.app/cn checkout-session token.
export const SUBSCRIPTION_SELLING_PLAN_ID = "3367764108";
export const SUBSCRIPTION_CHECKOUT_URL = `${ONE_TIME_CHECKOUT_URL}?selling_plan=${SUBSCRIPTION_SELLING_PLAN_ID}`;

// Default checkout target (kept for existing imports).
export const CHECKOUT_URL = ONE_TIME_CHECKOUT_URL;
export const PRODUCT_NAME = "FlowVeda® 60-Day Awakening";
export const STORE_NAME = "FlowVeda®";

// Single source of truth for clinician count.
// Update this number in one place to propagate everywhere.
export const CLINICIAN_COUNT = 900;
