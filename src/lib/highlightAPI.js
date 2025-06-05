const BASE_URL = process.env.NEXT_PUBLIC_BACKSTAGE_URL;

export async function getAllHighlights() {
    try {
        const response = await fetch(`${BASE_URL}/api/v1/highlights`, {
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
        console.error(`取得亮點資料發生錯誤: ${error}`);
        return [];
    }
}
