"use client"

import { useState } from "react";

import { motion, AnimatePresence, type Variants } from "framer-motion"
import { BookOpen, ChevronDown, ExternalLink, FileText } from "lucide-react";
export default function PoliciesByDepartmentContent() {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (sectionId: string) => {
        setOpenSection(openSection === sectionId ? null : sectionId);
    };

    const departments = [
        {
            id: 'quality-dept',
            title: 'دائرة ضمان الجودة',
            titleEn: 'Quality Assurance Department',
            color: 'from-blue-600 to-cyan-600',
            bgColor: 'bg-blue-50',
            borderColor: 'border-blue-200',
            policies: [
                { id: 'pms', title: 'Policies Management System', link: '#' },
                { id: 'risk', title: 'Risk Management Policy', link: '#' },
                { id: 'comm', title: 'Communication Policy', link: '#' }
            ]
        },
        {
            id: 'academic',
            title: 'الشؤون الأكاديمية',
            titleEn: 'Academic Affairs',
            color: 'from-[#254151] to-[#6096b4]',
            bgColor: 'bg-slate-50',
            borderColor: 'border-slate-200',
            policies: [
                { id: 'ac01', title: 'Academic Staff Teaching Workload (AC01)', link: '#' },
                { id: 'ac02', title: 'Program Development and Review Policy (AC02)', link: '#' },
                { id: 'ac03', title: 'Academic Integrity and Honesty for Academic Staff final (AC03)', link: '#' },
                { id: 'ac04', title: 'Academic Integrity and Honesty for Students (AC04)', link: '#' },
                { id: 'ac05', title: 'Academic Staff Professional Development Policy (AC05)', link: '#' },
                { id: 'ac06', title: 'Blended Learning: Flexible Schedule for Working Students (AC06)', link: '#' },
                { id: 'ac07', title: 'Engagement with education providers Policy (AC07)', link: '#' },
                { id: 'ac08', title: 'Engagement with Professional Bodies Policy (AC08)', link: '#' },
                { id: 'ac09', title: 'Industry Engagement Policy (AC09)', link: '#' },
                { id: 'ac10', title: 'Community Engagement Policy (AC10)', link: '#' },
                { id: 'ac11', title: 'Teaching and Professional Development Policy (AC11)', link: '#' },
                { id: 'ac12', title: 'Coursework Research Components Policy (AC12)', link: '#' },
                { id: 'ac13', title: 'BUC Policy on Offering New Programs (AC13)', link: '#' },
                { id: 'ac14', title: 'Academic Advising Manual (AC14)', link: '#' },
                { id: 'ac15-1', title: 'Teaching and Research Integration Policy (AC15)', link: '#' },
                { id: 'ac15-2', title: 'Assessment Manual (AC15)', link: '#' }
            ]
        },
        {
            id: 'research',
            title: 'البحث العلمي',
            titleEn: 'Scientific Research',
            color: 'from-emerald-600 to-teal-600',
            bgColor: 'bg-emerald-50',
            borderColor: 'border-emerald-200',
            policies: [
                { id: 'sr01', title: 'Conference Participation Policy (SR01)', link: '#' },
                { id: 'sr02', title: 'Research Ethics Policy (SR02)', link: '#' },
                { id: 'sr03', title: 'Intellectual Property Policy (SR03)', link: '#' },
                { id: 'sr04', title: 'Research Project Support and Grant Policy (SR04)', link: '#' },
                { id: 'sr05', title: 'Research Reward Program Policy (SR05)', link: '#' },
                { id: 'sr06', title: 'Consultancy and Commercialization Policy (SR06)', link: '#' },
                { id: 'sr07', title: 'Artificial Intelligence Policy (SR07)', link: '#' }
            ]
        },
        {
            id: 'admission',
            title: 'دائرة القبول والتسجيل',
            titleEn: 'Admission and Registration',
            color: 'from-violet-600 to-purple-600',
            bgColor: 'bg-violet-50',
            borderColor: 'border-violet-200',
            policies: [
                { id: 'ar01', title: 'سياسة القبول والتسجيل للمراحل الجامعية (AR01)', link: '#' },
                { id: 'ar02', title: 'سياسة البعثات (AR02)', link: '#' },
                { id: 'ar03', title: 'سياسة معادلة المساقات (AR03)', link: '#' },
                { id: 'ar04', title: 'سياسة الجدول الدراسي والامتحانات (AR04)', link: '#' },
                { id: 'ar05', title: 'سياسة إدارة بيانات أداء الطلبة (AR05)', link: '#' },
                { id: 'ar06', title: 'سياسة امتحانات غير مكتمل (AR06)', link: '#' },
                { id: 'ar07', title: 'سياسة طلب مراجعة الدرجات (AR07)', link: '#' },
                { id: 'ar08', title: 'سياسة إدارة سجلات وبيانات الطلبة (AR08)', link: '#' }
            ]
        },
        {
            id: 'student-affairs',
            title: 'دائرة شؤون الطلبة',
            titleEn: 'Student Affairs',
            color: 'from-orange-600 to-amber-600',
            bgColor: 'bg-orange-50',
            borderColor: 'border-orange-200',
            policies: [
                { id: 'sa01', title: 'سياسة تسكين الطلبة (SA01)', link: '#' },
                { id: 'sa02', title: 'سياسة الأنشطة اللاصفية (SA02)', link: '#' },
                { id: 'sa04', title: 'سياسة الإرشاد النفسي (SA04)', link: '#' },
                { id: 'sa05', title: 'سياسة التظلمات الغير أكاديمية واقتراحات الطلبة (SA05)', link: '#' },
                { id: 'sa06', title: 'سياسات التوجيه الوظيفي وشؤون الخريجين (SA06)', link: '#' },
                { id: 'sa07', title: 'سياسة اشراك الخريجين (SA07)', link: '#' },
                { id: 'sa08', title: 'السياسة المالية والمنح والخصومات المقدمة للطلبة (SA08)', link: '#' },
                { id: 'sa09', title: 'سياسة جمع البيانات وقياس رضا الطلبة (SA09)', link: '#' }
            ]
        },
        {
            id: 'network-it',
            title: 'دائرة الشبكات ونظم المعلومات',
            titleEn: 'Network and Information Systems',
            color: 'from-indigo-600 to-blue-600',
            bgColor: 'bg-indigo-50',
            borderColor: 'border-indigo-200',
            policies: [
                { id: 'nis01', title: 'Hardware and Software Purchase and Upgrade Policy (NIS01)', link: '#' },
                { id: 'nis02', title: 'Asset Tracking Policy (NIS02)', link: '#' },
                { id: 'nis03', title: 'Educational Technology Management Policy (NIS03)', link: '#' },
                { id: 'nis04', title: 'Internet and Network resources Access Policy (NIS04)', link: '#' },
                { id: 'nis05', title: 'Data Privacy and Security Policy (NIS05)', link: '#' },
                { id: 'nis06', title: 'Data Life Policy (NIS06)', link: '#' }
            ]
        },
        {
            id: 'library',
            title: 'دائرة المكتبة',
            titleEn: 'Library Department',
            color: 'from-pink-600 to-rose-600',
            bgColor: 'bg-pink-50',
            borderColor: 'border-pink-200',
            policies: [
                { id: 'lb01', title: 'سياسة التزويد والفهرسة (LB01)', link: '#' },
                { id: 'lb02', title: 'سياسة إستخدام مرافق المكتبة (LB02)', link: '#' },
                { id: 'lb03', title: 'سياسة استخدام مصادر معلومات المكتبة (LB03)', link: '#' },
                { id: 'lb04', title: 'سياسة الإعارة المتبادلة بين المكتبات (LB04)', link: '#' },
                { id: 'lb05', title: 'سياسة الدعم الأكاديمي والثقافي (LB05)', link: '#' }
            ]
        },
        {
            id: 'hr',
            title: 'الموارد البشرية',
            titleEn: 'Human Resources',
            color: 'from-red-600 to-pink-600',
            bgColor: 'bg-red-50',
            borderColor: 'border-red-200',
            policies: [
                { id: 'hr01', title: 'Academic Staff Recruitment Policy (HR01)', link: '#' },
                { id: 'hr02', title: 'سياسة التعيين في الوظائف الإدارية (HR02)', link: '#' },
                { id: 'hr03', title: 'سياسة شغل الوظائف الإشرافية الإدارية (HR03)', link: '#' },
                { id: 'hr04', title: 'سياسة الحضور و الإنصراف و الإستئذان و العمل الإضافي (HR04)', link: '#' },
                { id: 'hr05', title: 'سياسة تعريف و توجيه الموظفين الجدد (HR05)', link: '#' },
                { id: 'hr06', title: 'سياسة عقد الاجتماعات في الدوائر الإدارية بالكلية (HR06)', link: '#' },
                { id: 'hr07', title: 'سياسة إيفاد الموظفين الأكاديميين والإداريين في مهمات عمل رسمية (HR07)', link: '#' },
                { id: 'hr08', title: 'Faculty Members Evaluation Policy (HR08)', link: '#' },
                { id: 'hr09', title: 'سياسة التطوير المهني لأعضاء الهيئة الإدارية (HR09)', link: '#' },
                { id: 'hr10', title: 'سياسة تقييم الأداء الوظيفي (HR10)', link: '#' },
                { id: 'hr11', title: 'سياسة رضا الموظفين والاحتفاظ بهم (HR11)', link: '#' },
                { id: 'hr12', title: 'سياسة التظلمات والشكاوى بالكلية (HR12)', link: '#' },
                { id: 'hr13', title: 'سياسة الحوافز لأعضاء الهيئة الأكاديمية و الإدارية (HR13)', link: '#' }
            ]
        },
        {
            id: 'admin',
            title: 'دائرة الشؤون الادارية',
            titleEn: 'Administrative Affairs',
            color: 'from-gray-600 to-slate-600',
            bgColor: 'bg-gray-50',
            borderColor: 'border-gray-200',
            policies: [
                { id: 'ad01', title: 'سياسة خدمات التغذية (AD01)', link: '#' },
                { id: 'ad02', title: 'سياسة خدمات النقل والمواصلات (AD02)', link: '#' }
            ]
        },
        {
            id: 'pr',
            title: 'دائرة العلاقات العامة والاعلام',
            titleEn: 'Public Relations and Media',
            color: 'from-cyan-600 to-blue-600',
            bgColor: 'bg-cyan-50',
            borderColor: 'border-cyan-200',
            policies: [
                { id: 'pr01', title: 'سياسة النشر والتسويق (PR01)', link: '#' }
            ]
        },
        {
            id: 'clinic',
            title: 'العيادة',
            titleEn: 'Clinic',
            color: 'from-[#6096b4] to-[#254151]',
            bgColor: 'bg-blue-50',
            borderColor: 'border-blue-200',
            policies: [
                { id: 'cl01', title: 'سياسة الخدمات الصحية (CL01)', link: '#' }
            ]
        }
    ];

    return (
        <div className="space-y-10">
            {/* Header */}
            <div className="flex items-center gap-4 pb-6 border-b-2 border-gray-200">
                <div className="p-3 bg-gradient-to-br from-[#254151] to-[#2d4a5c] rounded-xl">
                    <BookOpen className="size-8 text-white" />
                </div>
                <div>
                    <h2 className="text-4xl font-bold bg-gradient-to-l from-[#254151] to-[#2d4a5c] bg-clip-text text-transparent">
                        السياسات حسب الدوائر
                    </h2>
                    <p className="text-gray-600 mt-1">Policies by Departments</p>
                </div>
            </div>

            {/* Departments Accordion */}
            <div className="space-y-4">
                {departments.map((dept, idx) => (
                    <motion.div
                        key={dept.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 * idx }}
                        className="overflow-hidden"
                    >
                        {/* Department Header */}
                        <button
                            onClick={() => toggleSection(dept.id)}
                            className={`w-full ${dept.bgColor} ${dept.borderColor} border-2 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group`}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 bg-gradient-to-br ${dept.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <FileText className="size-6 text-white" />
                                    </div>
                                    <div className="text-right">
                                        <h3 className="font-bold text-xl text-[#254151]">{dept.title}</h3>
                                        <p className="text-sm text-gray-600">{dept.titleEn}</p>
                                        <span className="text-xs text-gray-500 mt-1 inline-block">
                                            {dept.policies.length} {dept.policies.length === 1 ? 'سياسة' : 'سياسات'}
                                        </span>
                                    </div>
                                </div>
                                <motion.div
                                    animate={{ rotate: openSection === dept.id ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className={`size-6 text-gray-600`} />
                                </motion.div>
                            </div>
                        </button>

                        {/* Policies List */}
                        <AnimatePresence>
                            {openSection === dept.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className={`${dept.bgColor} ${dept.borderColor} border-2 border-t-0 rounded-b-2xl p-6 space-y-3`}>
                                        {dept.policies.map((policy, policyIdx) => (
                                            <motion.a
                                                key={policy.id}
                                                href={policy.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.05 * policyIdx }}
                                                className="group/policy bg-white hover:bg-gray-50 p-4 rounded-xl border border-gray-200 hover:border-gray-300 flex items-center justify-between hover:shadow-md transition-all duration-200"
                                            >
                                                <div className="flex items-center gap-3 flex-1">
                                                    <div className={`w-10 h-10 bg-gradient-to-br ${dept.color} rounded-lg flex items-center justify-center shrink-0`}>
                                                        <FileText className="size-5 text-white" />
                                                    </div>
                                                    <span className="text-gray-800 font-medium">{policy.title}</span>
                                                </div>
                                                <ExternalLink className="size-5 text-gray-400 group-hover/policy:text-gray-600 group-hover/policy:translate-x-[-4px] transition-all duration-200 shrink-0 mr-3" />
                                            </motion.a>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}