export default function SignUp() {
  return (
    <main
      style={{
        padding: "60px 20px",
        textAlign: "center",
        background: "var(--wave-bg)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          color: "var(--wave-blue)",
          marginBottom: "10px",
        }}
      >
        Create your Wave account
      </h1>

      <p
        style={{
          color: "var(--wave-blue-dark)",
          marginBottom: "30px",
          fontSize: "1.1rem",
        }}
      >
        Sign up to get started.
      </p>

      {/* Placeholder button — will become real signup later */}
      <button
        style={{
          padding: "12px 28px",
          background: "var(--wave-blue)",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        Continue
      </button>

      {/* Login redirect */}
      <p style={{ marginTop: "20px", color: "var(--wave-blue-dark)" }}>
        Already have an account?{" "}
        <a
          href="/login"
          style={{
            color: "var(--wave-blue)",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Login
        </a>
      </p>
    </main>
  );
}
