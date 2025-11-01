export default function Home() {
  return (
    <div style={{ padding: "40px" }}>
      <h2>Selamat datang ke AI Writer ✨</h2>
      <p>Sila login untuk mula menulis ✍️</p>

      <a
        href="/auth/login"
        style={{
          marginTop: "20px",
          display: "inline-block",
          padding: "10px 16px",
          background: "#4A90E2",
          color: "white",
          borderRadius: "6px",
          textDecoration: "none",
        }}
      >
        Login
      </a>
    </div>
  );
}
