import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "DevPhicx Icon";
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 22,
          background: "#050505",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#E8272C",
          borderRadius: "6px",
          fontWeight: "bold",
          fontFamily: "sans-serif",
          border: "1px solid rgba(232, 39, 44, 0.4)",
        }}
      >
        D
      </div>
    ),
    {
      ...size,
    }
  );
}
