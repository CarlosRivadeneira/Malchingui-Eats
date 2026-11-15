type BrandIconProps = {
  size?: number;
  className?: string;
};

export function BrandIcon({ size = 40, className }: BrandIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      role="img"
      aria-label="Malchingui Eats"
    >
      <rect width="120" height="120" rx="30" fill="var(--color-primary)" />
      <path d="M22 58 L60 26 L98 58" fill="none" stroke="var(--color-on-primary)" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M60 59 C51 53 49 46 53.5 42.5 C56.5 40.5 60 42 60 45.5 C60 42 63.5 40.5 66.5 42.5 C71 46 69 53 60 59 Z" fill="var(--color-accent)" />
      <path d="M30 66 H90 A30 30 0 0 1 30 66 Z" fill="var(--color-on-primary)" />
      <path d="M47 76 Q60 85 73 76" fill="none" stroke="var(--color-primary)" strokeWidth="4.5" strokeLinecap="round" />
    </svg>
  );
}
