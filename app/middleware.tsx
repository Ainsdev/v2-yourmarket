import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// this middleware refreshes the user's session and must be run
// for any Server Component route that uses `createServerComponentSupabaseClient`
export async function middleware(req: NextRequest) {
    const res = NextResponse.next();

    // ignoring as I believe this is failing due to v12 vs v13
    // NextRequest and NextResponse types being slightly different
    // TODO Remove this ignore when we upgrade Next.js to v13
    // @ts-ignore
    const supabase = createMiddlewareClient({ req, res }, {
        supabaseUrl: process.env.SUPABASE_URL,
        supabaseKey: process.env.SUPABASE_KEY,
    });

    const {
        data: { session }
    } = await supabase.auth.getSession();

    if (!session && req.nextUrl.pathname.startsWith('/dashboard')) {
        // Auth condition not met, redirect to home page.
        const redirectUrl = req.nextUrl.clone();
        redirectUrl.pathname = '/login';
        redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname);
        return NextResponse.redirect(redirectUrl);
    } 

    return res;
}