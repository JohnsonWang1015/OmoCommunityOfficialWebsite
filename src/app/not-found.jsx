import ErrorMessage from "@/components/ErrorMessage";

export default function NotFound() {
    return (
        <ErrorMessage
            title="404 找不到頁面"
            description="您所查詢的頁面不存在，可能已被移除或網址錯誤。"
            backUrl="/"
            backText="返回首頁"
        />
    );
}
