"use client"
import { Mail, Phone, Users } from "lucide-react";

import { motion } from "framer-motion"
import { DepartmentFacultyMember } from "@/types/department";

export default function FacultyMember(
    { facultyMembers }: { facultyMembers: DepartmentFacultyMember[] }
) {
    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-block px-6 py-2 bg-gradient-to-l from-[#c2a772] to-[#254151] text-white mb-6">
                        <Users className="size-5 inline-block ml-2" />
                        <span className="font-bold">أعضاء الهيئة التدريسية</span>
                    </div>
                    <h2 className="text-4xl text-[#254151] mb-4">الكادر الأكاديمي</h2>
                    <p className="text-xl text-gray-600">نخبة من الأساتذة المتخصصين في اللغة الإنجليزية والترجمة</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {facultyMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-white to-blue-50 p-6 border border-[#c2a772]/20 hover:border-[#6096b4] transition-all"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#254151] to-[#6096b4] flex items-center justify-center flex-shrink-0">
                                    <Users className="size-7 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg text-[#254151] mb-1 truncate">{member.name}</h3>
                                    <p className="text-sm text-[#6096b4] mb-1">{member.title}</p>
                                    {member.position && <p className="text-sm text-gray-600">{member.position}</p>}
                                </div>
                            </div>

                            <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2 text-gray-700">
                                    <Mail className="size-4 text-[#c2a772] flex-shrink-0" />
                                    <a href={`mailto:${member.email}`} className="hover:text-[#6096b4] transition-colors truncate">
                                        {member.email}
                                    </a>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <Phone className="size-4 text-[#c2a772] flex-shrink-0" />
                                    <span className="truncate">{member.phone}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>

    )
}