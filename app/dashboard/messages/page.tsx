import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Crown, GraduationCap } from "lucide-react";

export default function MessagesPage() {
    const roles = [
        {
            title: "رئيس مجلس الإدارة",
            subtitle: "Chairman of the Board of Directors",
            description: "إدارة الرسائل والتواصل مع رئيس مجلس الإدارة",
            href: "/dashboard/messages/chairman",
            icon: Crown,
        },
        {
            title: "العميد",
            subtitle: "Dean",
            description: "إدارة الرسائل والتواصل مع عميد الكلية",
            href: "/dashboard/messages/dean",
            icon: GraduationCap,
        }
    ] as const;

    return (
        <div className="space-y-6">
            <div className="space-y-1">
                <h1 className="text-2xl font-semibold tracking-tight">الرسائل</h1>
                <p className="text-sm text-muted-foreground">
                    اختر جهة لعرض وإدارة الرسائل
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
                {roles.map((role) => {
                    const Icon = role.icon;
                    return (
                        <div key={role.href} className="rounded-xl border bg-background p-4 shadow-sm">
                            <div className="flex items-start justify-between gap-3">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <Icon className="size-4 text-muted-foreground" />
                                        <div className="font-semibold">{role.title}</div>
                                    </div>
                                    <div className="text-xs text-muted-foreground">{role.description}</div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <Button asChild className="w-full">
                                    <Link href={role.href}>عرض الرسائل</Link>
                                </Button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}