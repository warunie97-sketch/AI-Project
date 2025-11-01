"use client";
import { useState } from "react";
import { supabaseBrowser } from "../../lib/supabaseClient";
import Link from "next/link";

export default function LoginPage() {
  const supabase = supabaseBrowser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login(e: React.FormEvent) {
    e.preventDefault();
    await supabase.auth.signInWithPassword({ email, password });
  }

  return (
    <div style={{ padding: "40px" }}>
      <h2>Log Masuk</h2>
      <form onSubmit={login}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Log Masuk</button>
      </form>

      <p>
        Tiada akaun?{" "}
        <Link href="/auth/register">
          Daftar di sini
        </Link>
      </p>
    </div>
  );
}
