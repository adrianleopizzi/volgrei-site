"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
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
              {/* Links visibili solo su desktop */}
              <Link href="/download" className="md:block hidden transition-opacity hover:opacity-60" style={{ color: "var(--text-secondary)", fontSize: "13px", fontWeight: 400, marginRight: "30px" }}>
                Download
              </Link>

              {/* Divisorio visibile solo su desktop */}
              <div className="md:block hidden" style={{ width: "1px", height: "16px", background: "var(--border)" }} />

              <Link href="/login" className="transition-opacity hover:opacity-60" style={{ color: "var(--text-secondary)", fontSize: "13px", fontWeight: 400, marginLeft: "30px" }}>
                Log in
              </Link>
              <Link
                href="/signup"
                className="rounded-full transition-opacity hover:opacity-80 text-black"
                style={{ background: "#f0f0f0", padding: "6px 12px", fontSize: "13px", fontWeight: 500, marginLeft: "17px" }}
              >
                Sign up
              </Link>

              {/* Toggle visibile solo su mobile */}
              <button
                className="md:hidden flex items-center justify-center"
                onClick={() => setOpen(!open)}
                style={{
                  marginLeft: "16px",
                  cursor: "pointer",
                  background: "none",
                  border: "none",
                  padding: 0,
                }}
                aria-label="Menu"
              >
                {open ? (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="3" y="3" width="12" height="12" rx="2.5" stroke="var(--text-primary)" strokeWidth="1.2"/>
                    <line x1="3" y1="7" x2="15" y2="7" stroke="var(--text-primary)" strokeWidth="1"/>
                    <line x1="6" y1="10" x2="12" y2="10" stroke="var(--text-secondary)" strokeWidth="1.2" strokeLinecap="round"/>
                    <line x1="6" y1="12.5" x2="9.5" y2="12.5" stroke="var(--text-secondary)" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="3" y="3" width="12" height="12" rx="2.5" stroke="var(--text-secondary)" strokeWidth="1.2"/>
                    <line x1="6" y1="7" x2="12" y2="7" stroke="var(--text-secondary)" strokeWidth="1.2" strokeLinecap="round"/>
                    <line x1="6" y1="9.5" x2="12" y2="9.5" stroke="var(--text-secondary)" strokeWidth="1.2" strokeLinecap="round"/>
                    <line x1="6" y1="12" x2="10" y2="12" stroke="var(--text-secondary)" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="fixed md:hidden z-40"
          style={{
            top: "65px",
            left: 0,
            right: 0,
            background: "rgba(13, 13, 13, 0.98)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(42, 42, 42, 0.6)",
            padding: "16px max(16px, 4.4vw) 24px",
          }}
        >
          <Link
            href="/download"
            className="block transition-opacity hover:opacity-60"
            style={{ color: "var(--text-secondary)", fontSize: "15px", fontWeight: 500, paddingTop: "12px", paddingBottom: "12px" }}
            onClick={() => setOpen(false)}
          >
            Download
          </Link>
        </div>
      )}
    </>
  );
}