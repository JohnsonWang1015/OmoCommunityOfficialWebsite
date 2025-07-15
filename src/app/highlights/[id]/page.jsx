"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import SanitizedHtmlContent from "@/app/components/SanitizedHtmlContent";
import { getHighlightById } from "@/lib/highlightAPI";
import { ArrowLeftIcon, CalendarIcon } from "@heroicons/react/24/outline";

export default function HighlightContentPage() {
    const router = useRouter();
    const { id } = useParams();
    const [highlight, setHighlight] = useState(null);

    useEffect(() => {
        if(id) {
            getHighlightById(id)
                .then((data) => {
                    setHighlight(data || {});
                })
                .catch((error) => {
                    console.error("取得活動集錦資料失敗:", error);
                    setHighlight(null);
                });
        }
    }, [id]);

    if (!highlight) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500">載入中或找不到資料...</p>
            </div>
        );
    }

    return (
        <main className="bg-white py-16 px-4 md:px-8 pt-32 pb-32">
            <div className="max-w-4xl mx-auto">
                {/* 返回按鈕 */}
                <button
                    onClick={() => router.back()}
                    className="flex items-center text-accent-dark hover:text-accent-light mb-6 transition cursor-pointer"
                >
                    <ArrowLeftIcon className="w-5 h-5 mr-1" />
                    返回首頁
                </button>

                <motion.h1
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    {highlight.title}
                </motion.h1>

                <motion.div className="flex items-center text-sm text-gray-500 mb-6">
                    <CalendarIcon className="w-5 h-5 mr-2" />
                    {new Date(highlight.publishTime).toLocaleDateString("zh-TW", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    <SanitizedHtmlContent html={highlight.content} />
                </motion.div>
            </div>
        </main>
    )
}