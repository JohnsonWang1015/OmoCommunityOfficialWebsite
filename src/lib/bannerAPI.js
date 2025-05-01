export async function getAllBanners() {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKSTAGE_URL}/api/v1/banners`,
            {
                credentials: "include",
            }
        );
        if (!res.ok) {
            throw new Error("取得 Banner 失敗");
        }
        return res.json();
    } catch (error) {
        return error;
    }
}
