export const mappingFileType = (type) => {
    const map = {
        "application/pdf": "PDF 文件",
        "image/jpeg": "JPEG 圖片",
        "image/png": "PNG 圖片",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "Word 文件",
        "application/msword": "Word 文件",
        "application/vnd.ms-excel": "Excel 文件",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation": "PowerPoint 文件",
        "application/zip": "ZIP 壓縮檔",
        "video/mp4": "MP4 影片",
        "audio/mpeg": "MP3 音訊",
        "text/plain": "純文字檔案",
        "application/json": "JSON 檔案",
    };
    return map[type] || type || "未知檔案類型";
};