"use client";
import { useState } from "react";
import { supabaseBrowser } from "@/lib/supabaseClient";
import Link from "next/link";

export default function LoginPage() {
  const supabase = supabaseBrowser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const onLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    else window.location.href = "/dashboard";
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Log Masuk</h2>
      <form onSubmit={onLogin}>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Kata Laluan" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Masuk</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <p>Belum ada akaun? <Link href="/auth/register">Daftar</Link></p>
    </div>
  );
}
