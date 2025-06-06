"use client";

import DOMPurify from "dompurify";
import { useMemo } from "react";

export default function SanitizedHtmlContent({ html, color = "text-gray-800" }) {
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

        return tempDiv.innerHTML;
    };

    const clean = useMemo(() => {
        const transformedHtml = transformOembedToIframe(html);
        return DOMPurify.sanitize(transformedHtml, {
            USE_PROFILES: { html: true },
            ADD_TAGS: ["iframe", "video", "audio", "source"],
            ADD_ATTR: [
                "allow",
                "allowfullscreen",
                "frameborder",
                "scrolling",
                "muted",
                "playsinline",
                "controls",
                "autoplay",
                "loop",
                "src",
                "width",
                "height",
                "loading",
            ],
            FORBID_TAGS: ["script", "style"],
        });
    }, [html]);

    return (
        <div
            className={`prose max-w-none
                prose-img:rounded-xl prose-img:max-w-full prose-img:h-auto prose-img:my-4
                prose-ul:pl-6 prose-li:mb-2 prose-ol:pl-6
                prose-h4:text-lg prose-h4:font-semibold prose-h4:text-gray-700
                prose-h5:text-base prose-h5:font-medium prose-h5:text-gray-600
                prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:text-gray-500 prose-blockquote:italic
                prose-figcaption:text-sm prose-figcaption:text-gray-500 prose-figcaption:text-center
                prose-iframe:rounded-xl prose-iframe:max-w-full prose-iframe:aspect-video
                ${color}
            `}
            dangerouslySetInnerHTML={{ __html: clean }}
        />
    );
}
