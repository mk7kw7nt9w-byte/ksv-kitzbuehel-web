import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/de/Mitgliedschaft") {
    const url = request.nextUrl.clone();
    url.pathname = "/de/mitgliedschaft";
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = { matcher: "/de/:path*" };
