"use client"

import { Award, Target } from "lucide-react";

import { motion, type Variants } from "framer-motion"
import { Graduate_Attributes } from "@/staticData/about";
import { useLocale, useTranslations } from "next-intl";

export default function GraduateAttributesContent() {
    const attributes = Graduate_Attributes

    const locale = useLocale()
    const isRtl = locale == "ar" ? true : false

    const t = useTranslations("about")
    return (
        <div className="space-y-10 max-w-full overflow-x-hidden">
            <div className="flex items-center gap-4 pb-6 border-b-2 border-gray-200 min-w-0">
                <div className="p-3 bg-gradient-to-br from-[#254151] to-[#2d4a5c] rounded-xl">
                    <Award className="size-8 text-white" />
                </div>
                <div>
                    <h2 className="text-4xl font-bold bg-gradient-to-l from-[#254151] to-[#2d4a5c] bg-clip-text text-transparent">
                        {isRtl ? attributes.titleAr : attributes.titleEn}
                    </h2>
                </div>
            </div>

            {/* Introduction Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-blue-50 via-white to-amber-50/30 md:p-8 p-3 rounded-2xl border border-gray-200 shadow-lg"
            >
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                    {
                        isRtl ? attributes.descriptionAr : attributes.descriptionEn
                    }
                </div>
            </motion.div>

            {/* Attributes Title */}
            <div className="text-center space-y-3">
                <div className="flex flex-wrap items-center justify-center gap-3 min-w-0">
                    <div className="h-1 w-20 bg-gradient-to-r from-[#254151] to-[#6096b4] rounded-full"></div>
                    <h3 className="text-3xl font-bold text-[#254151]">يمكن تحديد سمات خريجي BUC على النحو التالي</h3>
                    <div className="h-1 w-20 bg-gradient-to-l from-[#6096b4] to-[#c2a772] rounded-full"></div>
                </div>
            </div>

            {/* Attributes Grid */}
            <div className="grid md:grid-cols-2 gap-6 min-w-0">
                {attributes.attributes.map((attr, idx) => {
                    const title = isRtl ? attr.titleAr : attr.titleEn
                    const description = isRtl ? attr.descriptionAr : attr.descriptionEn
                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + idx * 0.1 }}
                            className="group"
                        >
                            <div className={`bg-gradient-to-br  md:p-6 p-3 rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 h-full`}>
                                <div className="flex items-start gap-5 min-w-0">
                                    {/* Icon */}
                                    <div className="relative shrink-0">

                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 space-y-3 min-w-0">
                                        <h4 className="text-xl font-bold text-[#254151] leading-tight">{title}</h4>
                                        <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Vision 2040 Footer */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="bg-gradient-to-r from-[#254151] via-[#2d4a5c] to-[#6096b4] md:p-8 p-3 rounded-2xl shadow-xl text-center"
            >
                <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Target className="size-8 text-white" />
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                    {t("oman_v")}
                </h3>
                <p className="text-white/90 max-w-3xl mx-auto leading-relaxed">
                    {t("Oman_vision")}  </p>
            </motion.div>
        </div>
    );
}