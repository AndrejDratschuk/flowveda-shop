"use client";

import type { AnchorHTMLAttributes } from "react";
import { CHECKOUT_URL } from "@/lib/constants";
import { buildCheckoutUrl, trackCheckoutStart } from "@/lib/checkoutTracking";

type CheckoutLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  checkoutUrl?: string;
};

export default function CheckoutLink({
  children,
  onClick,
  checkoutUrl = CHECKOUT_URL,
  ...props
}: CheckoutLinkProps) {
  return (
    <a
      {...props}
      href={checkoutUrl}
      onClick={(event) => {
        const nextHref = buildCheckoutUrl(checkoutUrl);
        event.currentTarget.href = nextHref;
        trackCheckoutStart(nextHref);
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
