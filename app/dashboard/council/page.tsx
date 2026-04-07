import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Briefcase, GraduationCap, Landmark, Users } from "lucide-react";

export default function CouncilPage() {
    const sections = [
        {
            title: "Board of Trustees",
            description: "Manage trustees members",
            href: "/dashboard/council/board-trustees",
            icon: Landmark,
        },
        {
            title: "Board of Directors",
            description: "Manage directors members",
            href: "/dashboard/council/board-directors",
            icon: Users,
        },
        {
            title: "Advisory Council",
            description: "Manage advisory council members",
            href: "/dashboard/council/advisory-council",
            icon: Briefcase,
        },
        {
            title: "College Council",
            description: "Manage college council members",
            href: "/dashboard/council/college-council",
            icon: GraduationCap,
        },
    ] as const;

    return (
        <div className="space-y-6">
            <div className="space-y-1">
                <h1 className="text-2xl font-semibold tracking-tight">Council</h1>
                <p className="text-sm text-muted-foreground">
                    أختر مجلس لتعديل بيانات اعضائه
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
                {sections.map((s) => {
                    const Icon = s.icon;
                    return (
                        <div key={s.href} className="rounded-xl border bg-background p-4 shadow-sm">
                            <div className="flex items-start justify-between gap-3">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <Icon className="size-4 text-muted-foreground" />
                                        <div className="font-semibold">{s.title}</div>
                                    </div>
                                    <div className="text-xs text-muted-foreground">{s.description}</div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <Button asChild className="w-full">
                                    <Link href={s.href}>Open</Link>
                                </Button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}