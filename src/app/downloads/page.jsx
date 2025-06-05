"use client";

import { theme } from "@/styles/theme";
import { useState, useEffect } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function DownloadsPage() {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        setFiles([
            {
                name: "社區報名表.docx",
                url: "/files/registration.docx",
                size: "1.2MB",
                type: "Word 文件",
            },
            {
                name: "活動場地圖.pdf",
                url: "/files/map.pdf",
                size: "820KB",
                type: "PDF 圖檔",
            },
            {
                name: "環保手冊.zip",
                url: "/files/eco_guide.zip",
                size: "3.4MB",
                type: "ZIP 壓縮檔",
            },
        ]);
    }, []);

    return (
        <section
            className="pt-32 pb-22 px-4"
            style={{
                background: theme.gradients.accent,
            }}
        >
            <div className="max-w-5xl mx-auto text-white">
                <h1 className="text-4xl font-extrabold mb-12 text-center">
                    檔案下載
                </h1>

                <div className="grid gap-6 md:grid-cols-2">
                    {files.map((file, index) => (
                        <div
                            key={index}
                            className="bg-white text-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2 className="text-xl font-bold mb-1">
                                        {file.name}
                                    </h2>
                                    <p className="text-sm text-gray-500">
                                        {file.type}・{file.size}
                                    </p>
                                </div>

                                <a
                                    href={file.url}
                                    download
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 bg-accent-dark hover:bg-accent-light text-gray-800 px-4 py-2 rounded-full transition"
                                    title={`下載 ${file.name}`}
                                >
                                    <ArrowDownTrayIcon className="w-5 h-5" />
                                    下載
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
