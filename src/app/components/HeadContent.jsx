"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function HeadContent() {
    return (
        <>
            {/* JSON-LD 保留在 SSR 渲染 */}
            <Script
                id="organization-jsonld"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "塭內社區官方網站",
                        url: "https://wennei.org/",
                        logo: "https://wennei.org/images/logo.png",
                    }),
                }}
            />
        </>
    );
}
