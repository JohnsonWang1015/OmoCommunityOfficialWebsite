const BASE_URL = process.env.NEXT_PUBLIC_BACKSTAGE_URL;

export async function getAllNews() {
    try {
        const response = await fetch(
            `${BASE_URL}/api/v1/news`,
            {
                credentials: "include",
            }
        );
        if (!response.ok) {
            throw new Error("取得活動列表失敗");
        }
        return response.json();
    } catch (error) {
        return error;
    }
}

export async function getNewsById(id) {
    try {
        const response = await fetch(
            `${BASE_URL}/api/v1/news/${id}`,
            {
                credentials: "include",
            }
        );
        if (!response.ok) {
            throw new Error("取得活動失敗");
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
