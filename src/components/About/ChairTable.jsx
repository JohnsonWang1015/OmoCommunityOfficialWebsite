import { theme } from "@/styles/theme";

export default function ChairTable({ history }) {
    return (
        <div className="mt-12 overflow-x-auto">
            <h3 className={`text-2xl font-semibold ${theme.text.primary} mb-4`}>
                歷屆理事長
            </h3>
            <table className="min-w-full bg-white border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 border">屆次</th>
                        <th className="px-4 py-2 border">任期</th>
                        <th className="px-4 py-2 border">理事長</th>
                        <th className="px-4 py-2 border">總幹事</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                            <td className="border px-4 py-2">{row.term}</td>
                            <td className="border px-4 py-2">{row.years}</td>
                            <td className="border px-4 py-2">
                                {row.president}
                            </td>
                            <td className="border px-4 py-2">
                                {row.secretary}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
