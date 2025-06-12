"use client";

import {
    motion,
    useScroll,
    useTransform,
    AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getAllBanners } from "@/lib/bannerAPI";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // 視差 Y 軸位移
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    // 視差 Y 軸淡出
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    const [banners, setBanners] = useState([]);
    const [currentBanner, setCurrentBanner] = useState(0);
    const [imageLoaded, setImageLoaded] = useState(false);

    const handlePrevBanner = () => {
        setCurrentBanner(
            (prev) => (prev - 1 + banners.length) % banners.length
        );
    };
    const handleNextBanner = () => {
        setCurrentBanner((prev) => (prev + 1) % banners.length);
    };

    useEffect(() => {
        getAllBanners()
            .then((data) => {
                setBanners(data);
            })
            .catch((err) => {
                console.error(`取得 Banner 發生錯誤: ${err}`);
                setBanners([]);
            });
    }, []);

    useEffect(() => {
        if (banners.length === 0) return;
        // 自動切換 Banner
        const interval = setInterval(() => {
            setCurrentBanner((prev) => (prev + 1) % banners.length);
        }, 8000);
        return () => clearInterval(interval);
    }, [banners]);

    return (
        <section
            ref={ref}
            className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden bg-black"
        >
            {/* 輪播區塊 */}
            <AnimatePresence initial={false}>
                <motion.div
                    key={banners[currentBanner]?.orderIndex || currentBanner}
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: -90, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 z-0"
                    style={{
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                    }}
                >
                    {banners.length > 0 && banners[currentBanner]?.url && (
                        <div>
                            {
                                !imageLoaded && (
                                    <div className="absolute inset-0 bg-gray-100 animate-pulse z-0" />
                                )
                            }
                            <Image
                                role="img"
                                aria-label={
                                    banners[currentBanner].title || "Banner"
                                }
                                src={banners[currentBanner].url}
                                alt={banners[currentBanner].title || "Banner"}
                                fill
                                priority={currentBanner === 0}
                                loading={currentBanner === 0 ? "eager" : "lazy"}
                                className={`object-cover object-center brightness-90 transition-opacity duration-700 ${
                                    imageLoaded ? "opacity-100" : "opacity-0"
                                }`}
                                sizes="(max-width: 768px) 100vw, 1920px"
                                quality={90}
                                onLoadingComplete={() => setImageLoaded(true)}
                            />
                        </div>
                    )}
                    {/* 暗角與漸層濾鏡 */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-950/60 via-green-800/40 to-transparent z-10 mix-blend-multiply"></div>

                    {/* 輪播文字區域 */}
                    {/* {imageLoaded && (
                        <div className="container mx-auto px-4 relative z-20 text-white h-full flex items-center justify-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="max-w-3xl mx-auto text-center"
                            >
                                <div className="inline-block px-18 py-8 rounded-xl bg-black/40 backdrop-blur-sm shadow-lg">
                                    <motion.h1
                                        key={currentBanner + "-title"}
                                        className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4 drop-shadow"
                                        initial={{ y: 50, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        {banners[currentBanner].title || ""}
                                    </motion.h1>
                                    <motion.p
                                        className="text-lg md:text-2xl text-green-100 tracking-wide"
                                        initial={{ y: 50, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.8,
                                            delay: 0.2,
                                        }}
                                    >
                                        {banners[currentBanner].description}
                                    </motion.p>
                                </div>
                            </motion.div>
                        </div>
                    )} */}
                    {/* CTA 按鈕 */}
                    <div className="absolute bottom-45 left-0 right-0 z-20 flex flex-col sm:flex-row justify-center gap-4 px-4">
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://promap.topedu.io:3000/"
                            className="px-12 py-3 text-lg text-center md:text-center font-bold text-white rounded-full bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300"
                        >
                            🌿 生態導覽
                        </Link>
                        {/*<Link*/}
                        {/*    href="/culture"*/}
                        {/*    className="px-8 py-3 text-lg font-bold text-white rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all shadow-inner hover:shadow-md focus:outline-none focus:ring-4 focus:ring-white/30"*/}
                        {/*>*/}
                        {/*    🏡 文化導覽*/}
                        {/*</Link>*/}
                    </div>
                </motion.div>
            </AnimatePresence>
            {/* 輪播控制點 */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-30">
                {banners.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentBanner(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                            currentBanner === index
                                ? "bg-white w-8"
                                : "bg-white/50"
                        }`}
                        aria-label={`切換到第 ${index + 1} 張圖片`}
                    />
                ))}
            </div>
            {/* 左右切換按鈕 */}
            <button
                onClick={handlePrevBanner}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors z-30"
                aria-label="上一張"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>
            <button
                onClick={handleNextBanner}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors z-30"
                aria-label="下一張"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>
            {/* 下方裝飾漸層 */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-green-50 to-transparent z-10"
            />
        </section>
    );
}
