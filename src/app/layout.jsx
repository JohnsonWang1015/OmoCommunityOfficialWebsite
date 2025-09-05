import { Inter } from "next/font/google";
import "./globals.css";
import HeadContent from "@/app/components/HeadContent";
import GA from "@/app/components/GA";
import { Suspense } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    metadataBase: new URL("https://www.wennei.org/"),
    title: {
        default: "塭內社區官方網站",
        template: "%s | 塭內社區官方網站",
    },
    applicationName: "塭內社區官方網站",
    description: "苗栗縣竹南鎮塭內社區官方網站，提供社區最新公告、生態導覽、文化活動、交通資訊與在地故事，邀您探索塭內之美。",
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
            { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
        ],
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
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
        url: "https://www.wennei.org/",
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
        canonical: "https://www.wennei.org/",
        languages: {
            "zh-TW": "https://www.wennei.org/",
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
                <HeadContent />
            </head>
            <body className={`${inter.className} antialiased text-gray-800`}>
                <Suspense fallback={null}>
                    <GA />
                </Suspense>
                <div id="top">{children}</div>
            </body>
        </html>
    );
}
