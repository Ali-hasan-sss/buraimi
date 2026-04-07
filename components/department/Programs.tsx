"use client"
import { DepartmentData, DepartmentProgram } from "@/types/department"
import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import ProgramCard from "./ProgramCard"
import { use } from "react"

export default function Programs(
    { data }: { data: DepartmentData }
) {

    // const programs = use(data).programs
    const programs = data.programs
    return (
        <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-block px-6 py-2 bg-gradient-to-l from-[#254151] to-[#6096b4] text-white mb-6">
                        <GraduationCap className="size-5 inline-block ml-2" />
                        <span className="font-bold">البرامج الأكاديمية</span>
                    </div>
                    <h2 className="text-4xl text-[#254151] mb-4">برامج القسم</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
                    {programs.map((program, index) => (
                        <ProgramCard key={program.id} program={program}
                            index={index} />
                    ))}
                </div>


            </div>
        </div>

    )
}