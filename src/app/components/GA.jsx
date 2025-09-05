"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function GA() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (!GA_ID) return;
        const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
        window.gtag?.("event", "page_view", {
            page_title: document.title,
            page_location: window.location.href,
            page_path: url,
        });
    }, [pathname, searchParams]);

    return (
        <div>
            {/* gtag 基本載入 */}
            <Script
                id="gtag-src"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_ID}', { send_page_view: false });
                `}
            </Script>
        </div>
    )
}
