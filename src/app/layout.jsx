import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    metadataBase: new URL("https://wennei.org/"),
    title: {
        default: "塭內社區官方網站",
        template: "%s | 塭內社區官方網站",
    },
    applicationName: "塭內社區官方網站",
    description: "苗栗縣竹南鎮塭內社區官方網站，提供社區最新公告、生態導覽、文化活動、交通資訊與在地故事，邀您探索塭內之美。",
    icons: {
        icon: "/images/logo.png",
        shortcut: "/images/logo.png",
        apple: "/images/logo.png",
        other: {
            rel: "icon",
            url: "/images/logo.png",
        },
    },
    openGraph: {
        images: [
            {
                url: "/images/logo.png",
                width: 800,
                height: 600,
                alt: "塭內社區官方網站 Logo",
            }
        ],
        title: "塭內社區官方網站",
        description: "苗栗縣竹南鎮塭內社區官方網站，提供社區最新公告、生態導覽、文化活動、交通資訊與在地故事，邀您探索塭內之美。",
        url: "https://wennei.org/",
        siteName: "塭內社區官方網站",
        locale: "zh-TW",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            nosnippet: false,
            noarchive: false,
        },
    },
    twitter: {
        card: "summary_large_image",
        images: ["/images/logo.png"],
        site: "@wennei",
        creator: "@wennei",
    },
    alternates: {
        canonical: "https://wennei.org/",
        languages: {
            "zh-TW": "https://wennei.org/",
        },
    },
};

export const viewport = {
    initialScale: 1,
    width: "device-width",
    height: "device-height",
    maximumScale: 1,
    minimumScale: 1,
    userScalable: false,
};

export default function RootLayout({ children }) {
    return (
        <html lang="zh-TW">
            <head>
                <!-- Google tag (gtag.js) -->
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-LMXSZCD3SH"></script>
                <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments)}
                    gtag('js', new Date());

                    gtag('config', 'G-LMXSZCD3SH');
                </script>
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "塭內社區官方網站",
                        url: "https://wennei.org/",
                        logo: "https://wennei.org/images/logo.png",
                    })
                }} />
            </head>
            <body className={`${inter.className} antialiased text-gray-800`}>
                <div id="top">{children}</div>
            </body>
        </html>
    );
}
