import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg,#3563F0 0%,#6D5BF6 55%,#14B8A6 100%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ width: 84, height: 17, borderRadius: 9, background: "#fff" }} />
          <div style={{ width: 53, height: 17, borderRadius: 9, background: "#fff" }} />
          <div style={{ width: 84, height: 17, borderRadius: 9, background: "#fff" }} />
        </div>
      </div>
    ),
    size,
  );
}
