"use client";

import { Award, BookOpen, Brain, Briefcase, Calendar, Filter, Search, Target, Users, Zap } from "lucide-react";
import { useLocale } from "next-intl";
import { useMemo, useState } from "react";

type LocaleKey = "ar" | "en";

type ProjectCategory = "الكل" | "ريادة الأعمال" | "تقنية المعلومات" | "الابتكار والتنافسية" | "قانوني" | "تعليمي";

type Project = {
    id: number;
    year: string;
    investigator: string;
    titleAr?: string;
    titleEn: string;
    objectives: string;
    category: ProjectCategory;
};

export default function ProjExplorerSection() {
    const locale = useLocale() as LocaleKey;

    const t = {
        "ar": {
            "searchPlaceholder": "ابحث في المشاريع البحثية...",
            "yearFilter": "تصنيف حسب السنة:",
            "categoryFilter": "تصنيف حسب الفئة:",
            "resultsLabel": "مشروع بحثي",
            "investigatorsLabel": "الباحثون الرئيسيون:",
            "objectivesLabel": "أهداف المشروع:",
            "noResultsTitle": "لم يتم العثور على نتائج",
            "noResultsBody": "جرب البحث بكلمات مختلفة أو غيّر التصنيف",
            "years": {
                "الكل": "الكل",
                "2024-2025": "2024-2025",
                "2023-2024": "2023-2024",
                "2022-2023": "2022-2023",
                "2021-2022": "2021-2022"
            },
            "categories": {
                "الكل": "الكل",
                "ريادة الأعمال": "ريادة الأعمال",
                "تقنية المعلومات": "تقنية المعلومات",
                "الابتكار والتنافسية": "الابتكار والتنافسية",
                "تعليمي": "تعليمي",
                "قانوني": "قانوني"
            }
        },
        "en": {
            "searchPlaceholder": "Search research projects...",
            "yearFilter": "Filter by year:",
            "categoryFilter": "Filter by category:",
            "resultsLabel": "Projects",
            "investigatorsLabel": "Principal Investigators:",
            "objectivesLabel": "Project Objectives:",
            "noResultsTitle": "No results found",
            "noResultsBody": "Try different keywords or change the filters",
            "years": {
                "الكل": "All",
                "2024-2025": "2024-2025",
                "2023-2024": "2023-2024",
                "2022-2023": "2022-2023",
                "2021-2022": "2021-2022"
            },
            "categories": {
                "الكل": "All",
                "ريادة الأعمال": "Entrepreneurship",
                "تقنية المعلومات": "Information Technology",
                "الابتكار والتنافسية": "Innovation & Competitiveness",
                "تعليمي": "Education",
                "قانوني": "Legal"
            }
        }
    } as const;

    const content = t[locale] ?? t["en"];

    const [selectedYear, setSelectedYear] = useState<string>("الكل");
    const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("الكل");
    const [searchQuery, setSearchQuery] = useState<string>("");

    const projects = useMemo<Project[]>(
        () => [
            {
                id: 1,
                year: "2023-2024",
                investigator: "Entrepreneurial Projects",
                titleAr: "معرض رواد الأعمال",
                titleEn: "Entrepreneurs Exhibition",
                objectives: "يهدف المعرض لدعم المشاريع الصغيرة والمتوسطة واتاحة الفرصة لرواد الأعمال والشركات الطلابية لعرض منتجاتهم وتطويرها.",
                category: "ريادة الأعمال"
            },
            {
                id: 2,
                year: "2023-2024",
                investigator: "Entrepreneurial Projects",
                titleAr: "مسابقة فكرة",
                titleEn: "Idea Competition",
                objectives: "سيقوم المتسابقين بتقديم عرض قصير مدته دقيقتين يشرح فيه المتسابق فكرة منتج او خدمة أو مشروع بطريقة تجذب الانتباه، حيث يحاول فيها الريادي اقناع المستثمر بأن فكرته تستحق الاستثمار.",
                category: "ريادة الأعمال"
            },
            {
                id: 3,
                year: "2023-2024",
                investigator: "Ms. Abeer with a group of students",
                titleEn: "Injaz Oman",
                objectives: "تسعى \"انجاز عمان\" لدعم الاقتصاد العماني عن طريق توفير فرص عمل للمجتمعات وتعزيز الأعمال الصغيرة والمتوسطة، كما تحفز الابتكار والابداع في تقديم الخدمات السياحية والبرامج الثقافية.",
                category: "ريادة الأعمال"
            },
            {
                id: 4,
                year: "2023-2024",
                investigator: "Ms. Abeer Al Zahraa Al Sinani, Al Anoud Al Azzizi",
                titleEn: "Upgrade Competition",
                objectives: "It aims at transforming ideas into business projects",
                category: "ريادة الأعمال"
            },
            {
                id: 5,
                year: "2023-2024",
                investigator: "Ms. Hajar Al Alawi, Dr. Hasan Hassan",
                titleEn: "Innovation Index Forum",
                objectives: "The aim of the Innovation Index Forum is to enhance understanding and promote the importance of innovation in driving economic growth and development. This forum brings together policymakers, industry leaders, academics, and innovators to discuss best practices, share insights, and explore strategies for fostering a culture of innovation.",
                category: "الابتكار والتنافسية"
            },
            {
                id: 6,
                year: "2023-2024",
                investigator: "Dr. Ragad M Tawafak, Mr. AbdulQader AL Shibli",
                titleEn: "Innovation Festival in Muscat / Online participation",
                objectives: "The aim of the Innovation Festival in Muscat is to promote a culture of innovation and creativity across various sectors in Oman. The festival serves as a platform to showcase innovative ideas, technologies, and solutions that can address local and global challenges.",
                category: "الابتكار والتنافسية"
            },
            {
                id: 7,
                year: "2023-2024",
                investigator: "Abdullah Al Farsi, Sultan Al Yaarubi",
                titleEn: "Innovation Festival in Muscat",
                objectives: "The aim of the Innovation Festival in Muscat is to promote a culture of innovation and creativity across various sectors in Oman. The festival serves as a platform to showcase innovative ideas, technologies, and solutions that can address local and global challenges.",
                category: "الابتكار والتنافسية"
            },
            {
                id: 8,
                year: "2023-2024",
                investigator: "Ms. Ghaliya Al Farsi, Abdullah Al Farsi, Sultan Al Yarubi",
                titleEn: "Innovation Festival in SQU",
                objectives: "The festival serves as a platform to showcase innovative projects, research, and entrepreneurial ideas that address real-world challenges.",
                category: "الابتكار والتنافسية"
            },
            {
                id: 9,
                year: "2023-2024",
                investigator: "Dr. Rana Alnaimi, Ms. Maryam Alazani",
                titleEn: "One to One Innovation Competition in Malaysia",
                objectives: "The One-to-One Innovation Competition in Malaysia aims to foster creativity and entrepreneurship among participants by encouraging innovative solutions to real world challenges. It focuses on identifying and developing unique ideas that can lead to new products, services, or processes.",
                category: "الابتكار والتنافسية"
            },
            {
                id: 10,
                year: "2023-2024",
                investigator: "Dr. Ragad M Tawafak, Ms. Ghaliya Alfarsi, Ms. Abir Alsideiri, Mr. Saif AlShamsi",
                titleEn: "One-to-One Innovation Competition in UTAS/Ibri",
                objectives: "The One-to-One Innovation Competition at the University of Technology and Applied Sciences (UTAS) in Ibri aims to promote a culture of innovation and entrepreneurship among students. The competition provides a platform for participants to present their creative ideas and projects.",
                category: "الابتكار والتنافسية"
            },
            {
                id: 11,
                year: "2023-2024",
                investigator: "Al Yaziya Al Jabri",
                titleEn: "Falling Wall Competition KSA",
                objectives: "The Falling Walls Competition aims to celebrate and promote innovative research and ideas that have the potential to address significant global challenges. The competition encourages participants to present their groundbreaking projects and solutions in a compelling format.",
                category: "الابتكار والتنافسية"
            },
            {
                id: 12,
                year: "2023-2024",
                investigator: "Al Yaziya Al Jabri, Abdullah Al Farsi",
                titleEn: "Falling Wall Competition Muscat",
                objectives: "The Falling Walls Competition in Muscat aims to celebrate and promote innovative research and ideas that have the potential to address significant global challenges.",
                category: "الابتكار والتنافسية"
            },
            {
                id: 13,
                year: "2023-2024",
                investigator: "Ms. Abir Alsideiri, Sultan Saif Alyarubi, Aisha Suleiman Alsaidi, Dana Mohammed Alnaimi, Salha Khalid Albaloshi, Omar Hamood Al Shukaili",
                titleEn: "NASA Hackathon",
                objectives: "The aim is to encourage innovation and creativity in solving challenges related to space exploration and Earth sciences. This global event brings together participants from various backgrounds—including developers, designers, scientists, and enthusiasts—to collaborate and develop projects.",
                category: "تقنية المعلومات"
            },
            {
                id: 14,
                year: "2023-2024",
                investigator: "Abdullah Al Farsi, Sultan Al Yarubi, Ammar Al Yahyaei, Nhyian Al Bulushi, Alyazia Al Jabri, Sheikha Al Balushi",
                titleEn: "In-pipe Inspection Robot (IIR) Student's Competition",
                objectives: "The In-pipe Inspection Robot (IIR) Student Competition specifically aims to encourage engineering students to innovate and design robots capable of inspecting pipelines.",
                category: "تقنية المعلومات"
            },
            {
                id: 15,
                year: "2023-2024",
                investigator: "Abdullah Al Farsi, Sultan Al Yarubi, Ammar Al Yahyaei, Nhyian Al Bulushi, Alyazia Al Jabri, Sheikha Al Balushi, Abdullah Al Balushi",
                titleEn: "Buraimi Hackathon",
                objectives: "The event brings together students, professionals, and enthusiasts to collaborate, share ideas, and create impactful projects within a limited timeframe. It emphasizes teamwork, problem-solving, and the application of technology to enhance community development.",
                category: "تقنية المعلومات"
            },
            {
                id: 16,
                year: "2023-2024",
                investigator: "Mr. Taimur Al Busaidi",
                titleEn: "Buraimi Hackathon organized by the Governor's Office Al Buraimi",
                objectives: "The event brings together students, professionals, and enthusiasts to collaborate, share ideas, and create impactful projects within a limited timeframe.",
                category: "تقنية المعلومات"
            },
            {
                id: 17,
                year: "2021-2022",
                investigator: "Ghaliya Al Farsi",
                titleEn: "Facilitation for Al Buraimi College Undergraduate to learn Java Language Using E Learning Model",
                objectives: "The objectives of this application make the problem easy to solve to memorization and understanding of programming codes in the programming languages of Java. Save time and avoid problems that may students face when programming.",
                category: "تقنية المعلومات"
            },
            {
                id: 18,
                year: "2021-2022",
                investigator: "د. بيداء حمزة",
                titleEn: "An Optimizing Rebroadcast Mechanism for Minimizing the Control Overhead in Mobile Ad-hoc Networks",
                objectives: "The objective of this research project is to improve network performance by proposing an optimized route discovery mechanism for minimizing the control overhead in on demand source routing protocols.",
                category: "تقنية المعلومات"
            },
            {
                id: 19,
                year: "2022-2023",
                investigator: "Dr. Baidaa Hamza Khudayer, Dr. Ragad Tawafak & Dr. Sohail Iqbal",
                titleEn: "A Comparative Performance Evaluation of Routing Protocols for Mobile Ad-hoc Networks",
                objectives: "The objective of this research project is to conduct a comparative analysis of the three groups of MANET routing protocols by comparing their features and methods.",
                category: "تقنية المعلومات"
            },
            {
                id: 20,
                year: "2022-2023",
                investigator: "د. بيداء حمزة",
                titleEn: "Probabilistic Detection of Indoor Events Using A Wireless Sensor Network-Based",
                objectives: "The objective of the project titled \"Probabilistic Detection of Indoor Events Using a Wireless Sensor Network-Based Mechanism\" is to develop an innovative approach for detecting events in indoor environments.",
                category: "تقنية المعلومات"
            },
            {
                id: 21,
                year: "2024-2025",
                investigator: "سفيان التارقي",
                titleEn: "Exploring Translation Students' Performance in Converting Arabic Idioms and Proverbs to English: Insights and Recommendations",
                objectives: "The aim is to evaluate and analyze the challenges faced by translation students when converting Arabic idioms and proverbs into English.",
                category: "تعليمي"
            },
            {
                id: 22,
                year: "2022-2023",
                investigator: "Abir Al Sideiri, Dr. Raghad Tawafaq & Ghaliya Al Farsi",
                titleEn: "Impact of Software Engineering Problem Based Learning on Students' Academic Performance",
                objectives: "The objective of this research is to adapt Software Engineering Problem Based Learning (SEPBL) approach and compare this approach with the traditional approach.",
                category: "تعليمي"
            },
            {
                id: 23,
                year: "2022-2023",
                investigator: "Ghaliya AL Farsi",
                titleEn: "The efficiency of the UTAUT2 model in predicting student acceptance of the virtual reality learning system",
                objectives: "This study aims to determine the extent to which students accept the Moodle virtual reality learning system at the Universities and the direct effects of the UTAUT2 model variables on the intention behavior.",
                category: "تعليمي"
            },
            {
                id: 24,
                year: "2023-2024",
                investigator: "Dr. Ahmed Al Afeefi",
                titleEn: "Green Finance - The National Science Week",
                objectives: "The objective is to raise awareness about the importance of green finance in promoting sustainable economic growth and addressing environmental challenges.",
                category: "الابتكار والتنافسية"
            },
            {
                id: 25,
                year: "2023-2024",
                investigator: "Mr. Mohammed Al-Nuaimi, Mr. Asaad Al Sharji, Mr. Abdullah Alfarsi",
                titleEn: "The National Science Week Exhibition",
                objectives: "The National Science Week Exhibition aims to promote awareness and appreciation of science among the public. It seeks to inspire curiosity, encourage engagement with scientific concepts, and highlight the importance of science and technology in everyday life.",
                category: "الابتكار والتنافسية"
            },
            {
                id: 26,
                year: "2022-2023",
                investigator: "رمضان إبراهيم عبد الكريم موسى",
                titleAr: "تيسير إجراءات التقاضي في خصوص قانون الإجراءات المدنية العماني",
                titleEn: "Facilitating litigation procedures regarding the Omani Civil Procedures Law",
                objectives: "تهدف هذه الدراسة الى تحليل وتيسير إجراءات التقاضي في إطار قانون الإجراءات المدنية العماني، من خلال تقييم فعالية القوانين والأنظمة الحالية، تحديد التحديات التي تواجه المتقاضيين والمحاميين.",
                category: "قانوني"
            }
        ],
        []
    );

    const years = useMemo(() => ["الكل", "2024-2025", "2023-2024", "2022-2023", "2021-2022"], []);
    const categories = useMemo<ProjectCategory[]>(
        () => ["الكل", "ريادة الأعمال", "تقنية المعلومات", "الابتكار والتنافسية", "تعليمي", "قانوني"],
        []
    );

    const filteredProjects = useMemo(() => {
        const q = searchQuery.toLowerCase();
        return projects.filter((project) => {
            const matchesYear = selectedYear === "الكل" || project.year === selectedYear;
            const matchesCategory = selectedCategory === "الكل" || project.category === selectedCategory;
            const matchesSearch =
                project.titleEn.toLowerCase().includes(q) ||
                (project.titleAr?.toLowerCase().includes(q) ?? false) ||
                project.investigator.toLowerCase().includes(q) ||
                project.objectives.toLowerCase().includes(q);

            return matchesYear && matchesCategory && matchesSearch;
        });
    }, [projects, searchQuery, selectedCategory, selectedYear]);

    const getCategoryIcon = (category: ProjectCategory) => {
        switch (category) {
            case "ريادة الأعمال":
                return Briefcase;
            case "تقنية المعلومات":
                return Zap;
            case "الابتكار والتنافسية":
                return Brain;
            case "تعليمي":
                return BookOpen;
            case "قانوني":
                return Award;
            default:
                return Target;
        }
    };

    const getCategoryColor = (category: ProjectCategory) => {
        switch (category) {
            case "ريادة الأعمال":
                return "blue";
            case "تقنية المعلومات":
                return "purple";
            case "الابتكار والتنافسية":
                return "green";
            case "تعليمي":
                return "amber";
            case "قانوني":
                return "red";
            default:
                return "gray";
        }
    };

    const primaryTitle = (project: Project) => {
        if (locale === "ar") return project.titleAr ?? project.titleEn;
        return project.titleEn;
    };

    const secondaryTitle = (project: Project) => {
        if (locale === "ar") return project.titleAr ? project.titleEn : null;
        return project.titleAr ?? null;
    };

    return (
        <>
            <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-10 sm:py-16">
                <div className="container mx-auto max-w-7xl px-3 sm:px-4">
                    <div className="rounded-lg border-2 border-blue-200 bg-white p-5 shadow-2xl sm:p-8">
                        <div className="mb-5 sm:mb-6">
                            <div className="relative mx-auto max-w-2xl">
                                <Search className="absolute right-4 top-1/2 size-5 -translate-y-1/2 text-gray-400 sm:size-6" />
                                <input
                                    type="text"
                                    placeholder={content.searchPlaceholder}
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full rounded-lg border-2 border-blue-300 py-3 pl-4 pr-12 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 sm:py-4 sm:pl-6 sm:pr-14 sm:text-lg"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="mb-3 flex items-center gap-2">
                                <Calendar className="size-5 text-blue-700 sm:size-6" />
                                <span className="text-sm font-bold text-blue-700 sm:text-lg">{content.yearFilter}</span>
                            </div>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {years.map((year: string) => (
                                    <button
                                        key={year}
                                        onClick={() => setSelectedYear(year)}
                                        className={`rounded-lg px-4 py-2 text-sm font-bold transition-all sm:px-6 sm:py-3 ${selectedYear === year
                                            ? "bg-[#254151] text-white shadow-xl"
                                            : "border-2 border-blue-200 bg-white text-gray-700 hover:border-blue-400 hover:shadow-md"
                                            }`}
                                    >
                                        {content.years[year as keyof typeof content.years]}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="mb-3 flex items-center gap-2">
                                <Filter className="size-5 text-purple-700 sm:size-6" />
                                <span className="text-sm font-bold text-purple-700 sm:text-lg">{content.categoryFilter}</span>
                            </div>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {categories.map((category: ProjectCategory) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`rounded-lg px-4 py-2 text-sm font-bold transition-all sm:px-6 sm:py-3 ${selectedCategory === category
                                            ? "bg-[#6096b4] text-white shadow-xl"
                                            : "border-2 border-purple-200 bg-white text-gray-700 hover:border-purple-400 hover:shadow-md"
                                            }`}
                                    >
                                        {content.categories[category as keyof typeof content.categories]}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mt-5 text-center sm:mt-6">
                            <p className="text-sm text-gray-700 sm:text-lg">
                                <span className="text-xl font-bold text-blue-700 sm:text-2xl">{filteredProjects.length}</span>
                                <span className="ms-2">{content.resultsLabel}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-10 sm:py-16">
                <div className="container mx-auto max-w-7xl px-3 sm:px-4">
                    <div className="space-y-4 sm:space-y-6">
                        {filteredProjects.map((project, index: number) => {
                            const CategoryIcon = getCategoryIcon(project.category);
                            const categoryColor = getCategoryColor(project.category);

                            const mainTitle = primaryTitle(project);
                            const subTitle = secondaryTitle(project);

                            return (
                                <div
                                    key={project.id}
                                    className="rounded-lg border-2 border-blue-200 bg-white p-4 shadow-xl transition-all hover:shadow-2xl sm:p-6"
                                >
                                    <div className="flex items-start gap-4 sm:gap-6">
                                        <div className="hidden sm:flex size-12 flex-shrink-0 items-center justify-center rounded-full bg-[#254151] text-lg font-bold text-white sm:size-16 sm:text-2xl">
                                            {index + 1}
                                        </div>

                                        <div className="flex-1">
                                            <div className="mb-4">
                                                <h3 className="mb-2 text-base font-bold leading-relaxed text-[#254151] sm:text-2xl">{mainTitle}</h3>
                                                {subTitle ? (
                                                    <h4 className="text-sm font-bold leading-relaxed text-[#6096b4] sm:text-xl">{subTitle}</h4>
                                                ) : null}
                                            </div>

                                            <div className="mb-4 grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3">
                                                <div className="flex items-center gap-2 rounded-lg border-2 border-amber-200 bg-amber-100 p-2 sm:p-3">
                                                    <Calendar className="size-4 text-amber-600 sm:size-5" />
                                                    <span className="text-xs font-bold text-amber-700 sm:text-sm">{project.year}</span>
                                                </div>

                                                <div className={`flex items-center gap-2 rounded-lg border-2 border-${categoryColor}-200 bg-${categoryColor}-100 p-2 sm:p-3`}>
                                                    <CategoryIcon className={`size-4 sm:size-5 text-${categoryColor}-600`} />
                                                    <span className={`text-xs sm:text-sm font-bold text-${categoryColor}-700`}>
                                                        {content.categories[project.category as keyof typeof content.categories]}
                                                    </span>
                                                </div>

                                                <div className="flex items-center gap-2 rounded-lg border-2 border-blue-200 bg-blue-100 p-2 sm:p-3">
                                                    <Users className="size-4 text-blue-600 sm:size-5" />
                                                    <span className="truncate text-xs font-bold text-blue-700 sm:text-sm" title={project.investigator}>
                                                        {project.investigator.split(",")[0]}
                                                        {project.investigator.includes(",") ? "..." : ""}
                                                    </span>
                                                </div>
                                            </div>

                                            {project.investigator.includes(",") ? (
                                                <div className="mb-4 rounded-lg border-r-4 border-blue-500 bg-gradient-to-r from-blue-50 to-white p-3 sm:p-4">
                                                    <div className="flex items-start gap-2">
                                                        <Users className="mt-1 size-4 flex-shrink-0 text-blue-600 sm:size-5" />
                                                        <div>
                                                            <p className="mb-1 text-xs font-bold text-blue-700 sm:text-sm">{content.investigatorsLabel}</p>
                                                            <p className="text-sm leading-relaxed text-gray-700 sm:text-base">{project.investigator}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : null}

                                            <div className="rounded-lg border-r-4 border-green-500 bg-gradient-to-r from-green-50 to-white p-3 sm:p-4">
                                                <div className="flex items-start gap-2">
                                                    <Target className="mt-1 size-5 flex-shrink-0 text-green-600 sm:size-6" />
                                                    <div>
                                                        <p className="mb-2 text-xs font-bold text-green-700 sm:text-sm">{content.objectivesLabel}</p>
                                                        <p className="text-sm leading-relaxed text-gray-700 sm:text-base">{project.objectives}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {filteredProjects.length === 0 ? (
                        <div className="mt-8 rounded-lg border-2 border-gray-300 bg-gray-100 p-8 text-center sm:mt-10 sm:p-12">
                            <Search className="mx-auto mb-4 size-14 text-gray-400 sm:size-20" />
                            <h3 className="mb-2 text-lg font-bold text-gray-600 sm:text-2xl">{content.noResultsTitle}</h3>
                            <p className="text-sm text-gray-500 sm:text-lg">{content.noResultsBody}</p>
                        </div>
                    ) : null}
                </div>
            </section>
        </>
    );
}
