"use client";

import CultureSection from "@/app/components/about/CultureSection";
import HistorySection from "@/app/components/about/HistorySection";
import TeamSection from "@/app/components/about/TeamSection";
import {useEffect, useState} from "react";
import { getPageContent } from "@/lib/aboutAPI";

export default function AboutPage() {
    const [history, setHistory] = useState(null);
    const [culture, setCulture] = useState(null);
    const [team, setTeam] = useState(null);

    useEffect(() => {
        getPageContent("history")
            .then(data => setHistory(data))
            .catch(error => console.error("無法取得社區發展歷程資料:", error));
        setTimeout(() => {
            setCulture({
                title: "社區文化特色",
                content: "以傳統與創新融合為精神...",
                features: [
                    { title: "黑翅鳶文化", description: "生態保育與文化導覽並重..." },
                    { title: "農村再生", description: "推動在地友善農業與綠建築..." },
                ],
            });
            setTeam({
                members: [
                    { name: "葉秋恆", role: "社區理事長", duty: "負責統籌社區業務。" },
                    { name: "林明發", role: "總幹事", duty: "執行社區業務。" },
                ],
                chartUrl: "/images/organization_chart.png",
                chairHistory: [
                    { term: "第1屆", years: "82~85", president: "葉秋水", secretary: "葉來勇" },
                    { term: "第2屆", years: "86~89", president: "葉秋水", secretary: "葉來勇" },
                    { term: "第3屆", years: "90~93", president: "葉鴻龍", secretary: "葉宏麟" },
                    { term: "第4屆", years: "94~97", president: "葉朝宗", secretary: "陳日興" },
                    { term: "第5屆", years: "98~101", president: "葉朝宗", secretary: "陳日興" },
                    { term: "第6屆", years: "102~105", president: "葉木成", secretary: "陳日興" },
                    { term: "第7屆", years: "106~109", president: "廖雪美", secretary: "蕭景昌" },
                    { term: "第8屆", years: "110~113", president: "廖雪美", secretary: "林明發" },
                    { term: "第9屆", years: "114~117", president: "葉秋恆", secretary: "林明發" },
                ],
            });
        }, 500);
    }, []);

    if (!history || !culture || !team) {
        return <div className="p-8">載入中...</div>;
    }

    return (
        <div className="bg-white">
            <main>
                <HistorySection data={history} />
                <CultureSection data={culture} />
                <TeamSection data={team} />
            </main>
        </div>
    );
}
