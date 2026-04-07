"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { GraduationCap, BookOpen, Target, Users, Award, Phone, Mail, ChevronLeft, CheckCircle, TrendingUp, Globe, Lightbulb, Calculator, Monitor, FileText, ClipboardCheck, Clock } from 'lucide-react';

import foundationImage from 'figma:asset/7e06954d89f4af64a098a92963c0ff05b99a4be5.png';
import FoundHero from '@/components/FoundationProgramPage/FoundationHero';
import FoundCTA from '@/components/FoundationProgramPage/FoundCTA';
import FoundSideBar from '@/components/FoundationProgramPage/SideBar';
import FoundOverview from '@/components/FoundationProgramPage/Overview';
import FoundAdmission from '@/components/FoundationProgramPage/Admission';
import FoundStudy from '@/components/FoundationProgramPage/Study';

export default function FoundationProgramPage() {
    const [activeSidebarItem, setActiveSidebarItem] = useState('overview');


    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <FoundHero />
            {/* Main Content with Sidebar */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex gap-8 max-w-7xl mx-auto">
                        {/* Sidebar */}
                        <FoundSideBar setActiveSidebarItem={setActiveSidebarItem} activeSidebarItem={activeSidebarItem} />

                        {/* Main Content */}
                        <div className="flex-1">
                            {/* Overview Section */}
                            <FoundOverview />
                            {/* Admission Requirements */}
                            <FoundAdmission />
                            {/* Vision, Mission, Goals */}
                            <div id="vision" className="mb-16">
                                <div className="bg-white rounded-lg shadow-xl p-10 border-2 border-purple-200">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="bg-purple-600 text-white p-4 rounded-full">
                                            <Target className="size-8" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-[#254151]">الرؤية والرسالة والأهداف</h2>
                                    </div>

                                    {/* Vision */}
                                    <div className="mb-8">
                                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 border-2 border-blue-200">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="bg-blue-600 text-white size-12 rounded-full flex items-center justify-center">
                                                    <Lightbulb className="size-7" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-[#254151]">الرؤية</h3>
                                            </div>
                                            <p className="text-gray-700 text-lg leading-relaxed">
                                                وتتمثل رؤية كلية البريمي الجامعية في مواصلة طريق التميز في تطوير مركز متكامل قابل للتطبيق والعمل وملائم يلبي احتياجات جميع طلاب الكلية من ذوي القدرات التعليمية المتنوعة والكفاءات اللغوية المختلفة، مما يساعد الكلية الجامعية في البريمي على تحقيق رسالتها في تعزيز قضية التعليم في خدمة المجتمع والمساهمة في أنشطة بناء الوطن.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Mission */}
                                    <div className="mb-8">
                                        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 border-2 border-green-200">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="bg-green-600 text-white size-12 rounded-full flex items-center justify-center">
                                                    <Target className="size-7" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-[#254151]">مهمة البرنامج التأسيسي العام</h3>
                                            </div>
                                            <p className="text-gray-700 text-lg leading-relaxed">
                                                تزويد طلابنا الخريجين الطموحين بإتقان اللغة الإنجليزية ومهارات تكنولوجيا المعلومات الأساسية ومهارات الرياضيات لمتابعة دراساتهم الجامعية وبالتالي المساهمة في رفاهية المجتمع من خلال مساعٍ مختلفة.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Continue with rest of the section... */}
                                </div>
                            </div>

                            {/* Study Plan */}
                            <FoundStudy />
                            {/* Completion Exam */}
                            <div id="completion" className="mb-16">
                                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg shadow-xl p-10 border-2 border-red-200">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="bg-red-600 text-white p-4 rounded-full">
                                            <FileText className="size-8" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-[#254151]">امتحان إكمال متطلبات البرنامج التأسيسي</h2>
                                    </div>
                                    <div className="bg-white rounded-lg p-8 shadow-md">
                                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                            يجب على جميع الطلاب اجتياز امتحان إكمال متطلبات البرنامج التأسيسي بنجاح للانتقال إلى البرنامج الأكاديمي.
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
                                                <h3 className="font-bold text-[#254151] mb-2 flex items-center gap-2">
                                                    <Award className="size-5 text-red-600" />
                                                    متطلبات الاجتياز
                                                </h3>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li>• إكمال جميع مقررات المستوى الثاني</li>
                                                    <li>• الحصول على معدل لا يقل عن 2.0</li>
                                                    <li>• اجتياز جميع الامتحانات النهائية</li>
                                                </ul>
                                            </div>
                                            <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
                                                <h3 className="font-bold text-[#254151] mb-2 flex items-center gap-2">
                                                    <CheckCircle className="size-5 text-red-600" />
                                                    موعد الامتحان
                                                </h3>
                                                <p className="text-gray-700">
                                                    يعقد الامتحان في نهاية كل فصل دراسي وفقاً للجدول الأكاديمي المعتمد من الكلية.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <Link
                                                href="/foundation-completion-exam"
                                                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-bold hover:shadow-2xl transition-all text-lg"
                                            >
                                                <FileText className="size-6" />
                                                <span>عرض التفاصيل الكاملة للامتحان</span>
                                                <ChevronLeft className="size-5" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Math Exam */}
                            <div id="math-exam" className="mb-16">
                                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg shadow-xl p-10 border-2 border-green-200">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="bg-green-600 text-white p-4 rounded-full">
                                            <Calculator className="size-8" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-[#254151]">امتحان إنهاء متطلب الرياضيات</h2>
                                    </div>
                                    <div className="bg-white rounded-lg p-8 shadow-md">
                                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                            يمكن للطلاب المتفوقين في الرياضيات إنهاء متطلب الرياضيات عن طريق اجتياز امتحان خاص معتمد من الكلية.
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <Clock className="size-6 text-green-600" />
                                                    <h3 className="font-bold text-[#254151]">مدة الامتحان</h3>
                                                </div>
                                                <p className="text-2xl font-bold text-green-700">50 دقيقة</p>
                                            </div>
                                            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <Award className="size-6 text-green-600" />
                                                    <h3 className="font-bold text-[#254151]">علامة النجاح</h3>
                                                </div>
                                                <p className="text-2xl font-bold text-green-700">50/100</p>
                                            </div>
                                            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <TrendingUp className="size-6 text-green-600" />
                                                    <h3 className="font-bold text-[#254151]">فرص الإعادة</h3>
                                                </div>
                                                <p className="text-lg font-bold text-green-700">فرصة ثانية</p>
                                            </div>
                                        </div>
                                        <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200 mb-4">
                                            <h3 className="font-bold text-[#254151] mb-3">شروط التقدم للامتحان:</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                    <span>اجتياز مقرر الرياضيات التطبيقية أو البحتة بنجاح</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                    <span>التقدم بطلب خلال الأسبوعين الأولين من الفصل الدراسي</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                    <span>يمكن للطلاب الراسبين الحصول على فرصة أخرى لإعادة الامتحان</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="mt-6">
                                            <Link
                                                href="/math-completion-exam"
                                                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg font-bold hover:shadow-2xl transition-all text-lg"
                                            >
                                                <Calculator className="size-6" />
                                                <span>عرض التفاصيل الكاملة للامتحان</span>
                                                <ChevronLeft className="size-5" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Oxford Test */}
                            <div id="oxford-test" className="mb-16">
                                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg shadow-xl p-10 border-2 border-indigo-200">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="bg-indigo-600 text-white p-4 rounded-full">
                                            <Award className="size-8" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-[#254151]">اختبار تحديد المستوى من أكسفورد</h2>
                                    </div>
                                    <div className="bg-white rounded-lg p-8 shadow-md">
                                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                            تستخدم الكلية اختبار أكسفورد المعتمد دولياً لتحديد مستوى الطلاب في اللغة الإنجليزية عند القبول. اختبار عبر الإنترنت بتقنية التكيف الحاسوبي لنتائج أكثر دقة.
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                            <div className="bg-indigo-50 p-6 rounded-lg border-2 border-indigo-200">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <Globe className="size-6 text-indigo-600" />
                                                    <h3 className="font-bold text-[#254151]">100% عبر الإنترنت</h3>
                                                </div>
                                                <p className="text-gray-700">على أي جهاز ومن أي مكان</p>
                                            </div>
                                            <div className="bg-indigo-50 p-6 rounded-lg border-2 border-indigo-200">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <Clock className="size-6 text-indigo-600" />
                                                    <h3 className="font-bold text-[#254151]">نتائج فورية</h3>
                                                </div>
                                                <p className="text-gray-700">التصحيح التلقائي الفوري</p>
                                            </div>
                                            <div className="bg-indigo-50 p-6 rounded-lg border-2 border-indigo-200">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <Award className="size-6 text-indigo-600" />
                                                    <h3 className="font-bold text-[#254151]">مستويات CEFR</h3>
                                                </div>
                                                <p className="text-gray-700">من Pre-A1 إلى C2</p>
                                            </div>
                                        </div>
                                        <div className="bg-indigo-50 p-6 rounded-lg border-2 border-indigo-200 mb-4">
                                            <h3 className="font-bold text-[#254151] mb-3">مميزات الاختبار:</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                <div className="flex items-start gap-2">
                                                    <CheckCircle className="size-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700">تقنية التكيف الحاسوبي للدقة العالية</span>
                                                </div>
                                                <div className="flex items-start gap-2">
                                                    <CheckCircle className="size-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700">تقارير شاملة ومفصلة</span>
                                                </div>
                                                <div className="flex items-start gap-2">
                                                    <CheckCircle className="size-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700">ساعد ملايين الطلاب حول العالم</span>
                                                </div>
                                                <div className="flex items-start gap-2">
                                                    <CheckCircle className="size-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700">معايير دولية معترف بها</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <Link
                                                href="/oxford-placement-test"
                                                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-8 py-4 rounded-lg font-bold hover:shadow-2xl transition-all text-lg"
                                            >
                                                <Award className="size-6" />
                                                <span>عرض التفاصيل الكاملة للاختبار</span>
                                                <ChevronLeft className="size-5" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Practice Test */}
                            <div id="practice-test" className="mb-16">
                                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg shadow-xl p-10 border-2 border-purple-200">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="bg-purple-600 text-white p-4 rounded-full">
                                            <ClipboardCheck className="size-8" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-[#254151]">امتحان تحديد المستوى - تدريبي</h2>
                                    </div>
                                    <div className="bg-white rounded-lg p-8 shadow-md">
                                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                            توفر الكلية مجموعة من الامتحانات التدريبية المجانية لمساعدة الطلاب على الاستعداد بشكل أفضل لامتحانات تحديد المستوى الرسمية في الرياضيات والحاسب الآلي.
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <Calculator className="size-6 text-purple-600" />
                                                    <h3 className="font-bold text-[#254151]">امتحانات الرياضيات</h3>
                                                </div>
                                                <p className="text-gray-700">5 امتحانات تدريبية</p>
                                            </div>
                                            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <Monitor className="size-6 text-purple-600" />
                                                    <h3 className="font-bold text-[#254151]">امتحانات الحاسوب</h3>
                                                </div>
                                                <p className="text-gray-700">2 امتحانات تدريبية</p>
                                            </div>
                                            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <Clock className="size-6 text-purple-600" />
                                                    <h3 className="font-bold text-[#254151]">محوسب بالكامل</h3>
                                                </div>
                                                <p className="text-gray-700">50 دقيقة لكل امتحان</p>
                                            </div>
                                        </div>
                                        <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200 mb-4">
                                            <h3 className="font-bold text-[#254151] mb-3">مميزات الامتحانات التدريبية:</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                <div className="flex items-start gap-2">
                                                    <CheckCircle className="size-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700">نماذج مطابقة للامتحانات الرسمية</span>
                                                </div>
                                                <div className="flex items-start gap-2">
                                                    <CheckCircle className="size-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700">نتائج فورية وتقارير تفصيلية</span>
                                                </div>
                                                <div className="flex items-start gap-2">
                                                    <CheckCircle className="size-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700">متاحة مجاناً لجميع الطلاب</span>
                                                </div>
                                                <div className="flex items-start gap-2">
                                                    <CheckCircle className="size-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700">إمكانية إعادة الامتحان عدة مرات</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <Link
                                                href="/practice-placement-test"
                                                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-lg font-bold hover:shadow-2xl transition-all text-lg"
                                            >
                                                <ClipboardCheck className="size-6" />
                                                <span>عرض جميع الامتحانات التدريبية</span>
                                                <ChevronLeft className="size-5" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Faculty */}
                            <div id="faculty" className="mb-16">
                                <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg shadow-xl p-10 border-2 border-amber-200">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="bg-amber-600 text-white p-4 rounded-full">
                                            <Users className="size-8" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-[#254151]">أعضاء الهيئة التدريسية</h2>
                                    </div>
                                    <div className="bg-white rounded-lg p-8 shadow-md">
                                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                            يتميز البرنامج التأسيسي بهيئة تدريسية مؤهلة وذات خبرة عالية في مجالات التدريس والتوجيه الأكاديمي. يضم فريقنا 12 عضواً من الأساتذة والمحاضرين المتخصصين.
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                            <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200 text-center">
                                                <div className="bg-amber-600 text-white size-16 rounded-full flex items-center justify-center mx-auto mb-3">
                                                    <Users className="size-8" />
                                                </div>
                                                <h3 className="font-bold text-[#254151] mb-2">إجمالي الأعضاء</h3>
                                                <p className="text-3xl font-bold text-amber-700">12</p>
                                            </div>
                                            <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200 text-center">
                                                <div className="bg-amber-600 text-white size-16 rounded-full flex items-center justify-center mx-auto mb-3">
                                                    <BookOpen className="size-8" />
                                                </div>
                                                <h3 className="font-bold text-[#254151] mb-2">قسم اللغة الإنجليزية</h3>
                                                <p className="text-gray-600">أساتذة متخصصون في تعليم اللغة الإنجليزية</p>
                                            </div>
                                            <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200 text-center">
                                                <div className="bg-amber-600 text-white size-16 rounded-full flex items-center justify-center mx-auto mb-3">
                                                    <Monitor className="size-8" />
                                                </div>
                                                <h3 className="font-bold text-[#254151] mb-2">قسم تكنولوجيا المعلومات</h3>
                                                <p className="text-gray-600">متخصصون في تقنية المعلومات</p>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <Link
                                                href="/foundation-faculty"
                                                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-lg font-bold hover:shadow-2xl transition-all text-lg"
                                            >
                                                <Users className="size-6" />
                                                <span>تعرف على أعضاء هيئة التدريس</span>
                                                <ChevronLeft className="size-5" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <FoundCTA />
        </div>
    );
}