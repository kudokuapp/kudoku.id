import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
  const home = new URL('/', request.url);

  if (!/^\/queue\/[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(request.nextUrl.pathname)) {
    return NextResponse.redirect(home);
  }

  // 7 is the '/queue/'
  if (request.nextUrl.pathname.length < 4 + 7)
    return NextResponse.redirect(home);

  if (request.nextUrl.pathname === '/queue') return NextResponse.redirect(home);
}

export const config = {
  matcher: ['/queue/:path*'],
};
