import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const FOREST = "#0F2B1D";
const SAGE = "#C9E8D4";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: FOREST,
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 120,
            height: 120,
            borderRadius: "50%",
            border: `6px solid white`,
            alignItems: "center",
            justifyContent: "center",
            fontSize: 64,
            fontWeight: 800,
          }}
        >
          K
        </div>
        <div style={{ display: "flex", marginTop: 32, fontSize: 72, fontWeight: 800 }}>
          {siteConfig.name.toUpperCase()}
        </div>
        <div style={{ display: "flex", marginTop: 16, fontSize: 32, color: SAGE, fontStyle: "italic" }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
