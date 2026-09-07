/**
 * Subtle repeating mountain-silhouette texture, used as a low-opacity
 * background layer so sections like the hero don't feel like a flat,
 * empty color block. Renders in `currentColor`, so wrap it in a text-color
 * class (see Hero) to control the tone, and an opacity class to keep it
 * subtle.
 */
export function MountainPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      preserveAspectRatio="none"
    >
      <defs>
        <pattern id="kilele-mountains" width="260" height="130" patternUnits="userSpaceOnUse">
          <polygon points="0,130 70,40 140,130" fill="currentColor" />
          <polygon points="110,130 190,15 260,130" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#kilele-mountains)" />
    </svg>
  );
}
