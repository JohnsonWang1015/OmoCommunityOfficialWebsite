"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import SanitizedHtmlContent from "@/app/components/SanitizedHtmlContent";
import { theme } from "@/styles/theme";
import { useEffect, useState } from "react";
import { getNoticeById } from "@/lib/noticeAPI";
import { useParams, useRouter } from "next/navigation";
import { CalendarIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function ArticleDetailPage() {
    const params = useParams();
    const router = useRouter();
    const { id } = params;

    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getNoticeById(id)
            .then((data) => {
                if (data?.id) {
                    setArticle(data);
                } else {
                    throw new Error("公告不存在或已被刪除");
                }
            })
            .catch((err) => {
                console.error(`取得公告發生錯誤: `, err);
                setError(err.message || "取得公告發生錯誤");
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    return (
        <main
            className="min-h-screen flex flex-col"
            style={{
                background: theme.gradients.secondary,
            }}
        >
            <section className="pt-32 pb-20 px-4 md:px-8">
                <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-12">
                    {loading ? (
                        <p className="text-center text-gray-500 text-xl">
                            內容載入中...
                        </p>
                    ) : error ? (
                        <p className="text-center text-red-600 text-xl">
                            錯誤：{error}
                        </p>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <button
                                onClick={() => router.back()}
                                className="flex items-center text-accent-dark hover:text-accent-light mb-6 transition-colors cursor-pointer"
                            >
                                <ArrowLeftIcon className="w-5 h-5 mr-1" />
                                回公告列表
                            </button>

                            <h1 className="text-3xl font-bold text-gray-800 mb-4">
                                {article.title}
                            </h1>

                            <div className="flex items-center text-gray-500 text-sm mb-6">
                                <CalendarIcon className="w-5 h-5 mr-2" />
                                {new Date(article.publishTime).toLocaleDateString(
                                    "zh-TW",
                                    {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    }
                                )}
                            </div>

                            <SanitizedHtmlContent html={article.content} />
                        </motion.div>
                    )}
                </div>
            </section>
        </main>
    );
}
