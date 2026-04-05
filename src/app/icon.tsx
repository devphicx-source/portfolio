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
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 22,
          background: "#0B1126", // Matching your navy theme
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#3B82F6", // Brand Blue
          borderRadius: "6px",
          fontWeight: "bold",
          fontFamily: "sans-serif",
          border: "1px solid rgba(59, 130, 246, 0.3)",
        }}
      >
        D
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
