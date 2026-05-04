import CheckoutLink from "./CheckoutLink";

interface CTAButtonProps {
  label?: string;
  variant?: "primary" | "outline";
  className?: string;
}

export default function CTAButton({
  label = "Start Your 60-Day Awakening",
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const base =
    "inline-block font-body font-bold text-[14px] tracking-[0.10em] uppercase rounded-[10px] px-10 py-[18px] transition-all duration-200";
  const styles =
    variant === "primary"
      ? "bg-fv-grad-purple text-white shadow-fv-cta hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(102,71,156,0.55)]"
      : "bg-transparent text-fv-charcoal border-2 border-fv-charcoal hover:bg-fv-charcoal hover:text-white";

  return (
    <CheckoutLink className={`${base} ${styles} ${className}`}>
      {label}
    </CheckoutLink>
  );
}
