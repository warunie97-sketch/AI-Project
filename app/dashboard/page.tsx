"use client";
import AuthGuard from "@/app/components/AuthGuard";
import { supabaseBrowser } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const supabase = supabaseBrowser();
  const router = useRouter();

  async function logout() {
    await supabase.auth.signOut();
    router.replace("/auth/login");
  }

  return (
    <AuthGuard>
      <div style={{ padding: "40px" }}>
        <h2>Dashboard</h2>
        <p>Selamat datang ke AI menulis ✨</p>
        <button onClick={logout} style={{ marginTop: "20px" }}>
          Log Keluar
        </button>
      </div>
    </AuthGuard>
  );
}
