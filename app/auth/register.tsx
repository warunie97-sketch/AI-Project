"use client";

import { useState } from "react";
import { supabaseBrowser } from "@/lib/supabaseClient";
import Link from "next/link";

export default function RegisterPage() {
  const supabase = supabaseBrowser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) setMessage(error.message);
    else setMessage("Pendaftaran berjaya ✅ Sila semak email untuk verifikasi.");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Daftar Akaun ✨</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br/><br/>
        <input
          type="password"
          placeholder="Kata Laluan"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br/><br/>
        <button type="submit">Daftar</button>
      </form>

      {message && <p>{message}</p>}

      <p>
        Dah ada akaun? <Link href="/auth/login">Log masuk</Link>
      </p>
    </div>
  );
}
