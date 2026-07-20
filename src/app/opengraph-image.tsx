import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export const alt = "Dreamz Dezignerz — Interior • Construction • Renovation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#101619",
          padding: "72px",
          fontFamily: "sans-serif",
          backgroundImage:
            "linear-gradient(rgba(31,176,167,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(31,176,167,0.14) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ width: 22, height: 22, background: "#e24e10" }} />
          <span
            style={{
              color: "#5fd0c7",
              fontSize: 26,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            Est. Chennai — Since Day One
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: "#f6f5f1",
              fontSize: 82,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
            }}
          >
            We design, build
          </span>
          <span
            style={{
              fontSize: 82,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: "#1fb0a7",
            }}
          >
            &amp; finish <span style={{ color: "#e24e10" }}>your space.</span>
          </span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <span style={{ color: "#f6f5f1", fontSize: 40, fontWeight: 700, letterSpacing: "-0.01em" }}>
            {siteConfig.shortName}
          </span>
          <span style={{ color: "#59635f", fontSize: 24, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Interior · Construction · Renovation
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
