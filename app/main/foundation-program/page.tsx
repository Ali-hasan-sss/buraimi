"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { GraduationCap, BookOpen, Target, Users, Award, ChevronLeft, CheckCircle, TrendingUp, Globe, Lightbulb, Calculator, Monitor, FileText, ClipboardCheck, Clock, Pencil, Save, X, Loader2 } from 'lucide-react';

import FoundCTA from '@/components/FoundationProgramPage/FoundCTA';
import FoundSideBar from '@/components/FoundationProgramPage/SideBar';
import FoundStudy from '@/components/FoundationProgramPage/Study';
import Image from "next/image";
import { useLocale } from 'next-intl';

type FoundationProgramData = {
    level1Courses: Array<{ code: string; titleAr: string; titleEn: string; credits: number }>;
    level2Courses: Array<{ code: string; titleAr: string; titleEn: string; credits: number }>;
    heroTitleAr: string; heroTitleEn: string; heroSubtitleAr: string; heroSubtitleEn: string;
    overviewTitleAr: string; overviewTitleEn: string; overviewText1Ar: string; overviewText1En: string; overviewText2Ar: string; overviewText2En: string;
    admissionTitleAr: string; admissionTitleEn: string; admissionTextAr: string; admissionTextEn: string;
    studyTitleAr: string; studyTitleEn: string; studyNoteAr: string; studyNoteEn: string;
    visionSectionTitleAr: string; visionSectionTitleEn: string; visionTitleAr: string; visionTitleEn: string; visionTextAr: string; visionTextEn: string;
    missionTitleAr: string; missionTitleEn: string; missionTextAr: string; missionTextEn: string;
};

export default function FoundationProgramPage() {
    const [activeSidebarItem, setActiveSidebarItem] = useState('overview');
    const locale = useLocale();
    const isAr = locale === "ar";
    const [isAdmin, setIsAdmin] = useState(false);
    const [editingSection, setEditingSection] = useState<"hero" | "overview" | "admission" | "study" | "vision" | null>(null);
    const [saving, setSaving] = useState(false);
    const [data, setData] = useState<FoundationProgramData | null>(null);
    const [draft, setDraft] = useState<FoundationProgramData | null>(null);

    useEffect(() => {
        void (async () => {
            try {
                const [res, meRes] = await Promise.all([
                    fetch("/api/foundation-program", { cache: "no-store" }),
                    fetch("/api/auth/me", { method: "GET", credentials: "include", cache: "no-store" }),
                ]);
                const json = (await res.json()) as { ok?: boolean; data?: FoundationProgramData };
                const me = (await meRes.json()) as { ok?: boolean; isAdmin?: boolean };
                if (json.ok && json.data) setData(json.data);
                setIsAdmin(Boolean(me.ok && me.isAdmin));
            } catch {
                setIsAdmin(false);
            }
        })();
    }, []);

    const view = draft ?? data;
    const updateDraft = (patch: Partial<FoundationProgramData>) => setDraft((prev) => (prev ? ({ ...prev, ...patch }) : prev));

    const startEdit = (section: "hero" | "overview" | "admission" | "study" | "vision") => {
        if (!data) return;
        if (!draft) setDraft({ ...data });
        setEditingSection(section);
    };
    const cancelEdit = () => {
        setEditingSection(null);
        setDraft(data ? { ...data } : null);
    };
    const saveEdit = async () => {
        if (!draft) return;
        setSaving(true);
        try {
            const res = await fetch("/api/foundation-program", {
                method: "PUT",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(draft),
            });
            const json = (await res.json()) as { ok?: boolean; data?: FoundationProgramData };
            if (res.ok && json.ok && json.data) {
                setData(json.data);
                setDraft({ ...json.data });
                setEditingSection(null);
            }
        } finally {
            setSaving(false);
        }
    };

    if (!view) return <div className="py-16 flex items-center justify-center"><Loader2 className="size-6 animate-spin text-[#254151]" /></div>;

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[400px] overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1759922378123-a1f4f1e39bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwY2xhc3Nyb29tJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc3MzE2MTY5MXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Students Studying"
                    className="absolute inset-0 w-full h-full object-cover"
                    fill
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#254151]/95 to-[#6096b4]/90"></div>
                <div className="relative h-full flex items-center justify-center text-white text-center px-4">
                    <div className="max-w-5xl">
                        {isAdmin && (
                            <div className="mb-4 flex justify-center gap-2">
                                {editingSection !== "hero" ? (
                                    <button onClick={() => startEdit("hero")} className="inline-flex items-center gap-2 rounded-lg bg-white/20 px-4 py-2">
                                        <Pencil className="size-4" />{isAr ? "تعديل الصفحة" : "Edit page"}
                                    </button>
                                ) : (
                                    <>
                                        <button onClick={cancelEdit} className="inline-flex items-center gap-2 rounded-lg bg-white/20 px-4 py-2">
                                            <X className="size-4" />{isAr ? "إلغاء" : "Cancel"}
                                        </button>
                                        <button onClick={saveEdit} disabled={saving} className="inline-flex items-center gap-2 rounded-lg bg-[#c2a772] px-4 py-2 text-white disabled:opacity-60">
                                            {saving ? <Loader2 className="size-4 animate-spin" /> : <Save className="size-4" />}{isAr ? "حفظ" : "Save"}
                                        </button>
                                    </>
                                )}
                            </div>
                        )}
                        <div className="flex justify-center mb-6">
                            <div className="bg-white/20 backdrop-blur-sm p-5 rounded-full">
                                <GraduationCap className="size-16 text-white" />
                            </div>
                        </div>
                        {editingSection !== "hero" ? (
                            <>
                                <h1 className="text-5xl font-bold mb-4">{isAr ? view.heroTitleAr : view.heroTitleEn}</h1>
                                <h2 className="text-2xl font-bold mb-6">{isAr ? view.heroTitleEn : view.heroTitleAr}</h2>
                                <p className="text-xl opacity-95">{isAr ? view.heroSubtitleAr : view.heroSubtitleEn}</p>
                            </>
                        ) : (
                            <div className="grid gap-2 max-w-3xl mx-auto">
                                <input className="rounded-md border border-white/40 bg-white/10 px-3 py-2 text-white" value={draft?.heroTitleAr || ""} onChange={(e) => updateDraft({ heroTitleAr: e.target.value })} dir="rtl" />
                                <input className="rounded-md border border-white/40 bg-white/10 px-3 py-2 text-white" value={draft?.heroTitleEn || ""} onChange={(e) => updateDraft({ heroTitleEn: e.target.value })} dir="ltr" />
                                <input className="rounded-md border border-white/40 bg-white/10 px-3 py-2 text-white" value={draft?.heroSubtitleAr || ""} onChange={(e) => updateDraft({ heroSubtitleAr: e.target.value })} dir="rtl" />
                                <input className="rounded-md border border-white/40 bg-white/10 px-3 py-2 text-white" value={draft?.heroSubtitleEn || ""} onChange={(e) => updateDraft({ heroSubtitleEn: e.target.value })} dir="ltr" />
                            </div>
                        )}
                    </div>
                </div>
            </section>
            {/* Main Content with Sidebar */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex gap-8 max-w-7xl mx-auto">
                        {/* Sidebar */}
                        <FoundSideBar setActiveSidebarItem={setActiveSidebarItem} activeSidebarItem={activeSidebarItem} />

                        {/* Main Content */}
                        <div className="flex-1">
                            {/* Overview Section */}
                            <div id="overview" className="mb-16">
                                <div className="bg-white rounded-lg shadow-xl p-10 border-2 border-blue-200">
                                    <div className="flex items-center justify-between gap-4 mb-6">
                                        <div className="flex items-center gap-4">
                                        <div className="bg-blue-600 text-white p-4 rounded-full">
                                            <BookOpen className="size-8" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-[#254151]">{isAr ? view.overviewTitleAr : view.overviewTitleEn}</h2>
                                        </div>
                                        {isAdmin && editingSection !== "overview" && (
                                            <button onClick={() => startEdit("overview")} className="inline-flex items-center gap-2 rounded-lg bg-[#254151] px-4 py-2 text-sm font-semibold text-white">
                                                <Pencil className="size-4" />{isAr ? "تعديل القسم" : "Edit Section"}
                                            </button>
                                        )}
                                    </div>
                                    {editingSection !== "overview" ? (
                                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                                            <p className="text-xl mb-4">{isAr ? view.overviewText1Ar : view.overviewText1En}</p>
                                            <p className="text-lg">{isAr ? view.overviewText2Ar : view.overviewText2En}</p>
                                        </div>
                                    ) : (
                                        <div className="grid gap-2">
                                            <input className="w-full rounded-md border px-3 py-2" value={draft?.overviewTitleAr || ""} onChange={(e) => updateDraft({ overviewTitleAr: e.target.value })} dir="rtl" />
                                            <input className="w-full rounded-md border px-3 py-2" value={draft?.overviewTitleEn || ""} onChange={(e) => updateDraft({ overviewTitleEn: e.target.value })} dir="ltr" />
                                            <textarea className="w-full min-h-[90px] rounded-md border px-3 py-2" value={draft?.overviewText1Ar || ""} onChange={(e) => updateDraft({ overviewText1Ar: e.target.value })} dir="rtl" />
                                            <textarea className="w-full min-h-[90px] rounded-md border px-3 py-2" value={draft?.overviewText1En || ""} onChange={(e) => updateDraft({ overviewText1En: e.target.value })} dir="ltr" />
                                            <textarea className="w-full min-h-[90px] rounded-md border px-3 py-2" value={draft?.overviewText2Ar || ""} onChange={(e) => updateDraft({ overviewText2Ar: e.target.value })} dir="rtl" />
                                            <textarea className="w-full min-h-[90px] rounded-md border px-3 py-2" value={draft?.overviewText2En || ""} onChange={(e) => updateDraft({ overviewText2En: e.target.value })} dir="ltr" />
                                            <div className="flex justify-end gap-2 pt-2">
                                                <button onClick={cancelEdit} className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700"><X className="size-4" />{isAr ? "إلغاء" : "Cancel"}</button>
                                                <button onClick={saveEdit} disabled={saving} className="inline-flex items-center gap-2 rounded-lg bg-[#c2a772] px-4 py-2 text-sm font-semibold text-white disabled:opacity-60">{saving ? <Loader2 className="size-4 animate-spin" /> : <Save className="size-4" />}{isAr ? "حفظ" : "Save"}</button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {/* Admission Requirements */}
                            <div id="admission" className="mb-16">
                                <div className="bg-white rounded-lg shadow-xl p-10 border-2 border-green-200">
                                    <div className="flex items-center justify-between gap-4 mb-6">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-green-600 text-white p-4 rounded-full">
                                                <ClipboardCheck className="size-8" />
                                            </div>
                                            <h2 className="text-3xl font-bold text-[#254151]">{isAr ? view.admissionTitleAr : view.admissionTitleEn}</h2>
                                        </div>
                                        {isAdmin && editingSection !== "admission" && (
                                            <button onClick={() => startEdit("admission")} className="inline-flex items-center gap-2 rounded-lg bg-[#254151] px-4 py-2 text-sm font-semibold text-white">
                                                <Pencil className="size-4" />{isAr ? "تعديل القسم" : "Edit Section"}
                                            </button>
                                        )}
                                    </div>
                                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg border-2 border-green-200">
                                        {editingSection !== "admission" ? (
                                            <p className="text-gray-700 text-lg leading-relaxed">{isAr ? view.admissionTextAr : view.admissionTextEn}</p>
                                        ) : (
                                            <div className="grid gap-2">
                                                <input className="w-full rounded-md border px-3 py-2" value={draft?.admissionTitleAr || ""} onChange={(e) => updateDraft({ admissionTitleAr: e.target.value })} dir="rtl" />
                                                <input className="w-full rounded-md border px-3 py-2" value={draft?.admissionTitleEn || ""} onChange={(e) => updateDraft({ admissionTitleEn: e.target.value })} dir="ltr" />
                                                <textarea className="w-full min-h-[120px] rounded-md border px-3 py-2" value={draft?.admissionTextAr || ""} onChange={(e) => updateDraft({ admissionTextAr: e.target.value })} dir="rtl" />
                                                <textarea className="w-full min-h-[120px] rounded-md border px-3 py-2" value={draft?.admissionTextEn || ""} onChange={(e) => updateDraft({ admissionTextEn: e.target.value })} dir="ltr" />
                                                <div className="flex justify-end gap-2 pt-2">
                                                    <button onClick={cancelEdit} className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700"><X className="size-4" />{isAr ? "إلغاء" : "Cancel"}</button>
                                                    <button onClick={saveEdit} disabled={saving} className="inline-flex items-center gap-2 rounded-lg bg-[#c2a772] px-4 py-2 text-sm font-semibold text-white disabled:opacity-60">{saving ? <Loader2 className="size-4 animate-spin" /> : <Save className="size-4" />}{isAr ? "حفظ" : "Save"}</button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            {/* Vision, Mission, Goals */}
                            <div id="vision" className="mb-16">
                                <div className="bg-white rounded-lg shadow-xl p-10 border-2 border-purple-200">
                                    <div className="flex items-center justify-between gap-4 mb-6">
                                        <div className="flex items-center gap-4">
                                        <div className="bg-purple-600 text-white p-4 rounded-full">
                                            <Target className="size-8" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-[#254151]">{isAr ? view.visionSectionTitleAr : view.visionSectionTitleEn}</h2>
                                        </div>
                                        {isAdmin && editingSection !== "vision" && (
                                            <button onClick={() => startEdit("vision")} className="inline-flex items-center gap-2 rounded-lg bg-[#254151] px-4 py-2 text-sm font-semibold text-white">
                                                <Pencil className="size-4" />{isAr ? "تعديل القسم" : "Edit Section"}
                                            </button>
                                        )}
                                    </div>

                                    {/* Vision */}
                                    <div className="mb-8">
                                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 border-2 border-blue-200">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="bg-blue-600 text-white size-12 rounded-full flex items-center justify-center">
                                                    <Lightbulb className="size-7" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-[#254151]">{isAr ? view.visionTitleAr : view.visionTitleEn}</h3>
                                            </div>
                                            {editingSection !== "vision" ? <p className="text-gray-700 text-lg leading-relaxed">{isAr ? view.visionTextAr : view.visionTextEn}</p> : (
                                                <div className="grid gap-2">
                                                    <textarea className="w-full min-h-[90px] rounded-md border px-3 py-2" value={draft?.visionTitleAr || ""} onChange={(e) => updateDraft({ visionTitleAr: e.target.value })} dir="rtl" />
                                                    <textarea className="w-full min-h-[90px] rounded-md border px-3 py-2" value={draft?.visionTitleEn || ""} onChange={(e) => updateDraft({ visionTitleEn: e.target.value })} dir="ltr" />
                                                    <textarea className="w-full min-h-[120px] rounded-md border px-3 py-2" value={draft?.visionTextAr || ""} onChange={(e) => updateDraft({ visionTextAr: e.target.value })} dir="rtl" />
                                                    <textarea className="w-full min-h-[120px] rounded-md border px-3 py-2" value={draft?.visionTextEn || ""} onChange={(e) => updateDraft({ visionTextEn: e.target.value })} dir="ltr" />
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Mission */}
                                    <div className="mb-8">
                                        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 border-2 border-green-200">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="bg-green-600 text-white size-12 rounded-full flex items-center justify-center">
                                                    <Target className="size-7" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-[#254151]">{isAr ? view.missionTitleAr : view.missionTitleEn}</h3>
                                            </div>
                                            {editingSection !== "vision" ? <p className="text-gray-700 text-lg leading-relaxed">{isAr ? view.missionTextAr : view.missionTextEn}</p> : (
                                                <div className="grid gap-2">
                                                    <textarea className="w-full min-h-[90px] rounded-md border px-3 py-2" value={draft?.missionTitleAr || ""} onChange={(e) => updateDraft({ missionTitleAr: e.target.value })} dir="rtl" />
                                                    <textarea className="w-full min-h-[90px] rounded-md border px-3 py-2" value={draft?.missionTitleEn || ""} onChange={(e) => updateDraft({ missionTitleEn: e.target.value })} dir="ltr" />
                                                    <textarea className="w-full min-h-[120px] rounded-md border px-3 py-2" value={draft?.missionTextAr || ""} onChange={(e) => updateDraft({ missionTextAr: e.target.value })} dir="rtl" />
                                                    <textarea className="w-full min-h-[120px] rounded-md border px-3 py-2" value={draft?.missionTextEn || ""} onChange={(e) => updateDraft({ missionTextEn: e.target.value })} dir="ltr" />
                                                    <div className="flex justify-end gap-2 pt-2">
                                                        <button onClick={cancelEdit} className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700"><X className="size-4" />{isAr ? "إلغاء" : "Cancel"}</button>
                                                        <button onClick={saveEdit} disabled={saving} className="inline-flex items-center gap-2 rounded-lg bg-[#c2a772] px-4 py-2 text-sm font-semibold text-white disabled:opacity-60">{saving ? <Loader2 className="size-4 animate-spin" /> : <Save className="size-4" />}{isAr ? "حفظ" : "Save"}</button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Continue with rest of the section... */}
                                </div>
                            </div>

                            {/* Study Plan */}
                            <FoundStudy
                                isAr={isAr}
                                isAdmin={isAdmin}
                                isEditing={editingSection === "study"}
                                saving={saving}
                                titleAr={view.studyTitleAr}
                                titleEn={view.studyTitleEn}
                                noteAr={view.studyNoteAr}
                                noteEn={view.studyNoteEn}
                                onStartEdit={() => startEdit("study")}
                                onCancelEdit={cancelEdit}
                                onSaveEdit={saveEdit}
                                onChangeTitleAr={(value) => updateDraft({ studyTitleAr: value })}
                                onChangeTitleEn={(value) => updateDraft({ studyTitleEn: value })}
                                onChangeNoteAr={(value) => updateDraft({ studyNoteAr: value })}
                                onChangeNoteEn={(value) => updateDraft({ studyNoteEn: value })}
                                level1Courses={view.level1Courses || []}
                                level2Courses={view.level2Courses || []}
                                onChangeLevel1Courses={(courses) => updateDraft({ level1Courses: courses })}
                                onChangeLevel2Courses={(courses) => updateDraft({ level2Courses: courses })}
                            />
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