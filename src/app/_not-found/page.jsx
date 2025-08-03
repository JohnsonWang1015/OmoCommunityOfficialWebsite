"use client";

import { useEffect } from "react";

export default function NotFoundPage() {

    useEffect(() => {
        if (typeof window !== "undefined" && window.dataLayer) {
            window.dataLayer.push({
                event: "page_not_found",
                page_title: "404 - 頁面不存在",
                page_location: window.location.href
            });
        }
    }, []);

    return (
        <div>
            <div style={{ textAlign: "center", padding: "80px 20px" }}>
                <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>404 - 找不到頁面</h1>
                <p>您訪問的頁面不存在或已被移除</p>
                <a href="/" style={{ color: "#222", textDecoration: "underline" }}>
                    回首頁
                </a>
            </div>
        </div>
    );
}
