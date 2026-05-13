import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt =
  "Veritable Technology Solutions — Fractional CTO + IT Infrastructure as a Service";
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
          background:
            "linear-gradient(135deg, #ffffff 0%, #f4f7fb 55%, #e6eff7 100%)",
          padding: 80,
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Geometric building silhouette */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 520,
            height: 520,
            opacity: 0.08,
            display: "flex",
          }}
        >
          <svg
            viewBox="0 0 480 480"
            xmlns="http://www.w3.org/2000/svg"
            width="520"
            height="520"
          >
            <rect x="80" y="120" width="100" height="280" fill="#1E5A99" />
            <rect x="200" y="60" width="100" height="340" fill="#4A9BD9" />
            <rect x="320" y="20" width="100" height="380" fill="#F5A623" />
          </svg>
        </div>

        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              background: "#F5A623",
              transform: "rotate(45deg)",
            }}
          />
          <div
            style={{
              color: "#1E5A99",
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            Veritable Technology Solutions
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            color: "#1A2B4C",
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            maxWidth: 1000,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex" }}>Fractional CTO</div>
          <div style={{ display: "flex", color: "#1E5A99" }}>
            + ready-made infrastructure.
          </div>
        </div>

        {/* Sub */}
        <div
          style={{
            marginTop: 32,
            color: "rgba(26, 43, 76, 0.7)",
            fontSize: 30,
            fontWeight: 300,
            lineHeight: 1.35,
            maxWidth: 920,
            display: "flex",
          }}
        >
          Senior tech leadership and managed infrastructure for
          purpose-driven Australian organisations. One running vehicle.
        </div>

        {/* Footer line */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "rgba(26, 43, 76, 0.55)",
            fontSize: 22,
            fontWeight: 500,
          }}
        >
          <div style={{ display: "flex" }}>
            veritabletechnologysolutions.com.au
          </div>
          <div style={{ display: "flex" }}>Adelaide · South Australia</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
