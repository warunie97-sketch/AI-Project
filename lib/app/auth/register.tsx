"use client";
import { useState } from "react";
import { supabaseBrowser } from "@/lib/supabaseClient";
import Link from "next/link";

export default function RegisterPage() {
  const supabase = supabaseBrowser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const onRegister = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) setError(error.message);
    else window.location.href = "/dashboard";
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Daftar Akaun</h2>
      <form onSubmit={onRegister}>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Kata Laluan" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Daftar</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <p>Sudah ada akaun? <Link href="/auth/login">Log Masuk</Link></p>
    </div>
  );
}
