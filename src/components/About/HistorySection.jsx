import { theme } from "@/styles/theme";

export default function HistorySection({ data }) {
    return (
        <section className={`py-16 px-4 ${theme.background.warn}`}>
            <h2 className={`text-3xl font-bold ${theme.text.primary} mb-4`}>
                {data.title}
            </h2>
            <p className={`text-gray-700 leading-relaxed whitespace-pre-line`}>
                {data.content}
            </p>
            {data.image?.length > 0 && (
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.image.map((url, idx) => (
                        <img
                            className="rounded shadow-md object-cover w-full h-64"
                            key={idx}
                            src={url}
                            alt={`歷史圖片 ${idx + 1}`}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
