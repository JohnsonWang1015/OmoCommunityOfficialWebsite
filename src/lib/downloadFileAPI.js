const BASE_URL = process.env.NEXT_PUBLIC_BACKSTAGE_URL;

export async function getAllFiles() {
    try {
        const response = await fetch(`${BASE_URL}/api/v1/files`, {
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
        console.error('Error fetching files:', error);
        throw error;
    }
}
