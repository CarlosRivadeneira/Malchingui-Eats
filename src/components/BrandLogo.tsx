import { BrandIcon } from "./BrandIcon";

type BrandLogoProps = {
  size?: number;
  theme?: "light" | "dark";
};

export function BrandLogo({ size = 40, theme = "light" }: BrandLogoProps) {
  return (
    <span className={`brand-logo brand-logo-${theme}`} style={{ "--brand-icon-size": `${size}px` } as React.CSSProperties}>
      <BrandIcon size={size} />
      <span className="brand-logo-wordmark"><span>Malchingui</span><strong>Eats</strong></span>
    </span>
  );
}
