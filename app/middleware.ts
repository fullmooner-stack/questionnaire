import { NextResponse, type NextRequest } from "next/server";
import { randomUUID } from "crypto";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  if (!request.cookies.get("sessionId")) {
    response.cookies.set("sessionId", randomUUID(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });
  }
  return response;
}

export const config = { matcher: "/:path*" };
