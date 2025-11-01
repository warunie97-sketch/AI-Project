"use client";
import { useEffect, useState } from "react";
import { supabaseBrowser } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function AuthGuard({ children }) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const supabase = supabaseBrowser();
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) router.replace("/auth/login");
      setReady(true);
    });

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) router.replace("/auth/login");
    });

    return () => sub.subscription.unsubscribe();
  }, [router]);

  if (!ready) return null;
  return <>{children}</>;
}
