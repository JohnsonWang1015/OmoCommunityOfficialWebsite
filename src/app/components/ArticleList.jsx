"use client";

import Link from "next/link";
import { theme } from "@/styles/theme";
import { useEffect, useState } from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { getAllNotices } from "@/lib/noticeAPI";
import DOMPurify from "dompurify";
import { motion } from "framer-motion";

export default function ArticleList() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getAllNotices()
            .then((data) => {
                setArticles(data);
            })
            .catch((err) => {
                console.error(`取得公告發生錯誤: ${err}`);
                setArticles([]);
            });
    }, []);

    const renderArticleExcerpt = (article) => {
        const maxLength = 60;

        const temp = document.createElement("div");
        temp.innerHTML = DOMPurify.sanitize(article.content || "");
        const textContent = temp.textContent || temp.innerText || "";

        const shortened =
            textContent.length > maxLength
                ? textContent.slice(0, maxLength) + "..."
                : textContent;

        return (
            <p className="text-gray-700 leading-relaxed">
                {shortened}
                {textContent.length > maxLength && (
                    <span className="font-medium text-accent-dark ml-2">
                        了解更多 →
                    </span>
                )}
            </p>
        );
    };

    return (
        <section
            className="pt-32 pb-35 px-4"
            style={{
                background: theme.gradients.secondary,
            }}
        >
            <div className="max-w-6xl mx-auto text-white">
                <h2 className="text-4xl font-bold text-center mb-12">
                    社區最新公告
                </h2>

                <div className="grid gap-8 md:grid-cols-2">
                    {articles &&
                        articles.map((article, idx) => (
                            <motion.div
                                key={article.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                            >
                                <Link
                                    href={`/notices/${article.id}`}
                                    className="group block bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-white/40 hover:border-accent-dark hover:scale-[1.02] transition-all text-gray-800"
                                >
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent-dark">
                                        {article.title}
                                    </h3>

                                    <div className="flex items-center text-sm text-gray-500 mb-3">
                                        <CalendarIcon className="w-5 h-5 mr-2" />
                                        {new Date(
                                            article.publishTime
                                        ).toLocaleDateString("zh-TW", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </div>

                                    {renderArticleExcerpt(article)}

                                    <p className="font-medium text-primary-dark ml-2 text-end">
                                        了解更多 →
                                    </p>
                                </Link>
                            </motion.div>
                        ))}
                </div>
            </div>
        </section>
    );
}
