"use client";

import DOMPurify from "dompurify";
import { useEffect, useState } from "react";

export default function SanitizedHtmlContent({html, color = "text-gray-800"}) {
    const [sanitizedHtml, setSanitizedHtml] = useState("");

    useEffect(() => {
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
                const thead = table.querySelector("thead");
                if (thead) thead.className = "bg-gray-400 text-white/90 border-b border-gray-200";
                table.querySelectorAll("th").forEach(th => th.className = "px-6 py-3 whitespace-nowrap font-semibold text-center");
                table.querySelectorAll("tr").forEach(tr => tr.className = "hover:bg-accent/10 border-b border-gray-100");
                table.querySelectorAll("td").forEach(td => td.className = "px-6 py-3 whitespace-nowrap");
            });

            tempDiv.querySelectorAll("h4").forEach(h4 => h4.className = "text-lg font-semibold text-gray-900 mb-2");
            tempDiv.querySelectorAll("a").forEach(link => {
                link.className = "text-blue-600 hover:text-blue-800 underline";
                link.target = "_blank";
                link.rel = "noopener noreferrer";
            });

            return tempDiv.innerHTML;
        };

        const transformed = transformOembedToIframe(html);
        const clean = DOMPurify.sanitize(transformed, {
            USE_PROFILES: { html: true },
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

        setSanitizedHtml(clean);
    }, [html]);

    return (
        <div
            className={`prose prose-neutral prose-lg max-w-none ${color}`}
            dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
        />
    );
}
