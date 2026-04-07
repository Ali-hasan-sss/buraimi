import { magazineIssues } from "@/staticData/magazine";
import { BookOpen, Download, Target, Users } from "lucide-react";
import Image from "next/image";

export default function MagazineOverView(
    { isAr }: { isAr: boolean }
) {

    const data = {
        ar: {
            card1Title: 'مجلة إخبارية',
            card1Text: 'تصدر مرتين في السنة لتوثيق الأنشطة الأكاديمية والثقافية',
            card2Title: 'تعزيز الانتماء',
            card2Text: 'دعم التميز الأكاديمي والثقافي وتوثيق إنجازات الكلية',
            card3Title: 'منصة أكاديمية',
            card3Text: 'تسليط الضوء على أفكار ومساهمات مجتمع الكلية',
            latestIssues: 'أحدث الأعداد',
            downloadIssue: 'تحميل العدد',
        },
        en: {
            card1Title: 'News Magazine',
            card1Text: 'Published twice a year to document academic and cultural activities.',
            card2Title: 'Strengthen Belonging',
            card2Text: 'Support academic and cultural excellence and document college achievements.',
            card3Title: 'Academic Platform',
            card3Text: 'Highlight ideas and contributions from the college community.',
            latestIssues: 'Latest Issues',
            downloadIssue: 'Download Issue',
        }
    }


    const t = data[isAr ? "ar" : "en"]

    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
                {/* Card 1 */}
                <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-8 border border-gray-100">
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-[#6096b4]/10 rounded-full flex items-center justify-center">
                            <BookOpen className="size-8 text-[#6096b4]" />
                        </div>
                    </div>
                    <h3 className="text-xl text-[#254151] mb-4 text-center">{t.card1Title}</h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                        {t.card1Text}
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-8 border border-gray-100">
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-[#c2a772]/10 rounded-full flex items-center justify-center">
                            <Target className="size-8 text-[#c2a772]" />
                        </div>
                    </div>
                    <h3 className="text-xl text-[#254151] mb-4 text-center">{t.card2Title}</h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                        {t.card2Text}
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-8 border border-gray-100">
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-[#6096b4]/10 rounded-full flex items-center justify-center">
                            <Users className="size-8 text-[#6096b4]" />
                        </div>
                    </div>
                    <h3 className="text-xl text-[#254151] mb-4 text-center">{t.card3Title}</h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                        {t.card3Text}
                    </p>
                </div>
            </div>

            {/* Latest Issues Preview */}
            <div className="mt-16">
                <h2 className="text-3xl text-[#254151] mb-8 text-center">{t.latestIssues}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {magazineIssues.slice(0, 3).map((issue) => (
                        <div
                            key={issue.id}
                            className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all overflow-hidden group cursor-pointer"
                        >
                            <div className="relative h-80 overflow-hidden">
                                <Image
                                    fill
                                    src={issue.coverImage}
                                    alt={`${isAr ? issue.titleAr : issue.titleEn} - ${isAr ? issue.issueNumberAr : issue.issueNumberEn}`}
                                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl text-[#254151] mb-2">{isAr ? issue.titleAr : issue.titleEn}</h3>
                                <p className="text-[#6096b4] mb-4">{isAr ? issue.issueNumberAr : issue.issueNumberEn}</p>
                                <button className="flex items-center gap-2 text-[#c2a772] hover:text-[#254151] transition-colors">
                                    <Download className="size-4" />
                                    <span>{t.downloadIssue}</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}