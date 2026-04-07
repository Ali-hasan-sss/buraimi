"use client"
import Image from "next/image";

import heroBackgroundImg from '@/public/assets/e5066bb78bcc5febdd38697aa9400a49db729215.png';
import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react";

export default function AdmissionHeader() {
    return (
        <div className="relative bg-gradient-to-l from-[#254151] to-[#6096b4] text-white py-20 overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    fill
                    src={heroBackgroundImg}
                    alt="كلية البريمي الجامعية"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-[#254151]/90 via-[#254151]/80 to-[#2d4a5c]/90"></div>
            </div>

            <div className="relative container mx-auto px-4 z-10">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <GraduationCap className="size-16" />
                    </div>
                    <h1 className="text-5xl mb-4">القبول</h1>
                    <p className="text-2xl text-white/90">استكشاف إمكانيات التعليم في كلية البريمي الجامعية</p>
                </motion.div>
            </div>
        </div>
    )
}