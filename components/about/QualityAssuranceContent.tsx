"use client"
import { Award, CheckCircle2, Eye, Mail, Settings, Sparkles, Target, UserCheck } from "lucide-react";

import { motion } from "framer-motion"

export default function QualityAssuranceContent() {
    const objectives = [
        'نشر وتعزيز مفاهيم ومعايير ثقافة الجودة وعمليات ضمان الجودة والاعتماد بين أعضاء مجتمع الكلية',
        'دعم سعي الكلية لتحقيق رسالتها وأهدافها الإستراتيجية',
        'اقتراح السياسات والآليات التي تلبي معايير ومتطلبات الجودة',
        'متابعة تنفيذ السياسات والآليات ومراجعتها بشكل دوري',
        'تطبيق معايير الهيئة العمانية للاعتماد الأكاديمي وضمان جودة التعليم فيما يتعلق بالاعتماد المؤسسي والبرامجي',
        'وضع معايير الأداء وآليات التقييم',
        'تقديم الدعم والتوجيه لكافة الإدارات والأقسام في الكلية لمساعدتها على تحقيق معايير ومتطلبات الجودة',
        'تنفيذ التقييم الدوري والمستمر لأداء الكلية في التعليم والبحث والخدمات'
    ];

    return (
        <div className="space-y-10">
            <div className="flex items-center gap-4 pb-6 border-b-2 border-gray-200">
                <div className="p-3 bg-gradient-to-br from-[#254151] to-[#2d4a5c] rounded-xl">
                    <Award className="size-8 text-white" />
                </div>
                <div>
                    <h2 className="text-4xl font-bold bg-gradient-to-l from-[#254151] to-[#2d4a5c] bg-clip-text text-transparent">
                        دائرة ضمان الجودة
                    </h2>
                </div>
            </div>

            {/* Vision and Mission Cards */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* Vision */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="group"
                >
                    <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50/30 p-8 rounded-2xl border border-blue-200 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                        <div className="flex items-start gap-5">
                            <div className="relative shrink-0">
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#254151] to-[#6096b4] rounded-2xl blur-md opacity-40 group-hover:opacity-70 transition duration-300"></div>
                                <div className="relative w-20 h-20 bg-gradient-to-br from-[#254151] to-[#6096b4] rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                    <Eye className="size-10 text-white" />
                                </div>
                            </div>
                            <div className="flex-1 space-y-4">
                                <h3 className="text-2xl font-bold text-[#254151]">رؤية دائرة ضمان الجودة</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    أن نكون من بين مؤسسات التعليم العالي الرائدة في سلطنة عمان في تطبيق معايير الجودة
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Mission */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="group"
                >
                    <div className="bg-gradient-to-br from-amber-50 via-white to-orange-50/30 p-8 rounded-2xl border border-amber-200 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                        <div className="flex items-start gap-5">
                            <div className="relative shrink-0">
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#c2a772] to-[#6096b4] rounded-2xl blur-md opacity-40 group-hover:opacity-70 transition duration-300"></div>
                                <div className="relative w-20 h-20 bg-gradient-to-br from-[#c2a772] to-[#6096b4] rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                    <Target className="size-10 text-white" />
                                </div>
                            </div>
                            <div className="flex-1 space-y-4">
                                <h3 className="text-2xl font-bold text-[#254151]">رسالة دائرة ضمان الجودة</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    تطبيق نظام فعال لإدارة الجودة يهدف إلى نشر وتعزيز ثقافة الجودة في جميع مراحل التدريس والتعلم والأنشطة اللامنهجية والبحث والخدمات المجتمعية
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Objectives Section */}
            <div className="space-y-6">
                <div className="text-center space-y-3">
                    <div className="flex items-center justify-center gap-3">
                        <div className="h-1 w-16 bg-gradient-to-r from-[#254151] to-[#6096b4] rounded-full"></div>
                        <h3 className="text-3xl font-bold text-[#254151]">أهداف دائرة ضمان الجودة</h3>
                        <div className="h-1 w-16 bg-gradient-to-l from-[#6096b4] to-[#c2a772] rounded-full"></div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden"
                >
                    <div className="divide-y divide-gray-100">
                        {objectives.map((objective, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + idx * 0.05 }}
                                className="p-6 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-amber-50/30 transition-all duration-300 group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="shrink-0 mt-1">
                                        <div className="w-10 h-10 bg-gradient-to-br from-[#254151] to-[#6096b4] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <CheckCircle2 className="size-5 text-white" />
                                        </div>
                                    </div>
                                    <p className="flex-1 text-gray-700 leading-relaxed pt-1">{objective}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Quality Management System */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="space-y-6"
            >
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-[#6096b4] to-[#7aa5be] rounded-xl">
                        <Settings className="size-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#254151]">نظام إدارة الجودة</h3>
                </div>

                <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 p-8 rounded-2xl border border-gray-200 shadow-lg">
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-5">
                        <p>
                            تعتمد كلية البريمي الجامعية نظام فعال لإدارة الجودة والذي يدعم حسن سير مهام العمل بطريقة عالية الجودة مع مراعاة الاحتياجات المختلفة لجميع أصحاب القرار. تعتمد الإدارة الاستراتيجية والتشغيلية للكلية على التحليل المستمر للملاحظات والتقييمات.
                        </p>
                        <p>
                            من خلال نظام إدارة الجودة الذي يعتمد على التنمية المستدامة، تسعى كلية البريمي الجامعية إلى ضمان معايير الجودة في برامجها التعليمية وأنشطتها البحثية وخدمات المجتمع المحلي بطريقة تمكن الكلية من المساهمة في خدمة المجتمع.
                        </p>
                        <div className="bg-gradient-to-r from-[#254151]/5 to-[#6096b4]/5 p-6 rounded-xl border-r-4 border-[#6096b4]">
                            <p className="font-bold text-[#254151] mb-3 flex items-center gap-2">
                                <Sparkles className="size-5" />
                                الهدف الأساسي
                            </p>
                            <p>
                                الهدف الأساسي لنظام إدارة الجودة في كلية البريمي الجامعية هو المساعدة في إنشاء إجراءات قياسية وممارسات مشتركة من أجل نشر أفضل الممارسات ودعم تقدم التحسين الدائم للتعلم والبحث والمشاركة المجتمعية.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Director Info */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="bg-gradient-to-r from-[#254151] via-[#2d4a5c] to-[#6096b4] p-8 rounded-2xl shadow-xl"
            >
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                        <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm shrink-0">
                            <UserCheck className="size-10 text-white" />
                        </div>
                        <div className="text-center md:text-right">
                            <h4 className="text-2xl font-bold text-white mb-1">أ. يامن دريدي</h4>
                            <p className="text-white/80 mb-3">مدير دائرة ضمان الجودة</p>
                            <a
                                href="mailto:yamen@buc.edu.om"
                                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20"
                            >
                                <Mail className="size-4" />
                                <span>yamen@buc.edu.om</span>
                            </a>
                        </div>
                    </div>

                    <div className="hidden md:block w-64 h-24 bg-white/10 rounded-xl backdrop-blur-sm overflow-hidden" />
                </div>
            </motion.div>
        </div>
    );
}