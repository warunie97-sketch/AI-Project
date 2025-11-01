"use client";
import { supabaseBrowser } from "../../lib/supabaseClient";
import { useRouter } from "next/navigation";


export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/auth/login");
      }
    };

    checkAuth();
  }, [router]);

  return <>{children}</>;
}
