// app/lib/supabaseServer.ts
import { createClient } from "@supabase/supabase-js";

export const supabaseServer = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!, // use service role key on the server
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  }
);
