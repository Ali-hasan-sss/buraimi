"use client"
import * as React from "react"
import Image from "next/image"
import { BookOpen, CalendarDays, ChevronLeft, ChevronRight, Users } from "lucide-react";


import motifPattern from '@/public/assets/45a75d0cafcfcebe2c8053e8b7812df4739c5eff.png';
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function What() {
    const locale = useLocale()
    const localeKey: "ar" | "en" = locale === "ar" ? "ar" : "en"

    const items = React.useMemo(() => {
        const itemsByLocale: Record<"ar" | "en", Array<{ title: string; description: string; link: string; Icon: React.ComponentType<{ className?: string }>; bgClassName: string }>> = {
            ar: [
                {
                    title: "البرامج الأكاديمية",
                    description: "اكتشف برامجنا المتنوعة في مختلف التخصصات",
                    Icon: BookOpen,
                    bgClassName: "bg-ring",
                    link: "/main/department"
                },
                {
                    title: "الفعاليات والأنشطة",
                    description: "تابع آخر الفعاليات والورش والأنشطة الطلابية",
                    Icon: CalendarDays,
                    bgClassName: "bg-primary",
                    link: "/main/about"
                },
                {
                    title: "مجتمع الطلبة",
                    description: "تعرف على الأندية والمبادرات وفرص المشاركة",
                    Icon: Users,
                    bgClassName: "bg-[var(--link-hover)]",
                    link: "/main/about"
                },
            ],
            en: [
                {
                    title: "Academic Programs",
                    description: "Explore our diverse programs across different disciplines",
                    Icon: BookOpen,
                    bgClassName: "bg-ring",
                    link: "/main/department"
                },
                {
                    title: "Events & Activities",
                    description: "Follow the latest events, workshops, and student activities",
                    Icon: CalendarDays,
                    bgClassName: "bg-primary",
                    link: "/main/about"
                },
                {
                    title: "Student Community",
                    description: "Learn about clubs, initiatives, and ways to get involved",
                    Icon: Users,
                    bgClassName: "bg-[var(--link-hover)]",
                    link: "/main/about"
                },
            ],
        }

        return itemsByLocale[localeKey]
    }, [localeKey])

    const t = useTranslations("general")
    return (
        <section className="py-3 bg-gradient-to-b from-gray-50 to-white relative pt-32 
         xl:px-16 lg:px-8 md:px-6 px-4 
         ">
            <div className="flex items-end justify-between gap-6">
                <div className="space-y-2">
                    <h2 className="text-3xl 2xl:text-[41px] font-black text-[#254151] mb-12 text-right "

                        style={{
                            fontWeight: 900,
                            letterSpacing: '-0.02em'
                        }}>
                        {t("what_is_Hap")}
                    </h2>
                </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                {items.map(({ title, description, Icon, bgClassName, link }) => (
                    <div
                        key={title}
                        className={`group p-4 2xl:min-h-[250px]
                            relative transition-all duration-500 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] cursor-pointer
                            ${bgClassName}`}
                    >
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/25" />

                        <div className="pointer-events-none absolute -top-10 -end-10 h-40 w-40 rounded-full bg-white/15 blur-2xl transition-all duration-300 group-hover:-top-14 group-hover:-end-14" />

                        <div className="pointer-events-none absolute inset-y-0 end-0 w-full overflow-hidden">
                            <div
                                className="absolute inset-0 translate-x-8 opacity-0 
                            transition-all duration-300 group-hover:translate-x-0  w-[70%]
                            group-hover:opacity-100 rtl:-translate-x-8 rtl:group-hover:translate-x-[-45%]">
                                <Image
                                    src={motifPattern}
                                    alt=""
                                    fill
                                    className=" opacity-10 w-full h-[10%] "
                                    priority={false}
                                />
                            </div>
                        </div>

                        <div className="relative flex items-start gap-4">
                            <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/15 ring-1 ring-white/20 transition-colors duration-200 group-hover:bg-white/20">
                                <Icon className="h-5 w-5 text-white" />
                            </div>
                            <div className="min-w-0">
                                <h3 className="text-base md:text-lg 2xl:text-[41px] text-white mb-1 leading-tight transition-colors duration-500 font-bold ">
                                    {title}
                                </h3>
                                <p className="text-white/95 text-xs leading-snug md:text-base md:text-md 2xl:text-lg">
                                    {description}
                                </p>
                            </div>
                        </div>

                        <div className="relative mt-5">
                            <div className="h-px w-full bg-gradient-to-l from-white/0 via-white/25 to-white/0 opacity-80" />
                        </div>

                        <div className="relative mt-4 flex items-end justify-between">
                            <Link href={link} title={title}
                                className={`inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 text-xs font-semibold text-white ring-1 ring-white/20
                                    opacity-0 translate-x-4 transition-all duration-200
                                    group-hover:opacity-100 group-hover:translate-x-0 rtl:-translate-x-4 rtl:group-hover:translate-x-0`}
                            >
                                {t("discover_more")}

                                {
                                    locale == "ar" ?

                                        <ChevronLeft className="h-4 w-4" />
                                        :
                                        <ChevronRight className="h-4 w-4" />

                                }
                            </Link>

                            <div className="pointer-events-none select-none">
                                <div
                                    className={`h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15
                                        opacity-0 -translate-x-4 transition-all duration-300
                                        group-hover:opacity-100 group-hover:translate-x-0`}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}