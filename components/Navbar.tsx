"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function handleSignOut() {
    await supabase.auth.signOut();
    setProfileOpen(false);
    router.push("/");
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          height: "65px",
          backdropFilter: "blur(20px) saturate(160%)",
          WebkitBackdropFilter: "blur(20px) saturate(160%)",
          background: "linear-gradient(to bottom, rgba(8, 8, 9, 1) 0%, rgba(8, 8, 9, 0.95) 30%, rgba(8, 8, 9, 0.85) 70%, rgba(8, 8, 9, 0.80) 100%)",
          borderBottom: "1px solid rgba(42, 42, 42, 0.6)",
        }}
      >
        <div className="w-full flex items-center justify-center" style={{ height: "65px" }}>
          <div
            className="w-full flex items-center justify-between"
            style={{
              paddingLeft: "clamp(16px, 5.1vw, 80px)",
              paddingRight: "clamp(16px, 5.1vw, 80px)",
            }}
          >
            <Link href="/" className="tracking-tight" style={{ color: "var(--text-primary)", fontSize: "20px", fontWeight: 700 }}>
              Volgrei
            </Link>
            <div className="flex items-center">
              <Link href="/download" className="md:block hidden transition-opacity hover:opacity-60" style={{ color: "var(--text-secondary)", fontSize: "13px", fontWeight: 400, marginRight: "30px" }}>
                Download
              </Link>

              <div className="md:block hidden" style={{ width: "1px", height: "16px", background: "var(--border)" }} />

              {user ? (
                <div ref={profileRef} style={{ position: "relative", marginLeft: "30px" }}>
                  <button
                    onClick={() => setProfileOpen(!profileOpen)}
                    style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center" }}
                    aria-label="Profilo"
                  >
                    <div style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="5.5" r="2.5" stroke="var(--text-secondary)" strokeWidth="1.2"/>
                        <path d="M2.5 13c0-2.485 2.462-4.5 5.5-4.5s5.5 2.015 5.5 4.5" stroke="var(--text-secondary)" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </button>

                  {profileOpen && (
                    <div style={{
                      position: "absolute",
                      top: "calc(100% + 10px)",
                      right: 0,
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: "10px",
                      padding: "6px",
                      minWidth: "160px",
                      zIndex: 100,
                    }}>
                      <p style={{ fontSize: "12px", color: "var(--text-muted)", padding: "6px 10px 8px" }}>
                        {user.email}
                      </p>
                      <div style={{ height: "1px", background: "var(--border)", margin: "0 0 6px" }} />
                      <button
                        onClick={handleSignOut}
                        style={{
                          width: "100%",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "8px 10px",
                          fontSize: "13px",
                          color: "#f87171",
                          textAlign: "left",
                          borderRadius: "6px",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(248,113,113,0.08)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
                      >
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link href="/login" className="transition-opacity hover:opacity-60" style={{ color: "var(--text-secondary)", fontSize: "13px", fontWeight: 400, marginLeft: "30px" }}>
                    Log in
                  </Link>
                  <Link
                    href="/signup"
                    className="rounded-full transition-opacity hover:opacity-80 text-black"
                    style={{ background: "#f0f0f0", padding: "7px 13px 6px 13px", fontSize: "13px", fontWeight: 500, marginLeft: "17px" }}
                  >
                    Sign up
                  </Link>
                </>
              )}

              <button
                className="md:hidden flex items-center justify-center"
                onClick={() => setOpen(!open)}
                style={{ marginLeft: "16px", cursor: "pointer", background: "none", border: "none", padding: 0 }}
                aria-label="Menu"
              >
                {open ? (
                  <svg width="22" height="22" viewBox="0 0 18 18" fill="none">
                    <rect x="3" y="3" width="12" height="12" rx="2.5" stroke="var(--text-primary)" strokeWidth="1.2"/>
                    <line x1="3" y1="7" x2="15" y2="7" stroke="var(--text-primary)" strokeWidth="1"/>
                    <line x1="6" y1="10" x2="12" y2="10" stroke="var(--text-secondary)" strokeWidth="1.2" strokeLinecap="round"/>
                    <line x1="6" y1="12.5" x2="9.5" y2="12.5" stroke="var(--text-secondary)" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 18 18" fill="none">
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

      {open && (
        <div
          className="fixed md:hidden z-40"
          style={{
            top: "65px",
            left: 0,
            right: 0,
            bottom: 0,
            backdropFilter: "blur(20px) saturate(160%)",
            WebkitBackdropFilter: "blur(20px) saturate(160%)",
            background: "linear-gradient(to bottom, rgba(8, 8, 9, 0.85) 0%, rgba(8, 8, 9, 0.80) 100%)",
            borderTop: "1px solid rgba(42, 42, 42, 0.6)",
            padding: "40px clamp(16px, 5.1vw, 80px)",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <Link
            href="/download"
            className="transition-opacity hover:opacity-60"
            style={{ color: "var(--text-primary)", fontSize: "28px", fontWeight: 600 }}
            onClick={() => setOpen(false)}
          >
            Download
          </Link>
          {user ? (
            <button
              onClick={() => { handleSignOut(); setOpen(false); }}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#f87171", fontSize: "28px", fontWeight: 600, textAlign: "left", padding: 0 }}
            >
              Sign out
            </button>
          ) : (
            <>
              <Link
                href="/login"
                className="transition-opacity hover:opacity-60"
                style={{ color: "var(--text-primary)", fontSize: "28px", fontWeight: 600 }}
                onClick={() => setOpen(false)}
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="transition-opacity hover:opacity-60"
                style={{ color: "var(--text-primary)", fontSize: "28px", fontWeight: 600 }}
                onClick={() => setOpen(false)}
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      )}
    </>
  );
}