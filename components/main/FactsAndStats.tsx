"use client"

import React, { useEffect, useRef, useState } from 'react';
import motifPattern from '@/public/assets/f0d44e951856d5acf36cd6bce8a291e7e6cd0b62.png';
import { StatsData } from '@/staticData/landing';
import { useLocale } from "next-intl";

interface StatCard {
    value: string;
    label: string;
    subLabel?: string;
    numericValue: number;
}

const stats: StatCard[] = StatsData

export function FactsAndStats() {

    const locale = useLocale()
    const isAr = locale === "ar"
    const localeKey: "ar" | "en" = isAr ? "ar" : "en"

    const sectionRef = useRef<HTMLDivElement>(null);
    const rafIdRef = useRef<number | null>(null);
    const hasAnimatedRef = useRef(false);

    const [counters, setCounters] = useState<number[]>(() => stats.map(() => 0))

    const animateCounters = React.useCallback(() => {
        const durationMs = 1600;
        const start = performance.now();
        const targets = stats.map((s) => s.numericValue);

        if (rafIdRef.current) {
            cancelAnimationFrame(rafIdRef.current);
            rafIdRef.current = null;
        }

        setCounters(stats.map(() => 0));

        const tick = (now: number) => {
            const t = Math.min(1, (now - start) / durationMs);
            const eased = 1 - Math.pow(1 - t, 3);

            if (t >= 1) {
                setCounters(targets);
                rafIdRef.current = null;
                return;
            }

            setCounters(targets.map((target) => Math.round(target * eased)));
            rafIdRef.current = requestAnimationFrame(tick);
        };

        rafIdRef.current = requestAnimationFrame(tick);
    }, []);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (!entry) return;
                if (entry.isIntersecting && !hasAnimatedRef.current) {
                    hasAnimatedRef.current = true;
                    animateCounters();
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);

        return () => {
            observer.disconnect();
            if (rafIdRef.current) {
                cancelAnimationFrame(rafIdRef.current);
                rafIdRef.current = null;
            }
        };
    }, [animateCounters]);

    const formatNumber = (num: number, originalFormat: string) => {
        // If original has comma, add it back
        if (originalFormat.includes(',')) {
            return num.toLocaleString('en-US');
        }
        return num.toString();
    };

    const localizedStats = React.useMemo(() => {
        const labelsByLocale: Record<"ar" | "en", Array<{ label: string; subLabel?: string }>> = {
            ar: [
                { label: "دراسات عليا", subLabel: "الطلاب" },
                { label: "خريج", subLabel: "الطلاب" },
                { label: "خبرتنا", subLabel: "سنة" },
            ],
            en: [
                { label: "Graduate Studies", subLabel: "Students" },
                { label: "Graduates", subLabel: "Students" },
                { label: "Our Experience", subLabel: "Years" },
            ],
        }

        return stats.map((s, index) => {
            const localized = labelsByLocale[localeKey][index]
            return {
                ...s,
                label: localized?.label ?? s.label,
                subLabel: localized?.subLabel ?? s.subLabel,
            }
        })
    }, [localeKey])

    const titleText = isAr ? "الحقائق و الأرقام" : "Facts & Numbers"

    return (
        <>
            {/* Title Section */}
            <div className="bg-gradient-to-b from-gray-50 to-white relative py-6">

                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
                    <h2 className={`text-base sm:text-lg xl:text-2xl 2xl:text-[51px] font-black text-[#254151] ${isAr ? "text-right" : "text-left"} mb-0`} style={{ fontFamily: 'Cairo', fontWeight: 900, letterSpacing: '-0.02em' }}>
                        {titleText}
                    </h2>
                </div>
            </div>

            {/* Stats Section */}
            <section
                ref={sectionRef}
                className="relative py-8 bg-gradient-to-r from-[#254151] via-[#6096b4] to-[#254151] shadow-lg overflow-hidden"
            >
                {/* Animated Motif Pattern */}
                <div
                    className="absolute inset-0 pointer-events-none motif-scroll-bg opacity-35"
                    style={{
                        backgroundImage: `url(${motifPattern.src})`,
                        backgroundRepeat: 'repeat-x',
                        backgroundSize: 'auto 100%',
                        backgroundPosition: 'right center',
                        zIndex: 1,
                        mixBlendMode: 'soft-light'
                    }}
                />

                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16" style={{ position: 'relative', zIndex: 3 }}>
                    <div className="grid  lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-6 md:gap-8">
                        {localizedStats.map((stat, index) => (
                            <div
                                key={`${index}`}
                                className="grid grid-cols-1 sm:flex items-center gap-4 justify-center "
                            >

                                {/* Content */}
                                <div className="flex flex-col">
                                    <div className="text-white/90 font-semibold text-base md:text-xl">
                                        {stat.label}
                                    </div>
                                    <div className='flex gap-2 items-center '>
                                        <div className="md:text-lg xl:text-xl 2xl:text-[41px] font-bold text-white transition-all duration-300">
                                            {formatNumber(counters[index], stat.value)}
                                        </div>
                                        {stat.subLabel && (
                                            <div className="text-white/70 text-xs md:text-sm">
                                                {stat.subLabel}
                                            </div>
                                        )}

                                    </div>
                                </div>

                                {/* Separator - hidden on last item */}
                                {index < stats.length - 1 && (
                                    <div className="hidden md:block w-px h-16 bg-white/20 absolute left-full"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}