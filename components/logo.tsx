type LogoProps = {
  size?: number;
  /** "light" = drawn in white/sage for dark backgrounds (header, footer).
   *  "dark" = drawn in forest green for light backgrounds. */
  variant?: "light" | "dark";
  className?: string;
};

/**
 * The Kilele mark: a compass ring (8 tick marks, like clock hour markers)
 * around a bold "K", with a small compass-needle-and-dot accent set into
 * the K's vertical stroke. Built as inline SVG (not a raster image) so it
 * stays crisp at any size and needs no separate asset file.
 *
 * The same shape also backs app/icon.svg and app/apple-icon.png — see
 * scripts/generate-favicons.mjs if the design or brand colors change.
 */
export function Logo({ size = 40, variant = "light", className }: LogoProps) {
  const isLight = variant === "light";
  const ringColor = isLight ? "#ffffff" : "#0F2B1D";
  const needleColor = isLight ? "#0F2B1D" : "#F3F7F3";
  const dotColor = isLight ? "#C9E8D4" : "#0F2B1D";

  const majorTicks = [0, 90, 180, 270];
  const minorTicks = [45, 135, 225, 315];

  function tickPoints(angleDeg: number, outerR: number, innerR: number, halfWidth: number) {
    const a = (angleDeg * Math.PI) / 180;
    const dx = Math.sin(a);
    const dy = -Math.cos(a);
    const px = Math.cos(a);
    const py = Math.sin(a);
    const midR = (outerR + innerR) / 2;
    const tip = [50 + dx * outerR, 50 + dy * outerR];
    const base = [50 + dx * innerR, 50 + dy * innerR];
    const side1 = [50 + dx * midR + px * halfWidth, 50 + dy * midR + py * halfWidth];
    const side2 = [50 + dx * midR - px * halfWidth, 50 + dy * midR - py * halfWidth];
    return `${tip.join(",")} ${side1.join(",")} ${base.join(",")} ${side2.join(",")}`;
  }

  const needleX = 37;
  const needleY = 50;
  const needleLen = 15;
  const needleWidth = 4.5;

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Kilele"
    >
      <circle cx="50" cy="50" r="38" fill="none" stroke={ringColor} strokeWidth="5" />
      {majorTicks.map((a) => (
        <polygon key={a} points={tickPoints(a, 49, 41, 2.8)} fill={ringColor} />
      ))}
      {minorTicks.map((a) => (
        <polygon key={a} points={tickPoints(a, 45.5, 41, 1.8)} fill={ringColor} />
      ))}
      <text
        x="50"
        y="52"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="var(--font-poppins), Poppins, Arial, sans-serif"
        fontWeight={800}
        fontSize="48"
        fill={ringColor}
      >
        K
      </text>
      <polygon
        points={`${needleX},${needleY - needleLen / 2} ${needleX + needleWidth / 2},${needleY} ${needleX},${needleY + needleLen / 2} ${needleX - needleWidth / 2},${needleY}`}
        fill={needleColor}
      />
      <circle cx={needleX} cy={needleY} r="1.6" fill={dotColor} />
    </svg>
  );
}
