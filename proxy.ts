import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  if (path !== "/de/mitgliedschaft" && path.toLowerCase() === "/de/mitgliedschaft") {
    const destination = request.nextUrl.clone();
    destination.pathname = "/de/mitgliedschaft";
    return NextResponse.redirect(destination, 308);
  }
  return NextResponse.next();
}

export const config = { matcher: "/de/:path*" };
