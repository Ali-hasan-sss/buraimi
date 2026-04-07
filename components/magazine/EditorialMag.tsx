import { editorialBoard } from '@/staticData/magazine';

export default function EditorialMag({
    isAr,
    editorialHeading,
    thPosition,
    thName,
    thEmail,
}: {
    isAr: boolean;
    editorialHeading: string;
    thPosition: string;
    thName: string;
    thEmail: string;
}) {
    return (
        <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl text-[#254151] mb-8 text-center">{editorialHeading}</h2>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[720px]">
                        <thead className="bg-[#254151] text-white">
                            <tr>
                                <th className="px-6 py-4 text-right text-base font-semibold">{thPosition}</th>
                                <th className="px-6 py-4 text-right text-base font-semibold">{thName}</th>
                                <th className="px-6 py-4 text-right text-base font-semibold">{thEmail}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {editorialBoard.map((member, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-5 text-gray-900">{isAr ? member.positionAr : member.positionEn}</td>
                                    <td className="px-6 py-5 text-gray-900">{member.name}</td>
                                    <td className="px-6 py-5">
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="text-[#6096b4] hover:text-[#254151] transition-colors"
                                        >
                                            {member.email}
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
