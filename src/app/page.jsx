"use client";

import Navbar from "@/app/components/Navbar";
import { motion } from "framer-motion";
import { theme } from "@/styles/theme";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import TabsSection from "@/app/components/TabsSection";
import HighlightSection from "@/app/components/HighlightSection";
import QandASection from "@/app/components/QandASection";
import ViewCounter from "@/app/components/ViewCounter";

export default function HomePage() {
    return (
        <main
            className="min-h-screen flex flex-col"
            style={{
                background: `linear-gradient(to bottom, ${theme.colors.background.warm} 0%, ${theme.colors.background.nature} 100%)`,
            }}
        >
            <Navbar />
            <Hero />
            {/* 嵌入 YouTube 區塊 */}
            <section id="introVideo" className="py-16 px-4 md:px-8 bg-white/70 backdrop-blur-sm"
                     aria-label="社區介紹影片" role="region">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
                        社區介紹影片
                    </h2>
                    <div className="w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <iframe
                                loading="lazy"
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/SwdeAIiCngQ?si=DVCafhkudKjLja5u"
                                title="社區介紹影片"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 社區公告區塊 */}
            <section id="announcement" className="relative mt-8">
                {/* 上方波浪形裝飾 */}
                <div className="relative">
                    <div className="absolute top-[-40px] left-0 right-0 z-10">
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 1440 100"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            className="w-full h-[137px] "
                        >
                            <path
                                fill={theme.colors.background.warmLight}
                                d="M0,64L48,58.7C96,53,192,43,288,58.7C384,75,480,117,576,128C672,139,768,117,864,101.3C960,85,1056,75,1152,74.7C1248,75,1344,85,1392,90.7L1440,96V0H0Z"
                            />
                        </svg>
                    </div>
                </div>

                <div
                    className="relative z-0 pt-8 pb-20 px-4 md:px-8"
                    style={{
                        background: theme.colors.secondary.main,
                    }}
                >
                    <TabsSection />
                </div>
            </section>

            <HighlightSection />
            <QandASection />
            <section className="px-4 md:px-8 -mt-4">
                <div className="max-w-5xl mx-auto flex justify-end">
                    <ViewCounter path={currentPath} />
                </div>
            </section>
            <Footer />
        </main>
    );
}
