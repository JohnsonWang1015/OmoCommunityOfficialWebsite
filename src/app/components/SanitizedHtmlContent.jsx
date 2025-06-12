"use client";

import DOMPurify from "dompurify";
import {useMemo} from "react";

export default function SanitizedHtmlContent({html, color = "text-gray-800"}) {
    const transformOembedToIframe = (rawHtml) => {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = rawHtml;

        const oembeds = tempDiv.querySelectorAll("oembed[url]");
        oembeds.forEach((el) => {
            const url = el.getAttribute("url");

            if (url.includes("youtube.com") || url.includes("youtu.be")) {
                const videoId = new URL(url).searchParams.get("v") || url.split("/").pop();
                const iframe = document.createElement("iframe");
                iframe.src = `https://www.youtube.com/embed/${videoId}`;
                iframe.allowFullscreen = true;
                iframe.setAttribute("frameborder", "0");
                iframe.setAttribute("loading", "lazy");
                iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
                iframe.className = "w-full aspect-video rounded-xl";
                el.replaceWith(iframe);
            }
        });

        const tables = tempDiv.querySelectorAll("table");
        tables.forEach((table) => {
            table.className = "min-w-full bg-gray-200 text-md text-left text-gray-700 border rounded-sm border-gray-600 divide-y divide-gray-500";

            // th thead 加上 class
            const thead = table.querySelector("thead");
            if (thead) {
                thead.className = "bg-gray-400 text-white/90 border-b border-gray-200";
            }

            // th 加上 class
            const ths = table.querySelectorAll("th");
            ths.forEach((th) => {
                th.className = "px-6 py-3 whitespace-nowrap font-semibold text-center";
            });


            // tr class
            const trs = table.querySelectorAll("tr");
            trs.forEach((tr) => {
                tr.className = "hover:bg-accent/10 border-b border-gray-100";
            });
            // td 加上 class
            const tds = table.querySelectorAll("td");
            tds.forEach((td) => {
                td.className = "px-6 py-3 whitespace-nowrap";
            });
        });

        // 取得 h4
        const h4s = tempDiv.querySelectorAll("h4");
        h4s.forEach((h4) => {
            h4.className = "text-lg font-semibold text-gray-900 mb-2";
        });

        // 取得 a
        const links = tempDiv.querySelectorAll("a");
        links.forEach((link) => {
            link.className = "text-blue-600 hover:text-blue-800 underline";
            link.target = "_blank"; // 新開視窗
            link.rel = "noopener noreferrer"; // 安全性
        });

        return tempDiv.innerHTML;
    };

    const clean = useMemo(() => {
        const transformedHtml = transformOembedToIframe(html);
        return DOMPurify.sanitize(transformedHtml, {
            USE_PROFILES: {html: true},
            ADD_TAGS: [
                "iframe", "video", "audio", "source", "figure", "figcaption",
                "table", "thead", "tbody", "tr", "th", "td",
                "h1", "h2", "h3", "h4", "h5", "h6"
            ],
            ADD_ATTR: [
                "class", "style", "src", "href", "target", "rel", "alt", "title",
                "allow", "allowfullscreen", "frameborder", "width", "height",
                "loading", "muted", "playsinline", "controls", "autoplay", "loop"
            ],
            FORBID_TAGS: ["script", "style"],
        });
    }, [html]);

    return (
        <div
            className={`prose prose-neutral prose-lg max-w-none ${color}`}
            dangerouslySetInnerHTML={{ __html: clean }}
        />
    );
}
