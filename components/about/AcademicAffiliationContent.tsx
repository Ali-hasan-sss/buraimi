"use client"

import { motion, type Variants } from "framer-motion"
import { Award, CheckCircle2, Link2, MapPin } from "lucide-react";
import Image from "next/image";

export default function AcademicAffiliationContent() {

    const universities = [
        {
            name: 'جامعة عين شمس',
            country: 'جمهورية مصر العربية',
            image: 'https://images.unsplash.com/photo-1631599143424-5bc234fbebf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY3NDA4MzE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            color: 'from-[#254151] to-[#2d4a5c]'
        },
        {
            name: 'الجامعة الأردنية',
            country: 'المملكة الأردنية الهاشمية',
            image: 'https://images.unsplash.com/photo-1722248540590-ba8b7af1d7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwbGlicmFyeSUyMHN0dWR5fGVufDF8fHx8MTc2NzQ5NjcwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            color: 'from-[#6096b4] to-[#7aa5be]'
        },
        {
            name: 'جامعة ولاية كاليفورنيا، نورثريدج',
            country: 'الولايات المتحدة الأمريكية',
            image: 'https://images.unsplash.com/photo-1679653226697-2b0fbf7c17f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2NzUxNDEwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            color: 'from-[#c2a772] to-[#d4b883]'
        }
    ];

    return (
        <div className="space-y-10">
            <div className="flex items-center gap-4 pb-6 border-b-2 border-gray-200">
                <div className="p-3 bg-gradient-to-br from-[#254151] to-[#2d4a5c] rounded-xl">
                    <Link2 className="size-8 text-white" />
                </div>
                <div>
                    <h2 className="text-4xl font-bold bg-gradient-to-l from-[#254151] to-[#2d4a5c] bg-clip-text text-transparent">
                        الارتباط الأكاديمي
                    </h2>
                </div>
            </div>

            {/* Introduction Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-blue-50 via-white to-amber-50/30 p-8 rounded-2xl border border-gray-200 shadow-lg"
            >
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-5">
                    <p>
                        انطلاقا من الدور الأساسي الذي تلعبه المؤسسات التعليمية في توفير احتياجات المجتمع من المتخصصين والخبراء في مختلف المجالات العلمية والتقنية ونظرا للتطورات الهائلة التي يشهدها عالمنا المعاصر في مختلف جوانب المعرفة فقد حرصنا في البريمي الكلية للاستفادة من خبرات الآخرين.
                    </p>
                    <p>
                        لذلك اخترنا <span className="font-bold text-[#254151]">جامعة كاليفورنيا ستيث الشمالية / الجامعة الأمريكية</span> و<span className="font-bold text-[#254151]">جامعة عين شمس بجمهورية مصر العربية</span> و<span className="font-bold text-[#254151]">الجامعة الأردنية بالمملكة الأردنية الهاشمية</span>. وهذه الجامعات تعد من أعرق الجامعات في العالم لما لها من تاريخ طويل وكفاءة علمية على المستوى الإقليمي والدولي لتكون نقطة انطلاقنا مستفيدين من خبراتهم وتجاربهم الناجحة.
                    </p>
                    <div className="bg-gradient-to-r from-[#6096b4]/10 to-[#c2a772]/10 p-6 rounded-xl border-r-4 border-[#254151]">
                        <p className="font-bold text-[#254151] mb-2">
                            ضمانات الجودة التعليمية
                        </p>
                        <p className="text-gray-700">
                            حيث تمثل أحد أهم ضمانات الجودة التعليمية من خلال إشرافهم ومتابعتهم لبرامجنا الدراسية مما يضمن مستوى عالي تعليم جامعي معترف به دوليًا. لقد تجاوزنا في هذا الجانب مفهوم الإشراف والتعاون التقليدي حتى أصبحت برامجنا الدراسية وفق المستويات الأكاديمية لتلك الجامعات.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Universities Title */}
            <div className="text-center space-y-3">
                <div className="flex items-center justify-center gap-3">
                    <div className="h-1 w-16 bg-gradient-to-r from-[#254151] to-[#6096b4] rounded-full"></div>
                    <h3 className="text-3xl font-bold text-[#254151]">جامعاتنا الشريكة</h3>
                    <div className="h-1 w-16 bg-gradient-to-l from-[#6096b4] to-[#c2a772] rounded-full"></div>
                </div>
            </div>

            {/* Universities Grid */}
            <div className="grid md:grid-cols-3 gap-8">
                {universities.map((university, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + idx * 0.15 }}
                        className="group"
                    >
                        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                            {/* University Image */}
                            <div className="relative h-56 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                                <Image
                                    fill
                                    src={university.image}
                                    alt={university.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Link Icon Overlay */}
                                <div className="absolute top-4 left-4 z-20">
                                    <div className={`w-14 h-14 bg-gradient-to-br ${university.color} rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm bg-opacity-90`}>
                                        <Link2 className="size-7 text-white" />
                                    </div>
                                </div>
                            </div>

                            {/* University Content */}
                            <div className="p-6 space-y-4">
                                <div className="text-center space-y-3">
                                    <h4 className="text-xl font-bold text-[#254151] leading-tight min-h-[56px] flex items-center justify-center">
                                        {university.name}
                                    </h4>

                                    <div className={`inline-block px-5 py-2 bg-gradient-to-r ${university.color} rounded-full`}>
                                        <div className="flex items-center gap-2 text-white">
                                            <MapPin className="size-4" />
                                            <p className="text-sm font-medium">{university.country}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="pt-4 border-t border-gray-100 space-y-2">
                                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                                        <CheckCircle2 className="size-4 text-[#6096b4]" />
                                        <p>إشراف ومتابعة أكاديمية</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                                        <CheckCircle2 className="size-4 text-[#6096b4]" />
                                        <p>معايير دولية معتمدة</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                                        <CheckCircle2 className="size-4 text-[#6096b4]" />
                                        <p>شراكة استراتيجية</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Quality Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-gradient-to-r from-[#254151] via-[#2d4a5c] to-[#6096b4] p-8 rounded-2xl shadow-xl"
            >
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-right">
                    <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm shrink-0">
                        <Award className="size-12 text-white" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">جودة تعليمية معترف بها دوليًا</h3>
                        <p className="text-white/90 leading-relaxed">
                            برامج دراسية وفق المستويات الأكاديمية العالمية مع إشراف مباشر من جامعات عريقة ذات تاريخ طويل وكفاءة علمية على المستوى الإقليمي والدولي
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
