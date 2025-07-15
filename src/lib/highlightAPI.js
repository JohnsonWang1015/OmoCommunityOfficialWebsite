const BASE_URL = process.env.NEXT_PUBLIC_BACKSTAGE_URL;

export async function getAllHighlights() {
    try {
        const response = await fetch(`${BASE_URL}/api/v1/highlights/published`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error(`取得活動集錦資料發生錯誤: ${error}`);
        return [];
    }
}

export async function getHighlightById(id) {
    try {
        const response = await fetch(`${BASE_URL}/api/v1/highlights/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error(`透過 ID 取得活動集錦資料發生錯誤: ${error}`);
        return null;
    }
}
