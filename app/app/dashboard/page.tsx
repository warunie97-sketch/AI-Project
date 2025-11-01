"use client";
import AuthGuard from "../AuthGuard";

export default function Dashboard() {
  return (
    <AuthGuard>
      <div style={{ padding: "40px" }}>
        <h2>Dashboard ✨</h2>
        <p>Selamat datang penulis hebat! 📝</p>

        <a
          href="/auth/login"
          style={{
            marginTop: "20px",
            display: "inline-block",
            padding: "10px 16px",
            background: "#E74C3C",
            color: "white",
            borderRadius: "6px",
            textDecoration: "none",
          }}
        >
          Logout
        </a>
      </div>
    </AuthGuard>
  );
}
