"use client";

import { theme } from "@/styles/theme";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { getAllNotices } from "@/lib/noticeAPI";
import { getAllNews } from "@/lib/newsAPI";
import Link from "next/link";

export default function TabsSection() {
    const [currentTab, setCurrentTab] = useState("news");
    const [announcementsList, setAnnouncementsList] = useState([]);
    const [eventsList, setEventsList] = useState([]);

    useEffect(() => {
        getAllNotices()
            .then((data) => {
                if (Array.isArray(data)) {
                    const announcements = data.slice(0, 5);
                    setAnnouncementsList(announcements);
                } else {
                    console.error("API 回傳格式錯誤", data);
                    setAnnouncementsList([]);
                }
            })
            .catch((err) => {
                console.error(`取得公告發生錯誤: ${err}`);
                setAnnouncementsList([]);
            });
        getAllNews()
            .then((data) => {
                if (Array.isArray(data)) {
                    const news = data.slice(0, 5);
                    setEventsList(news);
                } else {
                    console.error("API 回傳格式錯誤", data);
                    setEventsList([]);
                }
            })
            .catch((err) => {
                console.error(`取得活動發生錯誤: ${err}`);
                setEventsList([]);
            });
    }, []);

    const renderList = (category, list) => (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="space-y-4"
        >
            {list.map((item) => (
                <Link
                    key={item.id}
                    href={category === "notice" ? `/notices/${item.id}` : `/events/${item.id}`}
                    className="space-y-3"
                >
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.3 }}
                        whileHover={{
                            y: -6,
                            scale: 1.02,
                            boxShadow: "0 12px 20px rgba(0, 0, 0, 0.15)",
                            cursor: "pointer",
                        }}
                        className="bg-gray-50 hover:bg-white rounded-xl shadow border border-gray-200 hover:shadow-md transition p-4"
                    >
                        <div className="text-sm text-gray-500 mt-1">
                            {new Date(item.publishTime).toLocaleDateString(
                                "zh-TW",
                                {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                }
                            )}
                        </div>
                        <div
                            className={`font-semibold text-lg md:text-xl hover:underline`}
                            style={{
                                color: theme.colors.accent.dark,
                                textDecoration: "none",
                            }}
                        >
                            {item.title}
                        </div>
                    </motion.div>
                </Link>
            ))}
            {list.length > 0 ? (
                <div className="mt-4 text-end">
                    <Link
                        href={category === "notice" ? "/notices" : "/events"}
                        className="text-md text-secondary-main hover:underline font-semibold"
                    >
                        查看更多{category === "notice" ? "公告" : "活動"} →
                    </Link>
                </div>
            ) : (
                <div className="mt-4 text-center text-gray-500">暫無訊息</div>
            )}
        </motion.div>
    );

    return (
        <section className="py-16 px-4 md:px-8 bg-transparent">
            <div className="max-w-5xl mx-auto rounded-xl shadow-xl bg-white/80 backdrop-blur-md border border-gray-200">
                <Tabs
                    defaultValue="news"
                    className="w-full"
                    onValueChange={(value) => setCurrentTab(value)}
                >
                    <TabsList
                        className="grid grid-cols-2 w-full text-center rounded-t-xl overflow-hidden relative z-10 !h-auto !min-h-[64px] !p-0"
                        style={{
                            backgroundColor: theme.colors.accent.main,
                        }}
                    >
                        <TabsTrigger
                            value="news"
                            className="text-white px-4 py-1 text-base md:text-lg font-semibold transition-all duration-300 w-full data-[state=active]:bg-[var(--active-bg)] data-[state=active]:text-[var(--active-text)]"
                            style={{
                                "--active-bg": theme.colors.background.nature,
                                "--active-text": theme.colors.accent.dark,
                            }}
                        >
                            最新公告
                        </TabsTrigger>
                        <TabsTrigger
                            value="events"
                            className="text-white px-4 py-1 text-base md:text-lg font-semibold transition-all duration-300 w-full data-[state=active]:bg-[var(--active-bg)] data-[state=active]:text-[var(--active-text)]"
                            style={{
                                "--active-bg": theme.colors.background.nature,
                                "--active-text": theme.colors.accent.dark,
                            }}
                        >
                            活動訊息
                        </TabsTrigger>
                    </TabsList>

                    <div className="relative z-0 p-7 bg-white border-t text-base md:text-lg text-gray-800 rounded-b-xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentTab}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{ duration: 0.3 }}
                            >
                                {currentTab === "news"
                                    ? renderList("notice", announcementsList)
                                    : renderList("event", eventsList)}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </Tabs>
            </div>
        </section>
    );
}
