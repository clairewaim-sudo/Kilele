// One-off asset generator for the Kilele mark's favicon files.
// Re-run this (`node scripts/generate-favicons.mjs`) if the brand colors
// in components/logo.tsx ever change — it keeps app/icon.svg and
// app/apple-icon.png in sync with that design.
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import sharp from "sharp";

const FOREST = "#0F2B1D";
const CREAM = "#F3F7F3";

function buildMarkSvg({ ringColor, needleColor, dotColor, bg }) {
  const majorTicks = [0, 90, 180, 270];
  const minorTicks = [45, 135, 225, 315];

  function tickPoints(angleDeg, outerR, innerR, halfWidth) {
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

  const majorPolys = majorTicks
    .map((a) => `<polygon points="${tickPoints(a, 49, 41, 2.8)}" fill="${ringColor}" />`)
    .join("\n  ");
  const minorPolys = minorTicks
    .map((a) => `<polygon points="${tickPoints(a, 45.5, 41, 1.8)}" fill="${ringColor}" />`)
    .join("\n  ");

  const needleX = 37;
  const needleY = 50;
  const needleLen = 15;
  const needleWidth = 4.5;

  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  ${bg ? `<rect width="100" height="100" fill="${bg}" />` : ""}
  <circle cx="50" cy="50" r="38" fill="none" stroke="${ringColor}" stroke-width="5" />
  ${majorPolys}
  ${minorPolys}
  <text x="50" y="52" text-anchor="middle" dominant-baseline="central" font-family="Arial, sans-serif" font-weight="800" font-size="48" fill="${ringColor}">K</text>
  <polygon points="${needleX},${needleY - needleLen / 2} ${needleX + needleWidth / 2},${needleY} ${needleX},${needleY + needleLen / 2} ${needleX - needleWidth / 2},${needleY}" fill="${needleColor}" />
  <circle cx="${needleX}" cy="${needleY}" r="1.6" fill="${dotColor}" />
</svg>`;
}

// Favicon: dark mark, transparent background (renders on the browser's own tab color)
const faviconSvg = buildMarkSvg({ ringColor: FOREST, needleColor: CREAM, dotColor: FOREST, bg: null });
writeFileSync(new URL("../app/icon.svg", import.meta.url), faviconSvg);

// Apple touch icon: needs an opaque background
const appleSvg = buildMarkSvg({ ringColor: FOREST, needleColor: CREAM, dotColor: FOREST, bg: CREAM });
await sharp(Buffer.from(appleSvg)).resize(180, 180).png().toFile(
  fileURLToPath(new URL("../app/apple-icon.png", import.meta.url))
);

console.log("Generated app/icon.svg and app/apple-icon.png");
