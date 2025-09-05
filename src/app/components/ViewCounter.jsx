"use client";

import { useEffect, useState } from "react";

export default function ViewCounter({ path }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`/api/views?path=${encodeURIComponent(path)}`)
            .then(r => r.json())
            .then(d => setData(d.metrics))
            .catch(() => setData(null));
    }, [path]);

    if (!data) return <div>👀 … 次瀏覽</div>;

    return (
        <div className="text-sm text-gray-700 flex items-center gap-3">
            <span>👀 {data.views} 次瀏覽</span>
            <span>·</span>
            <span>🧑‍🤝‍🧑 {data.users} 訪客</span>
            <span>·</span>
            <span>🕒 {data.sessions} 訪問</span>
        </div>
    );
}
