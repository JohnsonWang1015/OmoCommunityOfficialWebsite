const BASE_URL = process.env.NEXT_PUBLIC_BACKSTAGE_URL;

export async function getAllNotices() {
    try {
        const response = await fetch(
            `${BASE_URL}/api/v1/announcement/published`,
            {
                credentials: "include",
            }
        );
        if (!response.ok) {
            throw new Error("取得公告失敗");
        }
        return response.json();
    } catch (error) {
        return error;
    }
}

export async function getNoticeById(id) {
    try {
        const response = await fetch(
            `${BASE_URL}/api/v1/announcement/${id}`,
            {
                credentials: "include",
            }
        );
        if (!response.ok) {
            throw new Error("取得公告失敗");
        }

        const data = await response.json();
        if (!data || typeof data !== "object") {
            throw new Error("回應內容無效");
        }
        return data;
    } catch (error) {
        return error;
    }
}
