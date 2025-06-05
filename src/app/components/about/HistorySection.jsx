"use client";

import { motion } from "framer-motion";
import { theme } from "@/styles/theme";
import SanitizedHtmlContent from "@/app/components/SanitizedHtmlContent";

export default function HistorySection({ data }) {
    return (
        <section className="pt-35 pb-12 px-4" style={{background: theme.gradients.primary}}>
            <div className="max-w-6xl mx-auto text-white">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-extrabold mb-6"
                >
                    {data.name || "社區發展歷程"}
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-lg leading-relaxed whitespace-pre-line max-w-5xl mb-10"
                >
                    <SanitizedHtmlContent html={data.content} color="text-gray-900" />
                </motion.div>

                {/*{data.image?.length > 0 && (*/}
                {/*    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">*/}
                {/*        {data.image.map((url, idx) => (*/}
                {/*            <motion.div*/}
                {/*                key={idx}*/}
                {/*                initial={{ opacity: 0, y: 30 }}*/}
                {/*                whileInView={{ opacity: 1, y: 0 }}*/}
                {/*                transition={{ duration: 0.5, delay: idx * 0.2 }}*/}
                {/*                className="bg-white rounded-xl overflow-hidden shadow-lg"*/}
                {/*            >*/}
                {/*                <img*/}
                {/*                    src={url}*/}
                {/*                    alt={`歷史圖片 ${idx + 1}`}*/}
                {/*                    className="w-full h-64 object-cover"*/}
                {/*                />*/}
                {/*            </motion.div>*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*)}*/}
            </div>
        </section>
    );
}
