"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CalendarIcon } from "@heroicons/react/24/outline";
import DOMPurify from "dompurify";
import { theme } from "@/styles/theme";
import { motion } from "framer-motion";
import { getAllNews } from "@/lib/newsAPI";

export default function EventsPage() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        getAllNews()
            .then((data) => {
                if (Array.isArray(data)) {
                    setEvents(data);
                } else {
                    console.error("取得活動列表失敗:", data);
                }
            })
            .catch((error) => {
                console.error("取得活動列表時發生錯誤:", error);
            });
    }, []);

    const renderExcerpt = (html) => {
        const temp = document.createElement("div");
        temp.innerHTML = DOMPurify.sanitize(html || "");
        const textContent = temp.textContent || "";
        return textContent.length > 60 ? textContent.slice(0, 60) + "..." : textContent;
    };

    return (
        <section className="py-55 px-4 md:px-8"
                 style={{
                     background: theme.gradients.primary,
                 }}>
            <div className="max-w-6xl mx-auto text-white">
                <h2 className="text-4xl font-bold text-center mb-12">
                    社區最新活動
                </h2>

                <div className="grid gap-8 md:grid-cols-2">
                    {events.map((event, idx) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                        >
                            <Link
                                href={`/events/${event.id}`}
                                className="group block bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-white/40 hover:border-primary-dark hover:scale-[1.02] transition-all text-gray-800"
                            >
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-dark">
                                    {event.title}
                                </h3>

                                <div className="flex items-center text-sm text-gray-500 mb-3">
                                    <CalendarIcon className="w-5 h-5 mr-2" />
                                    {new Date(event.publishTime).toLocaleDateString("zh-TW", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </div>

                                <label className="text-gray-700 leading-relaxed">
                                    {renderExcerpt(event.content)}
                                    <p className="font-medium text-primary-dark ml-2 text-end">
                                        了解更多 →
                                    </p>
                                </label>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
