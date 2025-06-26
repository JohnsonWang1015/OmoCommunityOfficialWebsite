"use client";

import { useEffect, useState } from "react";
import {motion} from "framer-motion";
import {Slider} from "@radix-ui/react-slider";
import { getPageContent } from "@/lib/aboutAPI";
import SanitizedHtmlContent from "@/app/components/SanitizedHtmlContent";

export default function HighlightSection() {
    const [highlights, setHighlights] = useState([]);

    useEffect(() => {
        getPageContent("event")
            .then((data) => {
                const content = data?.content || "";
                setHighlights(content || []);
            }).catch((error) => {
                console.error("Error fetching highlights:", error);
                setHighlights([]);
            });
    }, []);

    // const extractText = (html, maxLength = 70) => {
    //     const div = document.createElement("div");
    //     div.innerHTML = DOMPurify.sanitize(html);
    //     const text = div.textContent || "";
    //     return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    // };

    // const extractImages = (html) => {
    //     const div = document.createElement("div");
    //     div.innerHTML = DOMPurify.sanitize(html);
    //     return Array.from(div.querySelectorAll("img")).map((img) => img.src);
    // };

    // const sliderSettings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     autoplay: true,
    //     autoplaySpeed: 4000,
    // };

    return (
        <section className="bg-white py-20 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
                    活動集錦
                </h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white hover:shadow-xl transition overflow-hidden"
                >
                    <SanitizedHtmlContent html={highlights} />
                    {/*<Link href={`/highlights/${item.id}`} className="block">*/}
                    {/*    <div className="relative w-full h-52">*/}
                    {/*        {images.length > 0 ? (*/}
                    {/*            <Slider {...sliderSettings}>*/}
                    {/*                {images.map((src, idx) => (*/}
                    {/*                    <div key={idx}>*/}
                    {/*                        <img*/}
                    {/*                            src={src}*/}
                    {/*                            alt={`圖片 ${idx + 1}`}*/}
                    {/*                            className="w-full h-52 object-cover"*/}
                    {/*                        />*/}
                    {/*                    </div>*/}
                    {/*                ))}*/}
                    {/*            </Slider>*/}
                    {/*        ) : (*/}
                    {/*            <div className="w-full h-52 bg-gray-100 flex items-center justify-center text-gray-400">*/}
                    {/*                無封面*/}
                    {/*            </div>*/}
                    {/*        )}*/}
                    {/*    </div>*/}
                    {/*    <div className="p-5">*/}
                    {/*        <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">*/}
                    {/*            {item.title}*/}
                    {/*        </h3>*/}
                    {/*        <p className="text-gray-600 text-sm mb-3">{summary}</p>*/}
                    {/*        <span className="text-primary-main font-semibold text-sm">*/}
                    {/*            閱讀更多 →*/}
                    {/*        </span>*/}
                    {/*    </div>*/}
                    {/*</Link>*/}
                </motion.div>

                {/*<div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">*/}
                {/*    {highlights.map((item) => {*/}
                {/*        const images = extractImages(item.content);*/}
                {/*        const summary = extractText(item.content);*/}

                {/*        return (*/}
                {/*            */}
                {/*        );*/}
                {/*    })}*/}
                {/*</div>*/}
            </div>
        </section>
    );
}
