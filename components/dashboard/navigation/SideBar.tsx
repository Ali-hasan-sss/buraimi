"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState, type ComponentType } from "react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { BookOpen, Contact2, GraduationCap, Handshake, Home, Landmark, LayoutDashboard, Mail, Newspaper, Package, PanelLeftClose, PanelLeftOpen, Settings, Users } from "lucide-react";

type NavItem = {
    title: string;
    href: string;
    icon: ComponentType<{ className?: string }>;
};

export default function SideBar() {
    const pathname = usePathname();
    const [collapsed, setCollapsed] = useState(false);
    const tCouncil = useTranslations("dashboardCouncil");

    const navItems = useMemo<NavItem[]>(
        () => [
            { title: "Home", href: "/", icon: Home },
            { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
            // { title: "Users", href: "/dashboard/users", icon: Users },
            // { title: "Settings", href: "/dashboard/settings", icon: Settings },
            { title: tCouncil("sidebarNav"), href: "/dashboard/council", icon: Landmark },
            { title: "messages", href: "/dashboard/messages", icon: Mail },
            { title: "partners", href: "/dashboard/partners", icon: Handshake },
            { title: "departments", href: "/dashboard/departments", icon: BookOpen },
            { title: "graduate programs", href: "/dashboard/graduate-programs", icon: GraduationCap },
            { title: "news", href: "/dashboard/news", icon: Newspaper },
            { title: "careers", href: "/dashboard/careers", icon: Package },
            { title: "contact", href: "/dashboard/contact", icon: Contact2 },
        ],
        [tCouncil],
    );

    return (
        <aside
            className={cn(
                "sticky top-0 flex h-full min-h-0 w-full flex-col border-r bg-background",
                "transition-[width] duration-200 ease-in-out",
                collapsed ? "w-16" : "w-64"
            )}
        >
            <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
                <div className={cn("flex items-center gap-2 border-b px-3 py-3", collapsed ? "justify-center" : "justify-between")}>
                    {!collapsed && (
                        <div className="flex items-center gap-2">
                            <div className="size-8 rounded-md border bg-muted" />
                            <div className="text-sm font-semibold">Dashboard</div>
                        </div>
                    )}

                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="shrink-0"
                        onClick={() => setCollapsed((v) => !v)}
                        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                    >
                        {collapsed ? <PanelLeftOpen className="size-5" /> : <PanelLeftClose className="size-5" />}
                    </Button>
                </div>

                <nav className="flex-1 px-2 py-3">
                    <div className="space-y-1">
                        {navItems.map((item) => {
                            const active = pathname === item.href;
                            const Icon = item.icon;

                            return (
                                <Button
                                    key={item.href}
                                    asChild
                                    variant={active ? "secondary" : "ghost"}
                                    className={cn(
                                        "w-full justify-start gap-2",
                                        collapsed && "justify-center px-0"
                                    )}
                                >
                                    <Link href={item.href}>
                                        <Icon className="size-4" />
                                        {!collapsed && <span className="truncate">{item.title}</span>}
                                    </Link>
                                </Button>
                            );
                        })}
                    </div>
                </nav>

                {!collapsed && (
                    <div className="border-t px-3 py-3 text-xs text-muted-foreground">
                        Signed in
                    </div>
                )}
            </div>
        </aside>
    );
}