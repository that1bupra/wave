export default function Home() {
  return (
    <main
      style={{
        padding: "60px",
        textAlign: "center",
        background: "var(--wave-bg)",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          color: "var(--wave-blue)",
          marginBottom: "20px",
        }}
      >
        Wave 🌊
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          color: "var(--wave-blue-dark)",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        Welcome to Wave — a clean, modern platform built with a blue‑themed
        design. Start customizing your homepage here.
      </p>
    </main>
  );
}
