import { redirect } from 'next/dist/server/api-utils'
import {NextResponse} from 'next/server'
import type { NextRequest } from 'next/server'

// export function middleware(request:NextRequest) {
    
//     request.cookies.set('yobina','hoge');
    
//     if(request.nextUrl.pathname.startsWith('/about')) {
//         return NextResponse.rewrite(new URL('/about-2', request.url))
//     }
//     if(request.nextUrl.pathname.startsWith('/dashboard')) {
//         return NextResponse.rewrite(new URL('/dashboard/user',request.url))
//     }
// }

export function middleware(request: NextRequest) {
//    return NextResponse.redirect(new URL('/home', request.url))
}

// export const config={
//     matcher: '/about/:path*',
// }