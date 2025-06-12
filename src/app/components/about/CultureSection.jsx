"use client";

import { theme } from "@/styles/theme";
import { motion } from "framer-motion";
import SanitizedHtmlContent from "@/app/components/SanitizedHtmlContent";
import {useEffect} from "react";

export default function CultureSection({ data }) {
    return (
        <section
            className="py-24 px-4"
            style={{
                background: theme.gradients.secondary,
            }}
        >
            <div className="max-w-6xl mx-auto text-gray-700">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-extrabold mb-6"
                >
                    {data.name || "社區文化特色"}
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-lg leading-relaxed max-w-4xl mb-12 text-gray-700"
                >
                    <SanitizedHtmlContent html={data.content} color="text-gray-700" />
                </motion.div>

                {/*<div className="grid grid-cols-1 md:grid-cols-2 gap-8">*/}
                {/*    {data.features?.map((item, index) => (*/}
                {/*        <motion.div*/}
                {/*            key={index}*/}
                {/*            initial={{ opacity: 0, y: 30 }}*/}
                {/*            whileInView={{ opacity: 1, y: 0 }}*/}
                {/*            transition={{ duration: 0.5, delay: index * 0.2 }}*/}
                {/*            className="bg-white/90 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"*/}
                {/*        >*/}
                {/*            <h3 className="text-xl font-bold text-gray-900 mb-2">*/}
                {/*                {item.title}*/}
                {/*            </h3>*/}
                {/*            <p className="text-gray-700 leading-relaxed">*/}
                {/*                {item.description}*/}
                {/*            </p>*/}
                {/*        </motion.div>*/}
                {/*    ))}*/}
                {/*</div>*/}
            </div>
        </section>
    );
}
