import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    metadataBase: new URL("https://promap.topedu.io:4000/"),
    title: {
        default: "塭內社區官方網站",
        template: "%s | 塭內社區官方網站",
    },
    applicationName: "塭內社區官方網站",
    description: "苗栗縣竹南鎮塭內社區官方網站",
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
        images: "/images/logo.png",
        title: "塭內社區官方網站",
        description: "苗栗縣竹南鎮塭內社區官方網站",
        url: "https://promap.topedu.io:4000/",
        siteName: "塭內社區官方網站",
        locale: "zh-TW",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            nosnippet: true,
            noarchive: true,
        },
    },
    twitter: {
        card: "summary",
        site: "@promap",
        creator: "@promap",
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
            <body className={inter.className}>
                <div id="top">{children}</div>
            </body>
        </html>
    );
}
