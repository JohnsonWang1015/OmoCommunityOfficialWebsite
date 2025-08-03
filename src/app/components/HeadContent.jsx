import Script from "next/script";

export default function HeadContent() {
    return (
        <div>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-LMXSZCD3SH"
                strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-LMXSZCD3SH');
                `}
            </Script>
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
        </div>
    )
}
