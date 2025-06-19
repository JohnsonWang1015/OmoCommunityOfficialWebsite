const BASE_URL = process.env.NEXT_PUBLIC_BACKSTAGE_URL;

export async function getAllFaqs() {
    try {
        const response = await fetch(`${BASE_URL}/api/v1/faqs`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error fetching FAQs: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Failed to fetch FAQs:', error);
        throw error;
    }
}
