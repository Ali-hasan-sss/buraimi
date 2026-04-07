"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileText, Mail } from "lucide-react"

export default function DepartmentCTA() {
    return (

        <div className="py-20 bg-gradient-to-l from-[#254151] to-[#6096b4] text-white">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl mb-6">هل تريد معرفة المزيد عن القسم</h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        تواصل معنا للحصول على مزيد من المعلومات حول البرامج الأكاديمية ومتطلبات القبول
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <Button size="lg" className="bg-white text-[#254151] hover:bg-gray-100 px-10 py-6 text-lg">
                            <Mail className="size-6 ml-2" />
                            اتصل بنا
                        </Button>
                        <Button size="lg" variant="outline" className="border-2 bg-transparent border-white text-white hover:bg-white hover:text-[#254151] px-10 py-6 text-lg">
                            <FileText className="size-6 ml-2" />
                            دليل الطالب
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>

    )
}