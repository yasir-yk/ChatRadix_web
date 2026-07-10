import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: "#030712",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: "8px",
          border: "2px solid #0668E1",
          fontWeight: 900,
          fontFamily: "sans-serif",
        }}
      >
        CR
      </div>
    ),
    {
      ...size,
    }
  );
}
