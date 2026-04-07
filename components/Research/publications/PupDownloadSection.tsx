"use client";

import { Download } from "lucide-react";
import { useLocale } from "next-intl";

type LocaleKey = "ar" | "en";

export default function PupDownloadSection() {
    const locale = useLocale() as LocaleKey;

    const t = {
        "ar": {
            "title": "تحميل قائمة المنشورات الكاملة",
            "body": "احصل على القائمة الكاملة للمنشورات البحثية بصيغة PDF",
            "button": "تحميل القائمة الكاملة",
            "badge": "PDF"
        },
        "en": {
            "title": "Download the Full Publications List",
            "body": "Get the complete list of research publications in PDF format.",
            "button": "Download Full List",
            "badge": "PDF"
        }
    } as const;

    const content = t[locale] ?? t["en"];

    return (
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-10 sm:py-16">
            <div className="container mx-auto max-w-4xl px-3 sm:px-4">
                <div className="rounded-lg border-2 border-amber-200 bg-white p-6 text-center shadow-2xl sm:p-10">
                    <div className="mb-5 flex justify-center sm:mb-6">
                        <div className="flex size-14 items-center justify-center rounded-full bg-amber-600 text-white sm:size-20">
                            <Download className="size-7 sm:size-10" />
                        </div>
                    </div>

                    <h3 className="mb-3 text-2xl font-bold text-[#254151] sm:mb-4 sm:text-4xl">{content.title}</h3>
                    <p className="mb-6 text-base text-gray-700 sm:mb-8 sm:text-xl">{content.body}</p>

                    <button className="inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-[#254151] to-[#6096b4] px-6 py-3 text-base font-bold text-white transition-all hover:shadow-2xl sm:px-10 sm:py-5 sm:text-xl">
                        <Download className="size-5 sm:size-7" />
                        <span>{content.button}</span>
                        <span className="rounded-full bg-white/20 px-3 py-1 text-xs sm:text-sm">{content.badge}</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
