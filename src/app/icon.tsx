import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 18,
          background: "linear-gradient(135deg,#3563F0 0%,#6D5BF6 55%,#14B8A6 100%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <div style={{ width: 30, height: 6, borderRadius: 3, background: "#fff" }} />
          <div style={{ width: 19, height: 6, borderRadius: 3, background: "#fff" }} />
          <div style={{ width: 30, height: 6, borderRadius: 3, background: "#fff" }} />
        </div>
      </div>
    ),
    size,
  );
}
