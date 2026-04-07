"use client";

import { Award, BookMarked, Calendar, FileText, Filter, Search, Users } from "lucide-react";
import { useLocale } from "next-intl";
import { useMemo, useState } from "react";

type LocaleKey = "ar" | "en";

type PublicationTypeKey = "all" | "journal" | "book" | "chapter" | "conference";

type Publication = {
    id: number;
    title: string;
    type: PublicationTypeKey;
    details: string;
    author: string;
    year?: string;
    indexed?: boolean;
};

export default function PupExplorerSection() {
    const locale = useLocale() as LocaleKey;

    const t = {
        "ar": {
            "searchPlaceholder": "ابحث في المنشورات البحثية...",
            "filterLabel": "تصنيف حسب النوع:",
            "resultsLabel": "منشور بحثي",
            "noResultsTitle": "لم يتم العثور على نتائج",
            "noResultsBody": "جرب البحث بكلمات مختلفة أو غيّر التصنيف",
            "indexed": "مفهرس",
            "types": {
                "all": "الكل",
                "journal": "مجلة محكمة",
                "book": "كتاب",
                "chapter": "فصل في كتاب",
                "conference": "مؤتمر"
            }
        },
        "en": {
            "searchPlaceholder": "Search research publications...",
            "filterLabel": "Filter by type:",
            "resultsLabel": "Publications",
            "noResultsTitle": "No results found",
            "noResultsBody": "Try different keywords or change the filter",
            "indexed": "Indexed",
            "types": {
                "all": "All",
                "journal": "Peer-Reviewed Journal",
                "book": "Book",
                "chapter": "Book Chapter",
                "conference": "Conference"
            }
        }
    } as const;

    const content = t[locale] ?? t["en"];

    const [selectedType, setSelectedType] = useState<PublicationTypeKey>("all");
    const [searchQuery, setSearchQuery] = useState<string>("");

    const publications = useMemo<Publication[]>(
        () => [
            {
                id: 1,
                title: "تقلد المرأة المناصب القيادية في ضوء مقاصد الشرع الكلية",
                type: "book",
                details: "مشاركة في مؤتمر مع النشر رقم الايداع بدار الكتاب المصرية 2019/6176 م",
                author: "أ.بدرية الهنائي",
                year: "2019"
            },
            {
                id: 2,
                title: "أثر برنامج تدريبي مقترح لتنمية مهارات الكتابة الوظيفية لدى طلبة كلية البريمي الجامعية",
                type: "journal",
                details: "مجلة ايجهار",
                author: "أ.سماح المعمري",
                year: "2021"
            },
            {
                id: 3,
                title: "القواعد الفقهية المتعلقة بالدور المجتمعي للمؤسسات المالية ورجال الأعمال في مواجهة الأوبئة والجوائح والكوارث والأزمات",
                type: "book",
                details: "مشاركة في مؤتمر مع النشر رقم الايداع بدار الكتاب المصرية 2021/6176 م",
                author: "أ.بدرية الهنائي",
                year: "2021"
            },
            {
                id: 4,
                title: "Students and Educators Attitudes towards the use of M-Learning: Gender and Smartphone ownership Differences",
                type: "journal",
                details: "International Journal of Interactive Mobile Technologies (iJIM) Vol. (1), pp. 127 – 135",
                author: "Dr. Yahya Al Khoudary",
                year: "2019",
                indexed: true
            },
            {
                id: 5,
                title: "Difficulties EFL Translation Students Face in Translating Legal Texts into Arabic",
                type: "journal",
                details: "Journal of Scientific Research Ain Shams University No.19, vol.4 ISSN 2356-83-43",
                author: "Amal Alrishan",
                indexed: true
            },
            {
                id: 6,
                title: "Working with Different Text Types in English and Arabic Translation in Practice",
                type: "book",
                details: "Cambridge Scholars Publishing",
                author: "Bahaa-eddin Hassan",
                indexed: true
            },
            {
                id: 7,
                title: "Fear from COVID-19 and technology adoption: the impact of Google Meet during Coronavirus pandemic",
                type: "journal",
                details: "Interactive Learning Environments",
                author: "Dr. Rana Almaroof",
                year: "2020",
                indexed: true
            },
            {
                id: 8,
                title: "Acceptance of Google Meet during the spread of Coronavirus by Arab university students",
                type: "journal",
                details: "Multidisciplinary Digital Publishing Institute",
                author: "Dr. Rana Almaroof",
                year: "2021",
                indexed: true
            },
            {
                id: 9,
                title: "Impact of a new teaching and learning approach in an introductory programming course",
                type: "journal",
                details: "Journal of Educational Computing Research, SAGE",
                author: "Dr. Sohail Iqbal, Jo Coldwell-Neilson",
                year: "2017",
                indexed: true
            },
            {
                id: 10,
                title: "The Impact of Marketing Mix on the Competitive Advantage of the SME sector in the Al Buraimi Governorate in Oman",
                type: "journal",
                details: "SAGE Open, DOI: 10.1177/2158244018800838",
                author: "د. خالد البادي",
                year: "2018",
                indexed: true
            },
            {
                id: 11,
                title: "Testing Growth Theory Using Existing Growth Models for MENA Countries",
                type: "journal",
                details: "International Journal of Economics and Finance; Vol. 12, No. 11",
                author: "Dr. Mohamed Omar Fargani and Dr. Girijasankar Mallik",
                year: "2020",
                indexed: true
            },
            {
                id: 12,
                title: "دراسات في فقه الأحوال الشخصية في الشريعة الإسلامية وفقا لقانون الأحوال الشخصية العماني",
                type: "book",
                details: "نشر دار الكتاب الجامعي",
                author: "أ.د حمدي عبدالله نافع",
                year: "2017"
            },
            {
                id: 13,
                title: "الحماية القانونية لحائز المعلومات غير المفصح عنها في مجال صناعة الدواء",
                type: "journal",
                details: "مجلة النشر القضائية ، المكتب الفني للمحكمة العليا بسلطنة عمان",
                author: "د. مصطفى راتب",
                year: "2020"
            },
            {
                id: 14,
                title: "العقود الذكية المبرمة على سلسلة الكتل (دراسة مقارنة)",
                type: "journal",
                details: "مجلة الدراسات الفقهية والقانونية – المعهد العالي للقضاء",
                author: "احمد كمال احمد صبري",
                year: "2022"
            },
            {
                id: 15,
                title: "خصائص الحضارة الإسلامية",
                type: "book",
                details: "مشاركة في مؤتمر مع النشر رقم الايداع بدار الكتاب المصرية 2019/6176 م",
                author: "د.منار المصري",
                year: "2019"
            }
        ],
        []
    );

    const publicationTypes: readonly PublicationTypeKey[] = ["all", "journal", "book", "chapter", "conference"];

    const filteredPublications = useMemo(() => {
        return publications.filter((pub) => {
            const matchesType = selectedType === "all" || pub.type === selectedType;
            const q = searchQuery.toLowerCase();
            const matchesSearch =
                pub.title.toLowerCase().includes(q) ||
                pub.author.toLowerCase().includes(q) ||
                pub.details.toLowerCase().includes(q);
            return matchesType && matchesSearch;
        });
    }, [publications, searchQuery, selectedType]);

    const typeColor = (type: PublicationTypeKey) => {
        if (type === "book") return "purple";
        if (type === "journal") return "blue";
        return "green";
    };

    const typeIcon = (type: PublicationTypeKey) => {
        if (type === "book") return BookMarked;
        return FileText;
    };

    return (
        <section className="bg-white py-10 sm:py-16">
            <div className="container mx-auto max-w-7xl px-3 sm:px-4">
                <div className="mb-8 rounded-lg border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50 p-5 shadow-xl sm:mb-12 sm:p-8">
                    <div className="mb-5 sm:mb-6">
                        <div className="relative mx-auto max-w-2xl">
                            <Search className="absolute right-4 top-1/2 size-5 -translate-y-1/2 text-gray-400 sm:size-6" />
                            <input
                                type="text"
                                placeholder={content.searchPlaceholder}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full rounded-lg border-2 border-purple-300 py-3 pl-4 pr-12 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 sm:py-4 sm:pl-6 sm:pr-14 sm:text-lg"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                        <div className="flex items-center gap-2 text-sm font-bold text-purple-700 sm:text-lg">
                            <Filter className="size-5 sm:size-6" />
                            <span>{content.filterLabel}</span>
                        </div>

                        {publicationTypes.map((type) => (
                            <button
                                key={type}
                                onClick={() => setSelectedType(type)}
                                className={`rounded-lg px-4 py-2 text-sm font-bold transition-all sm:px-6 sm:py-3 ${selectedType === type
                                    ? "bg-[#254151] text-white shadow-xl"
                                    : "border-2 border-purple-200 bg-white text-gray-700 hover:border-purple-400 hover:shadow-md"
                                    }`}
                            >
                                {content.types[type]}
                            </button>
                        ))}
                    </div>

                    <div className="mt-5 text-center sm:mt-6">
                        <p className="text-sm text-gray-700 sm:text-lg">
                            <span className="text-xl font-bold text-purple-700 sm:text-2xl">{filteredPublications.length}</span>
                            <span className="ms-2">{content.resultsLabel}</span>
                        </p>
                    </div>
                </div>

                <div className="space-y-4 sm:space-y-6">
                    {filteredPublications.map((pub, index) => {
                        const badgeColor = typeColor(pub.type);
                        const BadgeIcon = typeIcon(pub.type);

                        return (
                            <div
                                key={pub.id}
                                className="rounded-lg border-2 border-blue-200 bg-white p-4 shadow-xl transition-all hover:shadow-2xl sm:p-6"
                            >
                                <div className="sm:hidden flex size-6 sm:size-12 flex-shrink-0 items-center justify-center rounded-full bg-[#254151] text-sm sm:text-lg font-bold text-white sm:size-16 sm:text-2xl">
                                    {index + 1}
                                </div>
                                <div className="flex items-start gap-4 sm:gap-6">
                                    <div className="hidden sm:flex size-12 flex-shrink-0 items-center justify-center rounded-full bg-[#254151] text-lg font-bold text-white sm:size-16 sm:text-2xl">
                                        {index + 1}
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="mb-3 text-base font-bold leading-relaxed text-[#254151] sm:text-2xl">{pub.title}</h3>

                                        <div className="mb-4 grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3">
                                            <div className="flex items-center gap-2">
                                                <div
                                                    className={`flex items-center gap-2 rounded-lg border-2 bg-${badgeColor}-100 border-${badgeColor}-200 p-2 sm:p-3`}
                                                >
                                                    <BadgeIcon className={`size-4 sm:size-5 text-${badgeColor}-600`} />
                                                    <span className={`font-bold text-${badgeColor}-700 text-xs sm:text-sm`}>{content.types[pub.type]}</span>
                                                </div>
                                            </div>

                                            {pub.year && (
                                                <div className="flex items-center gap-2">
                                                    <div className="flex items-center gap-2 rounded-lg border-2 border-amber-200 bg-amber-100 p-2 sm:p-3">
                                                        <Calendar className="size-4 text-amber-600 sm:size-5" />
                                                        <span className="text-xs font-bold text-amber-700 sm:text-sm">{pub.year}</span>
                                                    </div>
                                                </div>
                                            )}

                                            {pub.indexed && (
                                                <div className="flex items-center gap-2">
                                                    <div className="flex items-center gap-2 rounded-lg border-2 border-green-200 bg-green-100 p-2 sm:p-3">
                                                        <Award className="size-4 text-green-600 sm:size-5" />
                                                        <span className="text-xs font-bold text-green-700 sm:text-sm">{content.indexed}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="mb-4 rounded-lg border-r-4 border-blue-500 bg-gradient-to-r from-blue-50 to-white p-3 sm:p-4">
                                            <p className="text-sm leading-relaxed text-gray-700 sm:text-base">{pub.details}</p>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <Users className="size-5 text-[#6096b4] sm:size-6" />
                                            <span className="text-sm font-bold text-[#254151] sm:text-lg">{pub.author}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {filteredPublications.length === 0 && (
                    <div className="mt-8 rounded-lg border-2 border-gray-300 bg-gray-100 p-8 text-center sm:mt-10 sm:p-12">
                        <Search className="mx-auto mb-4 size-14 text-gray-400 sm:size-20" />
                        <h3 className="mb-2 text-lg font-bold text-gray-600 sm:text-2xl">{content.noResultsTitle}</h3>
                        <p className="text-sm text-gray-500 sm:text-lg">{content.noResultsBody}</p>
                    </div>
                )}
            </div>
        </section>
    );
}
