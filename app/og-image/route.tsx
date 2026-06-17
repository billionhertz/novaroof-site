import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1F2937",
          backgroundImage: "linear-gradient(135deg, #1F2937 0%, #374151 50%, #1F2937 100%)",
          padding: "60px",
        }}
      >
        {/* Decorative top accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            backgroundColor: "#7ED321",
          }}
        />

        {/* Main content container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {/* Logo text */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                fontSize: "72px",
                fontWeight: 800,
                color: "#7ED321",
                letterSpacing: "-2px",
              }}
            >
              NOVA
            </span>
            <span
              style={{
                fontSize: "72px",
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: "-2px",
              }}
            >
              ROOF
            </span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: "32px",
              fontWeight: 500,
              color: "#9CA3AF",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "40px",
            }}
          >
            Commercial Solutions
          </div>

          {/* Divider */}
          <div
            style={{
              width: "120px",
              height: "4px",
              backgroundColor: "#7ED321",
              marginBottom: "40px",
              borderRadius: "2px",
            }}
          />

          {/* Services */}
          <div
            style={{
              fontSize: "24px",
              fontWeight: 400,
              color: "#E5E7EB",
              marginBottom: "30px",
              display: "flex",
              gap: "20px",
            }}
          >
            <span>Roof Repair</span>
            <span style={{ color: "#7ED321" }}>•</span>
            <span>Restoration</span>
            <span style={{ color: "#7ED321" }}>•</span>
            <span>Maintenance</span>
          </div>

          {/* Location */}
          <div
            style={{
              fontSize: "22px",
              fontWeight: 500,
              color: "#7ED321",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span>Harrisonburg, VA</span>
            <span style={{ color: "#6B7280" }}>|</span>
            <span style={{ color: "#9CA3AF" }}>Shenandoah Valley</span>
          </div>
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span style={{ fontSize: "18px", color: "#6B7280" }}>
            www.novaroof.com
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
