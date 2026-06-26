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
        <style>{`
          .nav-inner {
            padding-left: 20px;
            padding-right: 20px;
          }
          @media (min-width: 768px) {
            .nav-inner {
              padding-left: 40px;
              padding-right: 40px;
            }
          }
          @media (min-width: 1024px) {
            .nav-inner {
              padding-left: 60px;
              padding-right: 60px;
            }
          }
          @media (min-width: 1280px) {
            .nav-inner {
              padding-left: 80px;
              padding-right: 80px;
            }
          }
          .nav-divider-margin {
            margin-right: 10px;
          }
          .nav-login-margin {
            margin-left: 10px;
          }
          @media (min-width: 1024px) {
            .nav-divider-margin { margin-right: 13px; }
            .nav-login-margin  { margin-left: 13px; }
          }
          @media (min-width: 1280px) {
            .nav-divider-margin { margin-right: 16px; }
            .nav-login-margin  { margin-left: 16px; }
          }
          .nav-pill {
            border-radius: 999px;
            padding: 6px 12px;
            font-size: 13px;
            font-weight: 400;
            transition: color 0.15s ease;
            background: transparent;
          }
          .nav-pill:hover {
            color: var(--text-primary) !important;
            background: rgba(255, 255, 255, 0.06);
          }
          .nav-signup {
            border-radius: 999px;
            padding: 7px 13px;
            font-size: 13px;
            font-weight: 500;
            background: #f0f0f0;
            color: black;
            transition: background 0.15s ease;
          }
          .nav-signup:hover { background: #ffffff; }

          .profile-menu-item {
            width: 100%;
            background: none;
            border: none;
            cursor: pointer;
            padding: 8px 10px;
            font-size: 13px;
            color: var(--text-secondary);
            text-align: left;
            border-radius: 6px;
            display: flex;
            align-items: center;
            gap: 9px;
            text-decoration: none;
            transition: background 0.12s ease;
          }
          .profile-menu-item:hover {
            background: rgba(255, 255, 255, 0.06);
            color: var(--text-primary);
          }
          .profile-menu-signout {
            width: 100%;
            background: none;
            border: none;
            cursor: pointer;
            padding: 8px 10px;
            font-size: 13px;
            color: #f87171;
            text-align: left;
            border-radius: 6px;
            display: flex;
            align-items: center;
            gap: 9px;
            transition: background 0.12s ease;
          }
          .profile-menu-signout:hover { background: rgba(248,113,113,0.08); }
        `}</style>

        <div className="nav-inner w-full flex items-center justify-between" style={{ height: "65px" }}>
          <Link href="/" className="tracking-tight" style={{ color: "var(--text-primary)", fontSize: "20px", fontWeight: 700 }}>
            Volgrei
          </Link>

          <div className="flex items-center">
            {user ? (
              /* ── LOGGED IN: solo icona utente ── */
              <div ref={profileRef} style={{ position: "relative" }}>
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
                    minWidth: "180px",
                    zIndex: 100,
                  }}>
                    {/* Email */}
                    <p style={{ fontSize: "11px", color: "var(--text-muted)", padding: "6px 10px 8px", letterSpacing: "0.01em" }}>
                      {user.email}
                    </p>
                    <div style={{ height: "1px", background: "var(--border)", margin: "0 0 4px" }} />

                    {/* Dashboard */}
                    <Link href="/dashboard" className="profile-menu-item" onClick={() => setProfileOpen(false)}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <rect x="1" y="1" width="5.5" height="5.5" rx="1.2" stroke="currentColor" strokeWidth="1.1"/>
                        <rect x="7.5" y="1" width="5.5" height="5.5" rx="1.2" stroke="currentColor" strokeWidth="1.1"/>
                        <rect x="1" y="7.5" width="5.5" height="5.5" rx="1.2" stroke="currentColor" strokeWidth="1.1"/>
                        <rect x="7.5" y="7.5" width="5.5" height="5.5" rx="1.2" stroke="currentColor" strokeWidth="1.1"/>
                      </svg>
                      Dashboard
                    </Link>

                    {/* Profile */}
                    <Link href="/profile" className="profile-menu-item" onClick={() => setProfileOpen(false)}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="4.5" r="2.2" stroke="currentColor" strokeWidth="1.1"/>
                        <path d="M1.5 12c0-2.485 2.462-4 5.5-4s5.5 1.515 5.5 4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
                      </svg>
                      Profile
                    </Link>

                    {/* Settings */}
                    <Link href="/settings" className="profile-menu-item" onClick={() => setProfileOpen(false)}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="2" stroke="currentColor" strokeWidth="1.1"/>
                        <path d="M7 1v1.2M7 11.8V13M1 7h1.2M11.8 7H13M2.75 2.75l.85.85M10.4 10.4l.85.85M2.75 11.25l.85-.85M10.4 3.6l.85-.85" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
                      </svg>
                      Settings
                    </Link>

                    <div style={{ height: "1px", background: "var(--border)", margin: "4px 0" }} />

                    {/* Sign out */}
                    <button className="profile-menu-signout" onClick={handleSignOut}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M5 2H2.5A1.5 1.5 0 001 3.5v7A1.5 1.5 0 002.5 12H5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
                        <path d="M9.5 9.5L13 7l-3.5-2.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="13" y1="7" x2="5" y2="7" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
                      </svg>
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* ── NOT LOGGED IN: layout originale ── */
              <>
                <Link
                  href="/download"
                  className="nav-pill nav-divider-margin md:block hidden"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Download
                </Link>

                <div className="md:block hidden" style={{ width: "1px", height: "16px", background: "var(--border)" }} />

                <Link
                  href="/login"
                  className="nav-pill nav-login-margin"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="nav-signup"
                  style={{ marginLeft: "8px" }}
                >
                  Sign up
                </Link>

                {/* Hamburger mobile */}
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
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Menu mobile — solo quando non loggato */}
      {!user && open && (
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
            padding: "40px 20px",
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
        </div>
      )}
    </>
  );
}