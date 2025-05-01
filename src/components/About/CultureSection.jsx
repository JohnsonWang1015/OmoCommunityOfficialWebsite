import { theme } from "@/styles/theme";

export default function CultureSection({ data }) {
    return (
        <section className={`py-16 px-4 ${theme.background.nature}`}>
            <h2 className={`text-3xl font-bold ${theme.secondary.dark} mb-4`}>
                {data.title}
            </h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-6">
                {data.content}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.features?.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded shadow hover:shadow-md transition"
                    >
                        <h3
                            className={`text-xl font-semibold ${theme.text.primary} mb-2`}
                        >
                            {item.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
