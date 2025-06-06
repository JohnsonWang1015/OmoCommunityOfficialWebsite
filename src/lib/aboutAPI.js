const BASE_URL = process.env.NEXT_PUBLIC_BACKSTAGE_URL;

export async function getPageContent(slug) {
    try {
        const response = await fetch(`${BASE_URL}/api/v1/page/${slug}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching history:', error);
        throw error;
    }
}

