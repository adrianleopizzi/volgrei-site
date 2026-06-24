"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
    } else {
      router.push("/dashboard");
    }
    setLoading(false);
  }

  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 max(16px, 4.4vw)" }}>
      <div style={{ width: "100%", maxWidth: "400px", display: "flex", flexDirection: "column", gap: "24px" }}>
        <div>
          <h1 style={{ fontSize: "24px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px" }}>Accedi</h1>
          <p style={{ fontSize: "14px", color: "var(--text-secondary)" }}>
            Non hai un account?{" "}
            <Link href="/signup" style={{ color: "var(--text-primary)", textDecoration: "underline" }}>Registrati</Link>
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "8px", padding: "12px 16px", fontSize: "14px", color: "var(--text-primary)", outline: "none", width: "100%" }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "8px", padding: "12px 16px", fontSize: "14px", color: "var(--text-primary)", outline: "none", width: "100%" }}
          />
        </div>

        {error && <p style={{ fontSize: "13px", color: "#f87171" }}>{error}</p>}

        <button
          onClick={handleLogin}
          disabled={loading}
          style={{ background: "#f0f0f0", color: "#000", padding: "12px", fontSize: "14px", fontWeight: 600, border: "none", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.6 : 1, borderRadius: "8px" }}
        >
          {loading ? "Accesso..." : "Accedi"}
        </button>
      </div>
    </main>
  );
}