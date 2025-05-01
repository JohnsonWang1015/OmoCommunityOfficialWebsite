"use client";

import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

export default function ErrorMessage({
    title = "發生錯誤",
    description = "請稍後再試，或聯絡網站管理員。",
    backUrl = "/",
    backText = "返回首頁",
}) {
    useEffect(() => {
        document.title = `${title} | 塭內社區官方網站`;
    }, [title]);

    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-16 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full"
            >
                <div className="flex justify-center mb-6 text-red-500">
                    <AlertTriangle className="w-12 h-12" />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                    {title}
                </h1>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    {description}
                </p>
                <Link
                    href={backUrl}
                    className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full transition-colors"
                >
                    {backText}
                </Link>
            </motion.div>
        </section>
    );
}
