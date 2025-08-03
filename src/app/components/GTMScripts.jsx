"use client";
import { useEffect } from "react";

export default function GTMScripts() {
    useEffect(() => {
        const script1 = document.createElement("script");
        script1.src = "https://www.googletagmanager.com/gtag/js?id=G-LMXSZCD3SH";
        script1.async = true;
        document.head.appendChild(script1);

        // 初始化 gtag
        window.dataLayer = window.dataLayer || [];
        function gtag(){ window.dataLayer.push(arguments); }
        gtag("js", new Date());
        gtag("config", "G-LMXSZCD3SH");
    }, []);

    return null; // 不產生任何 DOM
}
