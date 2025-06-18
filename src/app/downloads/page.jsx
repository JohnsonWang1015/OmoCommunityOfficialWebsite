"use client";

import { theme } from "@/styles/theme";
import { useState, useEffect } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { getAllFiles } from "@/lib/downloadFileAPI";
import {mappingFileType} from "@/utils/mappingFileType";

export default function DownloadsPage() {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        getAllFiles()
            .then((data) => {
                const formattedFiles = data.map((file) => ({
                    ...file,
                    fileType: mappingFileType(file.fileType),
                    fileSize: `${(file.fileSize / 1024).toFixed(2) > 1024 
                        ? (file.fileSize / (1024 * 1024)).toFixed(2) + " MB" 
                        : (file.fileSize / 1024).toFixed(2) + " KB"}`,
                }));
                setFiles(formattedFiles);
            })
            .catch((error) => {
                console.error("取得檔案列表失敗:", error);
                setFiles([]);
            });
    }, []);

    return (
        <section
            className="pt-35 pb-80 px-4"
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
                                        {file.title}
                                    </h2>
                                    <p className="text-sm text-gray-500">
                                        {file.fileType}・{file.fileSize}
                                    </p>
                                </div>

                                <a
                                    href={file.url}
                                    download
                                    target="_self"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 bg-accent-dark hover:bg-accent-light text-gray-800 px-4 py-2 rounded-full transition"
                                    title={`下載 ${file.filename}`}
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
