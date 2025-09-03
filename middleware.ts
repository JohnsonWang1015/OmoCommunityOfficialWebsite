import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import redis from "@/utils/redis";
import { IGNORE_PREFIX } from "./IGNORE_PREFIX";


export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // 跳過靜態/內部路徑
    if (IGNORE_PREFIX.some(p => pathname.startsWith(p))) {
        return NextResponse.next();
    }

    const ua = req.headers.get("user-agent") || "";
    const isBot = /(bot|crawler|spider|crawling)/i.test(ua);
    if (!isBot) {
        try {
            const key = `views:${pathname || "/"}`;
            await redis.incr(key);
            await redis.incr("views:__total__");
        } catch (_) {}
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next|api|favicon.ico|assets|static).*)"],
};
