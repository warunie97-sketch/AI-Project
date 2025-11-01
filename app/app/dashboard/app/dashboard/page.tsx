"use client";
import AuthGuard from "@/components/AuthGuard";
import dynamic from "next/dynamic";
import { supabaseBrowser } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

const AIWriterDashboard = dynamic(
  () => import("@/app/(dashboard)/AIWriterDashboard"),
  { ssr: false }
);

export default function DashboardPage() {
  const supabase = supabaseBrowser();
  const router = useRouter();

  async function logout() {
    await supabase.auth.signOut();
    router.replace("/auth/login");
  }

  return (
    <AuthGuard>
      <AIWriterDashboard />
    </AuthGuard>
  );
}
