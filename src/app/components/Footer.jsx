"use client";

import { theme } from "@/styles/theme";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowUp, FaFacebookF, FaLine } from "react-icons/fa";

const socialLinks = [
    {
        name: "Facebook",
        href: "https://www.facebook.com/wennei350/?locale=zh_TW",
        icon: <FaFacebookF className="w-6 h-6" />,
    },
    {
        name: "LINE",
        href: "https://line.me/R/ti/p/@285bufrr",
        icon: <FaLine className="w-6 h-6" />,
    },
];
const sitemap = [
    { name: "首頁", href: "/" },
    { name: "公告", href: "/notices" },
    { name: "活動", href: "/events" },
    { name: "檔案下載", href: "/downloads" },
    { name: "關於我們", href: "/about" },
];

export default function Footer() {
    return (
        <footer
            className="text-white relative scroll-mt-20"
            style={{
                background: `linear-gradient(to right, ${theme.colors.primary.main}, ${theme.colors.primary.dark})`,
            }}
        >
            {/* 背景動畫 */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.08 }}
                transition={{ duration: 2 }}
                className="absolute inset-0"
                style={{
                    background: `linear-gradient(to right, ${theme.colors.primary.main}, ${theme.colors.primary.dark})`,
                    mixBlendMode: "multiply",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></motion.div>
            <div className="container mx-auto px-4 py-8 sm:py-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* 左側聯絡資訊 */}
                    <motion.div
                        animate={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold mb-6 text-primary-light">
                            <Link href="#start-B"
                                  title="下方內容區"
                                  accessKey="B"
                                  className="mr-2">
                                :::
                            </Link>
                            聯絡資訊
                        </h3>
                        <div className="space-y-3">
                            <p className="flex items-start group">
                                <svg
                                    className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-primary-light group-hover:text-primary-main transition-colors"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <span className="text-white/90 group-hover:text-white transition-colors">
                                    35043 苗栗縣竹南鎮港墘里12鄰32-1號
                                </span>
                            </p>
                            <p className="flex items-center group">
                                <svg
                                    className="w-6 h-6 mr-3 flex-shrink-0 text-primary-light group-hover:text-primary-main transition-colors"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <span className="text-white/90 group-hover:text-white transition-colors">
                                    037-477748
                                </span>
                            </p>
                            <p className="flex items-center group">
                                <svg
                                    className="w-6 h-6 mr-3 flex-shrink-0 text-primary-light group-hover:text-primary-main transition-colors"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <span className="text-white/90 group-hover:text-white transition-colors">
                                    wennei350@gmail.com
                                </span>
                            </p>
                        </div>
                    </motion.div>
                    {/* 右側社群連結 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:text-right flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-primary-light">
                                社群媒體
                            </h3>
                            <div className="flex space-x-4 md:justify-end">
                                {socialLinks.map((item) => (
                                    <Link
                                        aria-label={item.name}
                                        key={item.name}
                                        href={item.href}
                                        target="_blank"
                                        title={`${item.name} (另開新視窗)`}
                                        rel="noopener noreferrer"
                                        className="text-white/70 hover:text-primary-light transition-colors transform hover:scale-110"
                                    >
                                        <span className="sr-only">
                                            {item.name}
                                        </span>
                                        {item.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="mt-8 md:mt-6 flex justify-center md:justify-end">
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                title="回頂部"
                                aria-label="回頂部"
                                className="text-white/70 hover:text-white transition-transform hover:scale-125"
                            >
                                <FaArrowUp className="w-6 h-6" />
                            </button>
                        </div>
                    </motion.div>
                </div>
                {/* 網站地圖列 */}
                <div className="mt-10 pt-4 border-t border-white/10 text-sm text-white/70 text-center">
                    <ul className="flex flex-wrap justify-center gap-4">
                        {sitemap.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="hover:text-white transition-colors"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* 版權資訊 */}
                <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
                    <p>
                        © {new Date().getFullYear()} 塭內社區. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
