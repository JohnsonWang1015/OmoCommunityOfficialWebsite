"use client";

export default function ChairTable({ history }) {
    return (
        <div className="mt-12 overflow-x-auto rounded-xl shadow-md bg-white">
            <table className="min-w-full text-sm text-left text-gray-700">
                <thead
                    className="bg-gray-100 text-gray-600 border-b border-gray-200"
                    style={{ fontWeight: 600 }}
                >
                <tr>
                    <th className="px-6 py-3 whitespace-nowrap">屆次</th>
                    <th className="px-6 py-3 whitespace-nowrap">任期</th>
                    <th className="px-6 py-3 whitespace-nowrap">理事長</th>
                    <th className="px-6 py-3 whitespace-nowrap">總幹事</th>
                </tr>
                </thead>
                <tbody>
                {history.map((row, idx) => (
                    <tr
                        key={idx}
                        className="hover:bg-accent/10 border-b border-gray-100"
                    >
                        <td className="px-6 py-3 whitespace-nowrap">
                            {row.term}
                        </td>
                        <td className="px-6 py-3 whitespace-nowrap">
                            {row.years} 年
                        </td>
                        <td className="px-6 py-3 whitespace-nowrap">
                            {row.president}
                        </td>
                        <td className="px-6 py-3 whitespace-nowrap">
                            {row.secretary}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
