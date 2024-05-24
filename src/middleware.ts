import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // Get the userId from the cookie
  const userId = req.cookies.get('userId')?.value;

  // Check if the user is authenticated
  if (!userId) {
    // Redirect to the login page if not authenticated
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // If authenticated, continue to the requested resource
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};