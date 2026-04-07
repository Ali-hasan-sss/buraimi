"use client"

import orgStructureImg from '@/public/assets/69f7e84c76557c76b4de31e83615bf97bc78eef3.png';
import { motion, type Variants } from "framer-motion"
import { Building2, Network } from "lucide-react";
import Image from "next/image";

export default function OrganizationalStructureContent() {
    return (
        <div className="space-y-10">
            {/* Header */}
            <div className="flex items-center gap-4 pb-6 border-b-2 border-gray-200">
                <div className="p-3 bg-gradient-to-br from-[#254151] to-[#2d4a5c] rounded-xl">
                    <Network className="size-8 text-white" />
                </div>
                <div>
                    <h2 className="text-4xl font-bold bg-gradient-to-l from-[#254151] to-[#2d4a5c] bg-clip-text text-transparent">
                        الهيكل التنظيمي
                    </h2>
                    <p className="text-gray-600 mt-1">BUC Organizational Structure</p>
                </div>
            </div>

            {/* Organizational Chart Image - Full Width */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="-mx-8 md:-mx-12 lg:-mx-16"
            >
                <div className="bg-white shadow-2xl overflow-hidden">
                    <div className="p-6 bg-gradient-to-r from-[#254151] to-[#6096b4]">
                        <h3 className="text-2xl font-bold text-white text-center">
                            الهيكل التنظيمي لكلية البريمي الجامعية
                        </h3>
                    </div>
                    <div className="bg-white md:p-4 p-2 w-[90%] mx-auto md:p-8 lg:p-12">
                        <Image
                            src={orgStructureImg}
                            alt="الهيكل التنظيمي لكلية البريمي الجامعية - BUC Organizational Structure"
                            className="max-w-[90%] h-auto rounded-md"
                        />
                    </div>
                </div>
            </motion.div>

            {/* Description Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-blue-50 to-slate-50 md:p-8 p-2 rounded-2xl border border-blue-100"
            >
                <div className="flex items-start gap-4">
                    <div className="shrink-0">
                        <div className="md:flex hidden w-12 h-12 bg-gradient-to-br from-[#254151] to-[#6096b4] rounded-xl  items-center justify-center">
                            <Building2 className="size-6 text-white" />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-[#254151] mb-3 w-full flex gap-3 text-start">
                            <span className=' md:hidden flex  bg-gradient-to-br from-[#254151] to-[#6096b4] rounded-xl  items-center justify-center w-fit p-3'>
                                <Building2 className="size-6 text-white" />
                            </span>
                            <span>
                                عن الهيكل التنظيمي
                            </span>
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                            يوضح الهيكل التنظيمي لكلية البريمي الجامعية التسلسل الإداري والأكاديمي للمؤسسة، بدءاً من مجلس الأمناء ومجلس الإدارة،
                            مروراً بالعمادة وصولاً إلى مختلف الدوائر والأقسام الأكاديمية والإدارية. يهدف هذا الهيكل إلى ضمان الحوكمة الفعالة
                            والتنسيق بين جميع الوحدات التنظيمية لتحقيق رؤية الكلية ورسالتها الأكاديمية.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
