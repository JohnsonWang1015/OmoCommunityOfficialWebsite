"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import SanitizedHtmlContent from "@/app/components/SanitizedHtmlContent";
import Slider from "react-slick";
import { ArrowLeftIcon, CalendarIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { getNewsById } from "@/lib/newsAPI";
import {theme} from "@/styles/theme";

export default function EventDetailsPage() {
    const router = useRouter();
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(id) {
            getNewsById(id)
                .then(data => {
                    if (data instanceof Error) {
                        setError(data.message);
                    } else {
                        setEvent(data);
                    }
                })
                .catch(err => {
                    console.error("取得活動失敗:", err);
                    setError("無法載入活動資料");
                });
        }
    }, []);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <section className="pt-32 pb-32 px-4 md:px-8"
                 style={{
                     background: theme.gradients.primary,
                 }}>
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-10">
                {!event && !error && (
                    <p className="text-center text-gray-500 text-lg">
                        活動載入中...
                    </p>
                )}

                {error && (
                    <p className="text-center text-red-600 text-lg">
                        {error}
                    </p>
                )}

                {event && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* 返回按鈕 */}
                        <button
                            onClick={() => router.back()}
                            className="flex items-center text-accent-dark hover:text-accent-light mb-6 transition cursor-pointer"
                        >
                            <ArrowLeftIcon className="w-5 h-5 mr-1" />
                            返回活動列表
                        </button>

                        <h1 className="text-3xl font-bold text-gray-800 mb-4">
                            {event.title}
                        </h1>

                        <div className="flex items-center text-sm text-gray-500 mb-6">
                            <CalendarIcon className="w-5 h-5 mr-2" />
                            {new Date(event.publishTime).toLocaleDateString("zh-TW", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </div>

                        {/* 圖片輪播區 */}
                        {event.images?.length > 0 && (
                            <div className="mb-8">
                                <Slider {...sliderSettings}>
                                    {event.images.map((img, idx) => (
                                        <img
                                            key={idx}
                                            src={img}
                                            alt={`活動圖片 ${idx + 1}`}
                                            className="w-full rounded-xl object-cover max-h-[500px] mx-auto"
                                        />
                                    ))}
                                </Slider>
                            </div>
                        )}

                        {/* 內容 HTML */}
                        <SanitizedHtmlContent html={event.content} />
                    </motion.div>
                )}
            </div>
        </section>
    )
}
