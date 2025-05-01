"use client";

import { motion } from "framer-motion";
import { theme } from "@/styles/theme";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "./ui/accordion";

const qnaList = [
    {
        question: "塭內社區在哪裡？",
        answer: "塭內社區位於台灣西部濱海地區，靠近紅樹林保護區。",
    },
    {
        question: "導覽活動需要預約嗎？",
        answer: "建議事先線上報名，以確保有足夠的名額與導覽人員。",
    },
    {
        question: "有哪些適合親子的活動？",
        answer: "推薦參加紫斑蝶生態觀察、手作工坊與文化導覽行程。",
    },
    {
        question: "如何加入志工服務？",
        answer: "可至社區網站填寫志工申請表，將有專人聯繫。",
    },
];

export default function QandASection() {
    return (
        <section
            className="py-20 px-4 md:px-8"
            style={{
                backgroundColor: theme.colors.background.nature,
            }}
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12">
                    社區 Q&A 問與答
                </h2>
                <Accordion
                    type="single"
                    collapsible
                    className="space-y-4 text-left"
                >
                    {qnaList.map((item, index) => (
                        <AccordionItem
                            key={`qna-${index}`}
                            value={`item-${index}`}
                            className="border border-gray-200 rounded-lg bg-white shadow-sm"
                        >
                            <AccordionTrigger className="px-5 py-4 text-lg font-semibold text-secondary-dark hover:bg-secondary-light/10 transition-colors">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="px-5 pb-4 text-gray-700 text-base">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
