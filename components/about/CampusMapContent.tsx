"use client"
import { Heart, Info, MapPin, Shield } from "lucide-react";
import Image from "next/image";

import { motion } from "framer-motion"

import campusMapImg from '@/public/assets/campusMapImg.webp';

export default function CampusMapContent() {
    const legendItems = [
        { icon: '🚰', label: 'خزان المياه', color: 'from-blue-500 to-blue-600' },
        { icon: '🚗', label: 'مواقف الطوارئ', color: 'from-red-500 to-red-600' },
        { icon: '🚶', label: 'مسار الإخلاء', color: 'from-purple-500 to-purple-600' },
        { icon: '🚑', label: 'مسار مركبات الطوارئ', color: 'from-orange-500 to-orange-600' },
        { icon: '🚪', label: 'مخارج الطوارئ', color: 'from-green-500 to-green-600' },
        { icon: '👥', label: 'نقاط التجمع', color: 'from-teal-500 to-teal-600' },
        { icon: '🔥', label: 'خيمات الحريق', color: 'from-red-600 to-red-700' },
        { icon: '⚡', label: 'غرف الكهرباء', color: 'from-yellow-500 to-yellow-600' },
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center gap-4 pb-6 border-b-2 border-gray-200">
                <div className="p-3 bg-gradient-to-br from-[#254151] to-[#2d4a5c] rounded-xl">
                    <MapPin className="size-8 text-white" />
                </div>
                <div>
                    <h2 className="text-4xl font-bold bg-gradient-to-l from-[#254151] to-[#2d4a5c] bg-clip-text text-transparent">
                        خارطة الحرم الجامعي
                    </h2>
                    <p className="text-gray-600 mt-1">Campus Map</p>
                </div>
            </div>

            {/* Introduction */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-blue-50 to-slate-50 p-6 rounded-2xl border border-blue-100"
            >
                <p className="text-gray-700 text-center leading-relaxed">
                    خريطة تفصيلية للحرم الجامعي توضح موقع المباني والمرافق ومواقف السيارات ومخارج الطوارئ ونقاط التجمع
                </p>
            </motion.div>

            {/* Campus Map Image */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
            >
                <div className="relative w-full h-[520px]">
                    <Image
                        fill
                        src={campusMapImg}
                        alt="خارطة الحرم الجامعي - كلية البريمي الجامعية"
                        sizes="100vw"
                        className="object-contain"
                    />
                </div>
            </motion.div>

            {/* Legend */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
                <div className="bg-gradient-to-r from-[#254151] to-[#6096b4] p-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <Info className="size-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">مفتاح الخريطة</h3>
                        <span className="text-blue-100 text-sm mr-auto">Map Legend</span>
                    </div>
                </div>
                <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {legendItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + index * 0.05 }}
                                className="flex items-center gap-3 p-4 bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl border border-gray-200 hover:shadow-md transition-all group"
                            >
                                <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center text-xl group-hover:scale-110 transition-transform`}>
                                    {item.icon}
                                </div>
                                <span className="text-gray-700 font-semibold text-sm">{item.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Safety Notice */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl border-2 border-orange-200"
            >
                <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                        <Shield className="size-7 text-white" />
                    </div>
                    <div className="flex-1">
                        <h4 className="text-xl font-bold text-orange-900 mb-2">تعليمات السلامة</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-orange-600 mt-1">•</span>
                                <span>يرجى التعرف على مواقع مخارج الطوارئ القريبة منك</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-orange-600 mt-1">•</span>
                                <span>في حالة الطوارئ، اتبع مسارات الإخلاء الموضحة باللون البنفسجي</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-orange-600 mt-1">•</span>
                                <span>تجمع عند نقاط التجمع المحددة في حالة الإخلاء</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-orange-600 mt-1">•</span>
                                <span>لا تستخدم المصاعد أثناء حالات الطوارئ</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
                <div className="bg-gradient-to-br from-[#254151] to-[#2d4a5c] p-6 rounded-2xl text-center">
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Shield className="size-7 text-white" />
                    </div>
                    <h5 className="text-white font-bold mb-2">الأمن والسلامة</h5>
                    <p className="text-blue-200 text-sm">للطوارئ: 9999</p>
                </div>
                <div className="bg-gradient-to-br from-[#6096b4] to-[#5085a3] p-6 rounded-2xl text-center">
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Heart className="size-7 text-white" />
                    </div>
                    <h5 className="text-white font-bold mb-2">العيادة الطبية</h5>
                    <p className="text-blue-100 text-sm">متوفرة طوال أيام العمل</p>
                </div>
                <div className="bg-gradient-to-br from-[#c2a772] to-[#b39662] p-6 rounded-2xl text-center">
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Info className="size-7 text-white" />
                    </div>
                    <h5 className="text-white font-bold mb-2">الاستعلامات</h5>
                    <p className="text-amber-100 text-sm">مكتب الاستقبال الرئيسي</p>
                </div>
            </motion.div>
        </div>
    );
}