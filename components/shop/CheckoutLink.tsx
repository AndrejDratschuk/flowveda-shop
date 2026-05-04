"use client";

import type { AnchorHTMLAttributes } from "react";
import { CHECKOUT_URL } from "@/lib/constants";
import { buildCheckoutUrl, trackCheckoutStart } from "@/lib/checkoutTracking";

type CheckoutLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export default function CheckoutLink({
  children,
  onClick,
  ...props
}: CheckoutLinkProps) {
  return (
    <a
      {...props}
      href={CHECKOUT_URL}
      onClick={(event) => {
        const nextHref = buildCheckoutUrl();
        event.currentTarget.href = nextHref;
        trackCheckoutStart();
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
