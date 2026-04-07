"use client"
import { headMessage } from "@/types/department"
import { motion } from "framer-motion"
import { Mail, Phone, Users } from "lucide-react"
export default function HeadMessage(
    { message }: { message: headMessage }
) {
    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="bg-gradient-to-br from-white to-blue-50 p-10 border-2 border-[#c2a772]/20">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 rounded-md bg-gradient-to-br from-[#254151] to-[#6096b4] flex items-center justify-center">
                                <Users className="size-8 text-white " />
                            </div>
                            <div>
                                <h2 className="text-3xl text-[#254151]">رسالة رئيس القسم</h2>
                                <p className="text-[#6096b4]">
                                    {message.writer}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                            <div dangerouslySetInnerHTML={message.message} />
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-200">
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2 text-[#254151]">
                                    <Mail className="size-5" />
                                    <span>
                                        {message.mail}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 text-[#254151]">
                                    <Phone className="size-5" />
                                    <span>
                                        {message.phone}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}