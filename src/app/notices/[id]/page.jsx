"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SanitizedHtmlContent from "@/components/SanitizedHtmlContent";
import { theme } from "@/styles/theme";
import { useEffect, useState } from "react";
import { getNoticeById } from "@/lib/noticeAPI";
import { useParams } from "next/navigation";

export default function ArticleDetailPage() {
    const params = useParams();
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
                background: `linear-gradient(to bottom, ${theme.colors.background.warm} 0%, ${theme.colors.background.nature} 100%)`,
            }}
        >
            <Navbar />

            <section className="mt-12 py-20 px-4 md:px-8 bg-white">
                <div className="max-w-3xl mx-auto">
                    {loading ? (
                        <p className="text-center text-gray-500 text-xl">
                            內容載入中...
                        </p>
                    ) : error ? (
                        <p className="text-center text-red-600 text-xl">
                            錯誤：{error}
                        </p>
                    ) : (
                        <>
                            <h1 className="text-3xl font-bold text-secondary-dark mb-4">
                                {article.title}
                            </h1>
                            <p className="text-gray-600 mb-6">
                                {new Date(
                                    article.publishTime
                                ).toLocaleDateString("zh-TW", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </p>
                            <SanitizedHtmlContent html={article.content} />
                        </>
                    )}
                </div>
            </section>
            <Footer />
        </main>
    );
}
