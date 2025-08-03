import dynamic from "next/dynamic";
import Script from "next/script";

// 只在 Client 載入 GTM，避免 SSR 水合錯誤
const GTMScripts = dynamic(() => import("./GTMScripts"), { ssr: false });

export default function HeadContent() {
    return (
        <div>
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
            <GTMScripts />
        </div>
    )
}
