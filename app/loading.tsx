export default function Loading() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "var(--wave-bg)",
      }}
    >
      <div
        style={{
          width: "60px",
          height: "60px",
          border: "6px solid var(--wave-blue-light)",
          borderTop: "6px solid var(--wave-blue)",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />

      <p
        style={{
          marginTop: "20px",
          color: "var(--wave-blue-dark)",
          fontSize: "1.2rem",
        }}
      >
        Loading Wave...
      </p>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
