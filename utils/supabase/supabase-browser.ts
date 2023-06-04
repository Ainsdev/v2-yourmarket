import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
// import { env } from '../../../env';

// const url = env.SUPABASE_URL;
// const key = env.SUPABASE_KEY;

export const createBrowserClient = () => createClientComponentClient(
    {
        supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
        supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_KEY,
    }
)