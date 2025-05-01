"use client";

import CultureSection from "@/components/About/CultureSection";
import HistorySection from "@/components/About/HistorySection";
import TeamSection from "@/components/About/TeamSection";
import { useState } from "react";

export default function AboutPage() {
    const [history, setHistory] = useState(null);
    const [culture, setCulture] = useState(null);
    const [team, setTeam] = useState(null);

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
