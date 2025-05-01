"use client";

import Link from "next/link";
import { theme } from "@/styles/theme";
import { useEffect, useState } from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { getAllNotices } from "@/lib/noticeAPI";
import DOMPurify from "dompurify";

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
        const maxLength = 50;

        const temp = document.createElement("div");
        temp.innerHTML = DOMPurify.sanitize(article.content || "");
        const textContent = temp.textContent || temp.innerText || "";

        const shortened =
            textContent.length > maxLength
                ? textContent.slice(0, maxLength) + "..."
                : textContent;

        return (
            <div className="text-gray-700 leading-relaxed">
                {shortened}
                {textContent.length > maxLength && (
                    <span className="font-semibold text-secondary-main ml-2">
                        了解更多
                    </span>
                )}
            </div>
        );
    };

    return (
        <section
            className="py-25 px-4 md:px-0 mt-20"
            style={{
                background: `linear-gradient(to bottom right, ${theme.colors.background.light}, ${theme.colors.background.nature})`,
            }}
        >
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary-dark mb-12">
                    社區最新公告
                </h2>

                <div className="grid gap-8 md:grid-cols-2">
                    {articles &&
                        articles.map((article) => (
                            <Link
                                href={`/notices/${article.id}`}
                                key={article.id}
                                className="group block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 hover:border-secondary-main"
                            >
                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-secondary-dark transition-colors mb-2">
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

                                <p>{renderArticleExcerpt(article)}</p>
                            </Link>
                        ))}
                </div>
            </div>
        </section>
    );
}
