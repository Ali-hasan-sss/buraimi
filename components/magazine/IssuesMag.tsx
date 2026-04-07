import { magazineIssues } from '@/staticData/magazine';
import { Download } from 'lucide-react';
import Image from 'next/image';

export default function IssuesMag({
    isAr,
    issuesHeading,
    downloadPdf,
}: {
    isAr: boolean;
    issuesHeading: string;
    downloadPdf: string;
}) {
    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl text-[#254151] mb-8 text-center">{issuesHeading}</h2>

            <div className="grid md:grid-cols-3 gap-8">
                {magazineIssues.map((issue) => (
                    <div
                        key={issue.id}
                        className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all overflow-hidden group"
                    >
                        <div className="relative h-96 overflow-hidden">
                            <Image
                                fill
                                src={issue.coverImage}
                                alt={`${isAr ? issue.titleAr : issue.titleEn} - ${isAr ? issue.issueNumberAr : issue.issueNumberEn}`}
                                className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl text-[#254151] mb-2">{isAr ? issue.titleAr : issue.titleEn}</h3>
                            <p className="text-[#6096b4] text-lg mb-4">{isAr ? issue.issueNumberAr : issue.issueNumberEn}</p>
                            <button className="w-full bg-[#6096b4] hover:bg-[#254151] text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                                <Download className="size-5" />
                                <span>{downloadPdf}</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
