"use client";

import { theme } from "@/styles/theme";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

const navItems = [
    { name: ":::", href: "#start-U" },
    { name: "最新消息", href: "/#announcement" },
    { name: "關於我們", href: "/about" },
    { name: "檔案下載", href: "/downloads" },
    { name: "介紹影片", href: "/#introVideo" },
];
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };
        document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
    }, [isOpen]);

    return (
        <nav
            className="fixed w-full z-50 shadow-md"
            style={{
                background: `linear-gradient(to right, ${theme.colors.primary.main}CC, ${theme.colors.primary.dark}CC)`,
                backdropFilter: "blur(8px)",
            }}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 md:h-20 px-2">
                    <Link
                        href="/"
                        className="flex justify-center items-center space-x-2"
                        aria-label="返回首頁"
                    >
                        <Image
                            src={"/images/logo.png"}
                            alt="塭內社區 Logo 圖"
                            className="h-8 md:h-12 w-auto img-fluid"
                            width={100}
                            height={30}
                            priority
                        />
                        <h1 className="text-white text-lg md:text-2xl font-bold hidden sm:block">
                            塭內社區
                        </h1>
                    </Link>

                    {/* 電腦版選單 */}
                    <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
                        {navItems.map((item) => (
                            <Link
                                title={item.name === ":::" ? "上方內容區" : item.name}
                                accessKey={item.href.includes("#start-U") ? "U" : ""}
                                key={item.name}
                                href={item.href}
                                className={`text-white text-base lg:text-lg transition-colors duration-300 relative group ${
                                    pathname === item.href
                                        ? "font-bold text-white"
                                        : "hover:text-gray-300"
                                }`}
                            >
                                <span className="relative">
                                    {item.name}
                                    <motion.span
                                        layoutId={`nav-${item.name}`}
                                        className="absolute inset-0 bottom-0 h-0.5 left-0 w-full"
                                        style={{
                                            background: `linear-gradient(to right, ${theme.colors.primary.main}, ${theme.colors.primary.dark})`,
                                        }}
                                        initial={{scaleX: 0}}
                                        whileHover={{scaleX: 1}}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeInOut",
                                        }}
                                    ></motion.span>
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* 手機版選單按鈕 */}
                    <button
                        className="md:hidden text-white p-2 z-50"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="導航選單"
                        title="導航選單"
                    >
                        {isOpen ? (
                            <XMarkIcon className="h-6 w-6" />
                        ) : (
                            <Bars3Icon className="h-6 w-6" />
                        )}
                    </button>
                    {/* 手機版選單 */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeInOut",
                                }}
                                className="fixed inset-0 z-40 flex"
                            >
                                {/* 背景遮罩 */}
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
                                    onClick={() => setIsOpen(false)}
                                    aria-hidden="true"
                                ></div>

                                {/* 選單本體 */}
                                <div
                                    className="ml-auto w-200 sm:w-80 shadow-xl z-50 flex flex-col pt-20 bg-white"
                                    style={{
                                        background: `linear-gradient(to bottom, ${theme.colors.secondary.main}, ${theme.colors.secondary.dark})`,
                                    }}
                                >
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="py-4 px-6 text-lg text-dark bg-white/90 hover:bg-white/20 transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </nav>
    );
}
