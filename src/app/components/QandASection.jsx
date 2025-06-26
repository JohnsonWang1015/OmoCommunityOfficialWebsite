"use client";

import { theme } from "@/styles/theme";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";
import { getAllFaqs } from "@/lib/faqAPI";
import SanitizedHtmlContent from "@/app/components/SanitizedHtmlContent";

export default function QandASection() {
    const [qnaList, setQnaList] = useState([]);

    useEffect(() => {
        getAllFaqs()
            .then((faqs) => {
                setQnaList(faqs);
            })
            .catch((error) => {
                console.error("Error fetching FAQs:", error);
            });
    }, []);

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
                                <SanitizedHtmlContent html={item.question} />
                            </AccordionTrigger>
                            <AccordionContent className="px-5 pb-4 text-gray-700 text-base">
                                <SanitizedHtmlContent html={item.answer} />
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
