import ChairTable from "./ChairTable";
import OrganizationChart from "./OrganizationChart";
import { theme } from "@/styles/theme";

export default function TeamSection({ data }) {
    return (
        <section className={`py-16 px-4 ${theme.background.light}`}>
            <h2 className={`text-3xl font-bold ${theme.accent.dark} mb-4`}>
                社區團隊介紹
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {data.members?.map((person, idx) => (
                    <div key={idx} className="bg-white p-6 rounded shadow">
                        <h3
                            className={`text-xl font-semibold ${theme.primary.dark}`}
                        >
                            {person.name}{" "}
                            <span className="text-sm text-gray-500">
                                {person.role}
                            </span>
                        </h3>
                        <p className="text-gray-700 mt-2">{person.duty}</p>
                    </div>
                ))}
            </div>
            {data.chartUrl && <OrganizationChart url={data.chartUrl} />}

            {data.chairHistory && <ChairTable history={data.chairHistory} />}
        </section>
    );
}
