"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabaseClient";

export default function Landing() {
  const router = useRouter();
  useEffect(() => {
    const supabase = supabaseBrowser();
    supabase.auth.getSession().then(({ data }) => {
      router.replace(data.session ? "/dashboard" : "/auth/login");
    });
  }, [router]);
  return null;
}
