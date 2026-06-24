"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        router.push("/login");
      } else {
        setUser(data.session.user);
      }
    });
  }, []);

  if (!user) return null;

  return (
    <div style={{ minHeight: "100vh", display: "flex" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "240px",
          borderRight: "1px solid var(--border)",
          padding: "24px 16px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          background: "var(--bg)",
        }}
      >
        <p style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "24px", paddingLeft: "8px" }}>
          Volgrei
        </p>

        <NavItem label="Dashboard" active />
        <NavItem label="Tasks" />
        <NavItem label="Notes" />
        <NavItem label="Grei" />

        <div style={{ flex: 1 }} />

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "16px" }}>
          <p style={{ fontSize: "12px", color: "var(--text-muted)", paddingLeft: "8px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {user.email}
          </p>
        </div>
      </aside>

      {/* Main content */}
      <main style={{ marginLeft: "240px", flex: 1, padding: "48px max(24px, 3vw)" }}>
        <h1 style={{ fontSize: "24px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px" }}>
          Dashboard
        </h1>
        <p style={{ fontSize: "14px", color: "var(--text-secondary)" }}>
          Benvenuto su Volgrei.
        </p>
      </main>
    </div>
  );
}

function NavItem({ label, active }: { label: string; active?: boolean }) {
  return (
    <button
      style={{
        background: active ? "var(--surface)" : "none",
        border: "none",
        borderRadius: "8px",
        padding: "8px 12px",
        fontSize: "14px",
        fontWeight: active ? 500 : 400,
        color: active ? "var(--text-primary)" : "var(--text-secondary)",
        textAlign: "left",
        cursor: "pointer",
        width: "100%",
      }}
    >
      {label}
    </button>
  );
}