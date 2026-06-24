"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSignup() {
    if (password !== confirm) {
      setError("Le password non coincidono.");
      return;
    }
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
    }
    setLoading(false);
  }

  if (success) {
    return (
      <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 max(16px, 4.4vw)" }}>
        <div style={{ width: "100%", maxWidth: "400px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1 style={{ fontSize: "24px", fontWeight: 700, color: "var(--text-primary)" }}>Controlla la tua email</h1>
          <p style={{ fontSize: "14px", color: "var(--text-secondary)" }}>
            Abbiamo inviato un link di conferma a <strong style={{ color: "var(--text-primary)" }}>{email}</strong>. Clicca il link per attivare il tuo account.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 max(16px, 4.4vw)" }}>
      <div style={{ width: "100%", maxWidth: "400px", display: "flex", flexDirection: "column", gap: "24px" }}>
        <div>
          <h1 style={{ fontSize: "24px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px" }}>Crea account</h1>
          <p style={{ fontSize: "14px", color: "var(--text-secondary)" }}>
            Hai già un account?{" "}
            <Link href="/login" style={{ color: "var(--text-primary)", textDecoration: "underline" }}>Accedi</Link>
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
          <input
            type="password"
            placeholder="Conferma password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "8px", padding: "12px 16px", fontSize: "14px", color: "var(--text-primary)", outline: "none", width: "100%" }}
          />
        </div>

        {error && <p style={{ fontSize: "13px", color: "#f87171" }}>{error}</p>}

        <button
          onClick={handleSignup}
          disabled={loading}
          style={{ background: "#f0f0f0", color: "#000", padding: "12px", fontSize: "14px", fontWeight: 600, border: "none", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.6 : 1, borderRadius: "8px" }}
        >
          {loading ? "Registrazione..." : "Crea account"}
        </button>
      </div>
    </main>
  );
}