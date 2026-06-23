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
              <Link href="/download" className="md:block hidden transition-opacity hover:opacity-60" style={{ color: "var(--text-secondary)", fontSize: "13px", fontWeight: 500, marginRight: "30px" }}>
                Download
              </Link>

              {/* Divisorio visibile solo su desktop */}
              <div className="md:block hidden" style={{ width: "1px", height: "16px", background: "var(--border)" }} />

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

              {/* Hamburger visibile solo su mobile */}
              <button
                className="md:hidden flex items-center justify-center transition-opacity hover:opacity-60"
                onClick={() => setOpen(!open)}
                style={{ marginLeft: "16px", color: "var(--text-primary)", background: "none", border: "none", cursor: "pointer", padding: "4px" }}
                aria-label="Menu"
              >
                {open ? (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <line x1="2" y1="2" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="16" y1="2" x2="2" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <line x1="2" y1="6" x2="16" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="2" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
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