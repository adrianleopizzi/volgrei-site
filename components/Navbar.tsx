import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        height: "65px",
        backdropFilter: "blur(20px) saturate(160%)",
        WebkitBackdropFilter: "blur(20px) saturate(160%)",
        background: "linear-gradient(to bottom, rgba(13, 13, 13, 1) 0%, rgba(13, 13, 13, 0.95) 30%, rgba(13, 13, 13, 0.85) 70%, rgba(13, 13, 13, 0.80) 100%)",
        borderBottom: "1px solid rgba(42, 42, 42, 0.6)",
      }}
    >
      <div className="w-full flex items-center justify-center" style={{ height: "65px" }}>
        <div className="w-full flex items-center justify-between" style={{ maxWidth: "1400px", paddingLeft: "max(16px, 4.4vw)", paddingRight: "max(16px, 4.4vw)" }}>
        <Link href="/" className="tracking-tight" style={{ color: "var(--text-primary)", fontSize: "20px", fontWeight: 700 }}>
          Volgrei
        </Link>
        <div className="flex items-center">
          <Link href="/download" className="transition-opacity hover:opacity-60" style={{ color: "var(--text-secondary)", fontSize: "13px", fontWeight: 500, marginRight: "30px" }}>
            Download
          </Link>
          <div style={{ width: "1px", height: "16px", background: "var(--border)" }} />
          <Link href="/login" className="transition-opacity hover:opacity-60" style={{ color: "var(--text-secondary)", fontSize: "13px", fontWeight: 500, marginLeft: "30px" }}>
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-full transition-opacity hover:opacity-80 text-black"
            style={{ background: "#ffffff", padding: "6px 12px", fontSize: "13px", fontWeight: 500, marginLeft: "17px" }}
          >
            Sign up
          </Link>
        </div>
        </div>
      </div>
    </nav>
  );
}