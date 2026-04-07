"use client";

import Link from "next/link";
import { Users, BookOpen, Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { useMemo } from "react";
import heroImage from "@/public/assets/about/foundation_landing.webp";
import { StudentsSidebar } from "@/components/student/clinic/StudentsSidebar";
import Image from "next/image";


export default function StudentsPage() {
    const locale = useLocale();
    const isAr = locale === "ar";

    const stats = useMemo(() => {
        const labels = isAr
            ? ["الأندية الأكاديمية", "الجماعات الطلابية", "المشاركات الخارجية", "الطلبة الدوليين"]
            : ["Academic Clubs", "Student Groups", "External Participations", "International Students"];
        const icons = [BookOpen, Users, Globe, Users];
        const numbers = ["6", "9", "75", "135"];
        return labels.map((label, i) => ({ label, icon: icons[i], number: numbers[i] }));
    }, [isAr]);

    const t = useMemo(() => {
        return isAr
            ? { title: "الطلبة", home: "الرئيسية" }
            : { title: "Students", home: "Home" };
    }, [isAr]);

    return (
        <div dir={isAr ? "rtl" : "ltr"} className="min-h-screen bg-white">
            {/* Hero Section */}
            <div
                className="relative h-[350px] bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="absolute inset-0 bg-[#254151]/60"></div>

                <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10">
                    <h1 className="text-5xl text-white mb-4">{t.title}</h1>

                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-white mt-4">
                        <Link href="/" className="hover:text-[#c2a772] transition-colors">
                            {t.home}
                        </Link>
                        <span>/</span>
                        <span className="text-[#c2a772]">{t.title}</span>
                    </div>
                </div>
            </div>

            {/* Main Content with Sidebar */}
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Sidebar */}
                    <StudentsSidebar activeId="overview" />

                    {/* Main Content */}
                    <main className="lg:col-span-9">
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-[#6096b4]">
                                <div className="w-12 h-12 bg-[#6096b4] rounded-lg flex items-center justify-center">
                                    <Users className="size-6 text-white" />
                                </div>
                                <h2 className="text-3xl text-[#254151]">{t.title}</h2>
                            </div>

                            <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center">
                                {isAr
                                    ? "يضم الحرم الجامعي لدينا مجموعة من الأفراد المتميزين والمبدعين، انضم إلينا لتكون واحدًا منهم."
                                    : "Our campus is home to a diverse group of exceptional and creative individuals. Join us to be one of them."}
                            </p>

                            {/* Statistics */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                                {stats.map((stat, index) => (
                                    <div
                                        key={index}
                                        className="bg-gradient-to-br from-[#254151] to-[#6096b4] p-6 rounded-lg text-center text-white hover:scale-105 transition-transform"
                                    >
                                        <stat.icon className="size-10 mx-auto mb-3 text-[#c2a772]" />
                                        <div className="text-5xl font-bold mb-2">{stat.number}</div>
                                        <div className="text-sm">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 h-64">
                                <Image
                                    width={300}
                                    height={200}
                                    src="https://images.unsplash.com/photo-1715419048742-cb9cfe6aa54b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudCUyMGNhbXB1cyUyMGxpZmV8ZW58MXx8fHwxNzczMTI4NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                    alt="حياة الطالب"
                                    className="w-full h-64 object-cover rounded-lg shadow-md"
                                />
                                <Image
                                    width={300}
                                    height={200}
                                    src="https://images.unsplash.com/photo-1758270705657-f28eec1a5694?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc3MzA3MTcxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                    alt="الطلاب"
                                    className="w-full h-64 object-cover rounded-lg shadow-md"
                                />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
