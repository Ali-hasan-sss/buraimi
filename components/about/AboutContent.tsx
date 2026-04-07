"use client"
import { Eye, MapPin, Target, Users } from "lucide-react";

import { motion } from "framer-motion"
import { aboutBUC } from "@/staticData/about";
import { useLocale } from "next-intl";
import { useTranslations } from "use-intl";

const about = aboutBUC
export default function AboutContent() {
    const quickLinks = [
        {
            id: 'why-buc',
            title: 'لماذا كلية البريمي الجامعية؟',
            icon: Target,
            color: '#6096b4'
        },
        {
            id: 'leadership',
            title: 'قيادتنا',
            icon: Users,
            color: '#6096b4'
        },
        {
            id: 'vision-values',
            title: 'القيم، الرؤية، الاستراتيجية',
            icon: Eye,
            color: '#6096b4'
        },
        {
            id: 'campus-visit',
            title: 'زيارة الحرم الجامعي',
            icon: MapPin,
            color: '#6096b4'
        },
    ];


    const locale = useLocale()
    const t = useTranslations("general")
    return (
        <div className="space-y-0 max-w-full overflow-x-hidden">
            {/* Main Content Section */}
            <div className="grid lg:grid-cols-[1fr,380px] gap-12 max-w-full">
                {/* Right Side - Main Content */}
                <div className="space-y-8 order-2 lg:order-1 min-w-0">
                    {/* Page Title */}
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold text-[#254151] mb-3 leading-tight">
                            {t("head_title_about")}
                        </h1>

                        {/* White Underline */}
                        <div className="h-1 w-32 bg-white rounded-full mb-8"></div>

                        {/* Main Description */}
                        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                            {
                                about.map(
                                    (el, idx) => (<p key={idx}>{locale === 'ar' ? el.textAr : el.textEn}</p>)
                                )
                            }
                        </div>
                    </div>

                </div>

                {/* Left Side - Quick Links */}
                <div className="order-1 lg:order-2 max-w-full min-w-0">
                    <div className="lg:sticky lg:top-24 space-y-4 max-w-full">
                        {quickLinks.map((link, index) => (
                            <motion.div
                                key={link.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <button className=" w-full bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-[#6096b4] rounded-xl p-5 transition-all duration-300 shadow-sm hover:shadow-lg">
                                    <div className="flex items-center gap-4 w-full">
                                        {/* Icon Circle */}
                                        <div
                                            className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                                            style={{ backgroundColor: link.color }}
                                        >
                                            <link.icon className="size-6 text-white" />
                                        </div>

                                        {/* Text */}
                                        <span className="text-right font-bold text-gray-800 group-hover:text-[#254151] transition-colors text-base">
                                            {link.title}
                                        </span>
                                    </div>
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}