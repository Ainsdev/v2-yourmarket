import { cookies, headers } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

// import { env } from '../../../env';

// const url = env.SUPABASE_URL;
// const key = env.SUPABASE_KEY;
export const createServerClient = () => createServerComponentClient({
    cookies
},
{
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_KEY,
}
)
