"use client";

import DOMPurify from "dompurify";

export default function SanitizedHtmlContent({ html }) {
    const clean = DOMPurify.sanitize(html, {
        USE_PROFILES: { html: true },
    });

    return (
        <div
            className="prose max-w-none prose-img:rounded-xl prose-img:max-w-full prose-img:h-auto prose-ul:pl-6 prose-li:mb-2 text-gray-800"
            dangerouslySetInnerHTML={{ __html: clean }}
        ></div>
    );
}
