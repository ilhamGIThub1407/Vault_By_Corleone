import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  
  const isProtectedRoute = pathname.startsWith("/dashboard");

  const token = req.cookies.get("token")?.value;

  if (isProtectedRoute && !token) {
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = "/login";
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"], 
};
