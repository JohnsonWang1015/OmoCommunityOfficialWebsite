"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function HeadContent() {
    useEffect(() => {
        // 動態建立 gtag script
        const script1 = document.createElement("script");
        script1.src = "https://www.googletagmanager.com/gtag/js?id=G-LMXSZCD3SH";
        script1.async = true;
        document.head.appendChild(script1);

        // 初始化 gtag
        window.dataLayer = window.dataLayer || [];
        function gtag(){ window.dataLayer.push(arguments); }
        gtag("js", new Date());
        gtag("config", "G-LMXSZCD3SH");
    }, []);

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
