
"use client"
import { Award, CheckCircle2, FileText, Shield, Target, UserCheck, Users } from "lucide-react";

import { motion, type Variants } from "framer-motion"
import { VisionAndMission } from "@/staticData/about";
import { useLocale, useTranslations } from "next-intl";

const data = VisionAndMission
export default function VisionMissionContent() {
    const locale = useLocale()
    const isRtl = locale == "ar" ? true : false
    const t = useTranslations("about")
    return (
        <div className="space-y-8 max-w-full overflow-x-hidden">
            <div className="flex items-center gap-4 pb-6 border-b-2 border-gray-200 min-w-0">
                <div className="p-3 bg-gradient-to-br from-[#254151] to-[#2d4a5c] rounded-xl">
                    <Target className="size-8 text-white" />
                </div>
                <div>
                    <h2 className="text-4xl font-bold bg-gradient-to-l from-[#254151] to-[#2d4a5c] bg-clip-text text-transparent">
                        الرؤية والرسالة والأهداف
                    </h2>
                </div>
            </div>

            {/* الرؤية */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-[#254151] to-[#2d4a5c] md:p-8 p-3 rounded-2xl shadow-xl"
            >
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                        <Target className="size-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">
                        {t("vision")}
                    </h3>
                </div>
                <div className="h-1 w-20 bg-[#c2a772] rounded-full mb-6"></div>
                <p className="text-white/90 text-lg leading-relaxed">
                    {isRtl ? data.visionAr : data.visionEn}
                </p>
            </motion.div>

            {/* الرسالة */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-[#6096b4] to-[#7aa5be] md:p-8 p-3 rounded-2xl shadow-xl"
            >
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                        <FileText className="size-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">
                        {t("mission")}
                    </h3>
                </div>
                <div className="h-1 w-20 bg-[#c2a772] rounded-full mb-6"></div>
                <p className="text-white/90 text-lg leading-relaxed">
                    {isRtl ? data.missionAr : data.missionEn}
                </p>
            </motion.div>

            {/* القيم */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-blue-50 to-amber-50/30 md:p-8 p-3 rounded-2xl border border-blue-100/50 shadow-sm"
            >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-[#c2a772]/30">
                    <div className="p-2 bg-gradient-to-br from-[#254151] to-[#2d4a5c] rounded-lg">
                        <Award className="size-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#254151]">
                        {t("values")}
                    </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6 min-w-0">
                    {/* الولاء */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white md:p-6 p-3 rounded-xl border-r-4 border-[#254151] shadow-md hover:shadow-xl transition-all duration-300"
                    >
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-gradient-to-br from-[#254151] to-[#2d4a5c] rounded-lg shrink-0 mt-1">
                                <Shield className="size-5 text-white" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-[#254151] mb-2">
                                    {t("loyalty")}
                                </h4>
                                <p className="text-gray-700 leading-relaxed">
                                    {isRtl ? data.Values.loyaltyAr : data.Values.loyaltyEn}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* الابتكار */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white md:p-6 p-3 rounded-xl border-r-4 border-[#6096b4] shadow-md hover:shadow-xl transition-all duration-300"
                    >
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-gradient-to-br from-[#6096b4] to-[#7aa5be] rounded-lg shrink-0 mt-1">
                                <Award className="size-5 text-white" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-[#254151] mb-2">
                                    {t("innovation")}
                                </h4>
                                <p className="text-gray-700 leading-relaxed">
                                    {isRtl ? data.Values.innovationAr : data.Values.innovationEn} </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* التميز */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white md:p-6 p-3 rounded-xl border-r-4 border-[#c2a772] shadow-md hover:shadow-xl transition-all duration-300"
                    >
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-gradient-to-br from-[#c2a772] to-[#d4b883] rounded-lg shrink-0 mt-1">
                                <Target className="size-5 text-white" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-[#254151] mb-2">
                                    {t("excellence")}
                                </h4>
                                <p className="text-gray-700 leading-relaxed">
                                    {isRtl ? data.Values.excellenceAr : data.Values.excellenceEn}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* المساواة */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white md:p-6 p-3 rounded-xl border-r-4 border-[#254151] shadow-md hover:shadow-xl transition-all duration-300"
                    >
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-gradient-to-br from-[#254151] to-[#2d4a5c] rounded-lg shrink-0 mt-1">
                                <Users className="size-5 text-white" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-[#254151] mb-2">
                                    {t("equity")}
                                </h4>
                                <p className="text-gray-700 leading-relaxed">

                                    {isRtl ? data.Values.EquitlyAr : data.Values.EquitlyEn}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* الاستدامة */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white md:p-6 p-3 rounded-xl border-r-4 border-[#6096b4] shadow-md hover:shadow-xl transition-all duration-300"
                    >
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-gradient-to-br from-[#6096b4] to-[#7aa5be] rounded-lg shrink-0 mt-1">
                                <CheckCircle2 className="size-5 text-white" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-[#254151] mb-2">
                                    {t("sustainability")}
                                </h4>
                                <p className="text-gray-700 leading-relaxed">

                                    {isRtl ? data.Values.sustainbitiltyAr : data.Values.sustainbitiltyEn}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* النزاهة */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white md:p-6 p-3 rounded-xl border-r-4 border-[#c2a772] shadow-md hover:shadow-xl transition-all duration-300"
                    >
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-gradient-to-br from-[#c2a772] to-[#d4b883] rounded-lg shrink-0 mt-1">
                                <Shield className="size-5 text-white" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-[#254151] mb-2">
                                    {t("integrity")}
                                </h4>
                                <p className="text-gray-700 leading-relaxed">

                                    {isRtl ? data.Values.integrtiyAr : data.Values.integrtiyEn}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* التعاون */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white md:p-6 p-3 rounded-xl border-r-4 border-[#254151] shadow-md hover:shadow-xl transition-all duration-300 md:col-span-2"
                    >
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-gradient-to-br from-[#254151] to-[#2d4a5c] rounded-lg shrink-0 mt-1">
                                <UserCheck className="size-5 text-white" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-[#254151] mb-2">
                                    {t('collaboration')}
                                </h4>
                                <p className="text-gray-700 leading-relaxed">

                                    {isRtl ? data.Values.collaborationAr : data.Values.collaborationEn}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}