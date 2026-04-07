"use client"

import { CheckCircle2, Eye, GraduationCap, Heart, Shield, Target, Users, UsersRound } from "lucide-react";

import { motion, type Variants } from "framer-motion"

export default function SafetySecurityContent() {
    const objectives = [
        'تعزيز ثقافة الصحة والسلامة في كلية البريمي الجامعية',
        'ضمان أن جميع موظفي وطلاب كلية البريمي الجامعية على دراية جيدة بإجراءات وبروتوكولات الصحة والسلامة ويمكنهم أداء واجباتهم بأمان',
        'منع الحوادث وتقليل الإصابات والأمراض من خلال تحديد المخاطر المحتملة والتخفيف من حدتها',
        'ضمان الامتثال للوائح الصحة والسلامة',
        'إقرار المسؤولية المتبادلة عن الصحة والسلامة بين جميع منتسبي كلية البريمي الجامعية',
        'حماية البيئة من خلال الإدارة الفعالة للنفايات',
    ];

    return (
        <div className="space-y-10">
            {/* Header */}
            <div className="flex items-center gap-4 pb-6 border-b-2 border-gray-200">
                <div className="p-3 bg-gradient-to-br from-[#254151] to-[#2d4a5c] rounded-xl">
                    <Shield className="size-8 text-white" />
                </div>
                <div>
                    <h2 className="text-4xl font-bold bg-gradient-to-l from-[#254151] to-[#2d4a5c] bg-clip-text text-transparent">
                        الأمن والسلامة
                    </h2>
                    <p className="text-gray-600 mt-1">Health and Safety</p>
                </div>
            </div>

            {/* Introduction */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-2xl border border-blue-100"
            >
                <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 bg-gradient-to-br from-[#6096b4] to-[#254151] rounded-xl flex items-center justify-center">
                        <Heart className="size-6 text-white" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-[#254151] mb-4">الصحة والسلامة</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            تلتزم كلية البريمي الجامعية بالحفاظ على بيئة صحية وآمنة لجميع الطلاب والموظفين والزوار. يجب على الموظفين والطلاب والزوار الالتزام بمسؤولية حماية وتعزيز سلامة وصحة أنفسهم والآخرين، وممارسة أنشطتهم بطريقة مصممة لمنع الحوادث وتقليل مخاطر الإصابة والأذى.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            يهدف نظام إدارة الصحة والسلامة إلى إنشاء إطار لثقافة وممارسات الصحة والسلامة داخل مباني المؤسسة. إن لجنة الصحة والسلامة في كلية البريمي الجامعية هي اللجنة المسؤولة عن إصدار إجراءات وبروتوكولات السلامة والصحة. يجب توفير قياس متسق لحوادث السلامة، لتحسين الأداء.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Objectives */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
                <div className="bg-gradient-to-r from-[#254151] to-[#6096b4] p-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <Target className="size-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">الأهداف</h3>
                    </div>
                </div>
                <div className="p-8">
                    <div className="grid gap-4">
                        {objectives.map((objective, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + index * 0.05 }}
                                className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl border border-blue-100 hover:shadow-md transition-shadow"
                            >
                                <div className="shrink-0 w-8 h-8 bg-gradient-to-br from-[#c2a772] to-[#b39662] rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">{index + 1}</span>
                                </div>
                                <p className="text-gray-700 leading-relaxed flex-1 pt-1">{objective}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Responsibilities */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
            >
                <div className="flex items-center gap-3 pb-4 border-b-2 border-[#6096b4]">
                    <UsersRound className="size-7 text-[#254151]" />
                    <h3 className="text-3xl font-bold text-[#254151]">المسؤوليات</h3>
                </div>

                {/* Committee Responsibilities */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#6096b4] to-[#5085a3] p-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                <Users className="size-6 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-white">مسؤوليات لجنة الصحة والسلامة في كلية البريمي الجامعية</h4>
                        </div>
                    </div>
                    <div className="p-8">
                        <p className="text-gray-700 leading-relaxed">
                            تتحمل اللجنة العليا للخدمات الصحية المسؤولية الأساسية عن الحفاظ على بيئة عمل صحية وآمنة داخل منطقة مسؤوليتها، من خلال مراقبة وممارسة السيطرة على موظفيها. تتحمل اللجنة مسؤولية تطوير وتنفيذ إجراءات الصحة والسلامة والتدريب، وتوجيه انتباه القيادة إلى أي مخاطر تتطلب التقييم والاستجابة على مستوى الكلية، وتقييم إحصائيات الإصابات والحوادث لاقتراح الطرق التي يمكن من خلالها تحسين الإجراءات.
                        </p>
                    </div>
                </div>

                {/* Supervisors Responsibilities */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#c2a772] to-[#b39662] p-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                <Eye className="size-6 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-white">مسؤوليات المشرفين</h4>
                        </div>
                    </div>
                    <div className="p-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            يتحمل المشرفون الذين لديهم إشراف مباشر على أنشطة الكلية وموظفيها مسؤولية محددة لتوفير الصحة والسلامة لأولئك الخاضعين للإشراف. ويجب أن يظلوا على علم تام بقواعد الصحة والسلامة وكيفية تطبيقها على وجه التحديد في مجالات مسؤوليتهم.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            يتحمل المشرفون أيضاً مسؤولية مباشرة لضمان توفير معدات السلامة والصحة المطلوبة وصيانتها واستخدامها بشكل صحيح.
                        </p>
                    </div>
                </div>

                {/* Staff & Students Responsibilities */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#254151] to-[#2d4a5c] p-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                <GraduationCap className="size-6 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-white">مسؤوليات الموظفين والطلاب</h4>
                        </div>
                    </div>
                    <div className="p-8">
                        <p className="text-gray-700 leading-relaxed">
                            يتحمل الموظفون والطلاب مسؤولية محددة عن الامتثال لمعايير وإجراءات وقوانين الصحة والسلامة المعمول بها، والتعرف على المخاطر المحتملة المرتبطة بعملهم، وارتداء معدات الحماية بشكل صحيح والإبلاغ عن جميع الظروف والممارسات والمعدات غير الآمنة.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Safety Icons Grid */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
                <div className="bg-gradient-to-br from-[#254151] to-[#2d4a5c] p-6 rounded-2xl text-center group hover:scale-105 transition-transform">
                    <Shield className="size-12 text-white mx-auto mb-3" />
                    <div className="text-white font-bold">حماية شاملة</div>
                </div>
                <div className="bg-gradient-to-br from-[#6096b4] to-[#5085a3] p-6 rounded-2xl text-center group hover:scale-105 transition-transform">
                    <Heart className="size-12 text-white mx-auto mb-3" />
                    <div className="text-white font-bold">بيئة صحية</div>
                </div>
                <div className="bg-gradient-to-br from-[#c2a772] to-[#b39662] p-6 rounded-2xl text-center group hover:scale-105 transition-transform">
                    <CheckCircle2 className="size-12 text-white mx-auto mb-3" />
                    <div className="text-white font-bold">الامتثال الكامل</div>
                </div>
                <div className="bg-gradient-to-br from-[#254151] to-[#6096b4] p-6 rounded-2xl text-center group hover:scale-105 transition-transform">
                    <Users className="size-12 text-white mx-auto mb-3" />
                    <div className="text-white font-bold">مسؤولية مشتركة</div>
                </div>
            </motion.div>
        </div>
    );
}
