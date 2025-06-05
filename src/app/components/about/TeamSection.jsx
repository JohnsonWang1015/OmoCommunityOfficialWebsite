"use client";

import ChairTable from "./ChairTable";
import OrganizationChart from "./OrganizationChart";
import { theme } from "@/styles/theme";
import { motion } from "framer-motion";

export default function TeamSection({ data }) {
    return (
        <section
            className="py-24 px-4"
            style={{ background: theme.gradients.accent }}
        >
            <div className="max-w-6xl mx-auto text-white">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-extrabold mb-10"
                >
                    社區團隊介紹
                </motion.h2>

                {/* 團隊成員卡片 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {data.members?.map((person, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all text-gray-800"
                        >
                            <h3 className="text-xl font-bold mb-1">
                                {person.name}{" "}
                                <span className="text-sm text-gray-500 font-medium">
                                    {person.role}
                                </span>
                            </h3>
                            <p className="text-gray-700">{person.duty}</p>
                        </motion.div>
                    ))}
                </div>

                {/* 組織架構圖 */}
                {data.chartUrl && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-16 bg-white rounded-xl shadow-md overflow-hidden p-4"
                    >
                        <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">
                            組織架構圖
                        </h3>
                        <OrganizationChart url={data.chartUrl} />
                    </motion.div>
                )}

                {/* 歷屆理事長 */}
                {data.chairHistory && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-xl shadow-md overflow-hidden p-4"
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
                            歷屆理事長
                        </h3>
                        <ChairTable history={data.chairHistory} />
                    </motion.div>
                )}
            </div>
        </section>
    );
}
