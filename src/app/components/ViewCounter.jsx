"use client";

import { useEffect, useState } from "react";

export default function ViewCounter({ path }) {
    const [views, setViews] = useState(null);

    useEffect(() => {
        fetch(`/api/views?path=${encodeURIComponent(path)}`)
            .then(r => r.json())
            .then(d => setViews(Number(d.views)));
    }, [path]);

    return <div>👀 {views ?? "…"} 次瀏覽</div>;
}
