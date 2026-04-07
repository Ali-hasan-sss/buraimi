"use client";

import { ChevronLeft, GraduationCap, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

type Course = {
    code: string;
    title: string;
    titleEn: string;
    credits: number;
    description?: string;
};

const level1Courses: Course[] = [
    {
        code: "ENGL1001",
        title: "اللغة الإنجليزية - المستوى الأول",
        titleEn: "English Language - Level 1",
        credits: 12,
        description: "تطوير المهارات الأساسية في اللغة الإنجليزية",
    },
    {
        code: "MATH1001",
        title: "الرياضيات - المستوى الأول",
        titleEn: "Mathematics - Level 1",
        credits: 6,
        description: "أساسيات الرياضيات والعمليات الحسابية",
    },
    {
        code: "IT1001",
        title: "تكنولوجيا المعلومات - المستوى الأول",
        titleEn: "Information Technology - Level 1",
        credits: 3,
        description: "مبادئ تكنولوجيا المعلومات والحاسوب",
    },
    {
        code: "STUDY1001",
        title: "المهارات الدراسية",
        titleEn: "Study Skills",
        credits: 3,
        description: "تطوير مهارات الدراسة والبحث العلمي",
    },
];

const level2Courses: Course[] = [
    {
        code: "ENGL1002",
        title: "اللغة الإنجليزية - المستوى الثاني",
        titleEn: "English Language - Level 2",
        credits: 12,
        description: "تطوير المهارات المتقدمة في اللغة الإنجليزية الأكاديمية",
    },
    {
        code: "MATH1002",
        title: "الرياضيات - المستوى الثاني",
        titleEn: "Mathematics - Level 2",
        credits: 6,
        description: "مفاهيم متقدمة في الرياضيات",
    },
    {
        code: "IT1002",
        title: "تكنولوجيا المعلومات - المستوى الثاني",
        titleEn: "Information Technology - Level 2",
        credits: 3,
        description: "تطبيقات متقدمة في تكنولوجيا المعلومات",
    },
    {
        code: "STUDY1002",
        title: "مهارات البحث الأكاديمي",
        titleEn: "Academic Research Skills",
        credits: 3,
        description: "مهارات البحث والكتابة الأكاديمية المتقدمة",
    },
];




export default function FoundStudy() {
    const [activeLevel, setActiveLevel] = useState<"level1" | "level2">("level1");

    const currentCourses = useMemo(
        () => (activeLevel === "level1" ? level1Courses : level2Courses),
        [activeLevel]
    );

    const totalCredits = useMemo(
        () => currentCourses.reduce((sum, course) => sum + course.credits, 0),
        [currentCourses]
    );

    return (
        <div id="level1" className="mb-16">
            <div className="bg-white rounded-lg shadow-xl p-10 border-2 border-amber-200">
                <h2 className="text-3xl font-bold text-[#254151] mb-8 text-center">الخطة الدراسية</h2>

                <div className="flex justify-center gap-4 mb-8">
                    <button
                        type="button"
                        onClick={() => setActiveLevel("level1")}
                        aria-pressed={activeLevel === "level1"}
                        className={`px-8 py-4 rounded-lg font-bold text-lg transition-all ${activeLevel === "level1"
                            ? "bg-gradient-to-r from-[#254151] to-[#6096b4] text-white shadow-lg"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                    >
                        المستوى الأول
                    </button>
                    <button
                        type="button"
                        id="level2"
                        onClick={() => setActiveLevel("level2")}
                        aria-pressed={activeLevel === "level2"}
                        className={`px-8 py-4 rounded-lg font-bold text-lg transition-all ${activeLevel === "level2"
                            ? "bg-gradient-to-r from-[#254151] to-[#6096b4] text-white shadow-lg"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                    >
                        المستوى الثاني
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gradient-to-r from-[#254151] to-[#6096b4] text-white">
                                <th scope="col" className="p-4 text-right border-2 border-white">
                                    رمز المساق
                                </th>
                                <th scope="col" className="p-4 text-right border-2 border-white">
                                    عنوان الدورة (عربي)
                                </th>
                                <th scope="col" className="p-4 text-right border-2 border-white">
                                    عنوان الدورة (English)
                                </th>
                                <th scope="col" className="p-4 text-center border-2 border-white">
                                    الساعات المعتمدة
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentCourses.map((course, index) => (
                                <tr
                                    key={course.code}
                                    className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-50 transition-colors`}
                                >
                                    <td className="p-4 border-2 border-gray-200 font-mono text-blue-600 font-semibold">
                                        {course.code}
                                    </td>
                                    <td className="p-4 border-2 border-gray-200 font-bold">{course.title}</td>
                                    <td className="p-4 border-2 border-gray-200">{course.titleEn}</td>
                                    <td className="p-4 border-2 border-gray-200 text-center font-bold text-lg">
                                        {course.credits}
                                    </td>
                                </tr>
                            ))}
                            <tr className="bg-gradient-to-r from-amber-100 to-amber-200 font-bold">
                                <td colSpan={3} className="p-4 border-2 border-gray-300 text-right text-xl">
                                    إجمالي الساعات المعتمدة
                                </td>
                                <td className="p-4 border-2 border-gray-300 text-center text-2xl text-amber-700">
                                    {totalCredits}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-6 bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-2 border-blue-200">
                    <h3 className="font-bold text-[#254151] mb-3 text-xl">ملاحظة:</h3>
                    <p className="text-gray-700 leading-relaxed">
                        يجب على الطالب إكمال جميع متطلبات{" "}
                        {activeLevel === "level1" ? "المستوى الأول" : "المستوى الثاني"} بنجاح قبل
                        الانتقال إلى{" "}
                        {activeLevel === "level1" ? "المستوى الثاني" : "البرنامج الأكاديمي"}.
                    </p>
                </div>

                {activeLevel === "level1" && (
                    <div className="mt-6">
                        <Link
                            href="/main/foundation-level1"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#254151] to-[#6096b4] text-white px-8 py-4 rounded-lg font-bold hover:shadow-2xl transition-all text-lg"
                        >
                            <GraduationCap className="size-6" />
                            <span>عرض التفاصيل الكاملة للمستوى الأول</span>
                            <ChevronLeft className="size-5" />
                        </Link>
                    </div>
                )}

                {activeLevel === "level2" && (
                    <div className="mt-6">
                        <Link
                            href="/main/foundation-level2"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6096b4] to-[#254151] text-white px-8 py-4 rounded-lg font-bold hover:shadow-2xl transition-all text-lg"
                        >
                            <TrendingUp className="size-6" />
                            <span>عرض التفاصيل الكاملة للمستوى الثاني</span>
                            <ChevronLeft className="size-5" />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}