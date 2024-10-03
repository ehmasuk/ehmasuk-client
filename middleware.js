import { NextResponse } from "next/server";
import { auth } from "./auth";

export async function middleware(request) {
    const path = request.nextUrl.pathname;

    const session = await auth();

    if (!session && path === "/admin") {
        return NextResponse.redirect(new URL("/login", request.url));
    }
    if (session && path === "/login") {
        return NextResponse.redirect(new URL("/", request.url));
    }
}

export const config = {
    matcher: ["/", "/admin", "/login"],
};
