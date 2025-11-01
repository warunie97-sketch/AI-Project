"use client";
import { useState } from "react";
import { supabaseBrowser } from "@/lib/supabaseClient";
import Link from "next/link";

export default function RegisterPage() {
  const supabase = supabaseBrowser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    setError("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) setError(error.message);
    else window.location.href = "/dashboard";
  }

  return (
    <div style={{ padding: "40px" }}>
      <h2>Daftar Akaun</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          required
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        /><br/><br/>
        <input
          type="password"
          required
          placeholder="Kata Laluan"
          onChange={(e) => setPassword(e.target.value)}
        /><br/><br/>
        <button type="submit">Daftar</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <p>
        Sudah ada akaun?{" "}
        <Link href="/auth/login">Log Masuk</Link>
      </p>
    </div>
  );
}
