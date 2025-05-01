import { theme } from "@/styles/theme";

export default function OrganizationChart({ url }) {
    return (
        <div className="mt-12 text-center">
            <h3 className={`text-2xl font-semibold ${theme.text.primary} mb-4`}>
                組織架構圖
            </h3>
            <img
                src={url}
                alt="塭內社區組織架構圖"
                className="inline-block rounded shadow-md max-w-full h-auto"
            />
        </div>
    );
}
