"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

import LangSwitcher from "@/components/global/toggleLang";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { ExternalLink, Menu, Settings, User } from "lucide-react";
import Image from "next/image";

import logo from "@/public/logo.webp";

type NavItem = {
    title: string;
    href: string;
};

export default function TopBar() {
    const pathname = usePathname();

    const navItems = useMemo<NavItem[]>(
        () => [
            { title: "Dashboard", href: "/dashboard" },
            { title: "Users", href: "/dashboard/users" },
            { title: "Settings", href: "/dashboard/settings" },
            { title: "partners", href: "/dashboard/partners" },
        ],
        []
    );

    return (
        <header className="sticky top-0 z-40 w-full border-b bg-primary ">
            <div className="mx-auto flex h-14 max-w-screen-2xl items-center gap-3 px-4">
                <div className="flex items-center gap-2">

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button type="button" variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                                <Menu className="size-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="w-72 p-0">
                            <SheetHeader className="border-b px-4 py-3 text-white">
                                <SheetTitle>Dashboard</SheetTitle>
                            </SheetHeader>

                            <nav className="px-2 py-2">
                                {navItems.map((item) => {
                                    const active = pathname === item.href || pathname?.startsWith(item.href);
                                    return (
                                        <Button
                                            key={item.href}
                                            asChild
                                            variant={active ? "secondary" : "ghost"}
                                            className="w-full justify-start"
                                        >
                                            <Link href={item.href}>{item.title}</Link>
                                        </Button>
                                    );
                                })}
                            </nav>
                        </SheetContent>
                    </Sheet>

                    <Link href="/dashboard" className="group flex items-center gap-2 text-white">
                        <div className="grid size-14 place-items-center ">
                            <Image src={logo}
                                width={500}
                                height={100}
                                alt="Buraimi logo"
                                className="" />
                        </div>
                        <div className="hidden sm:block">
                            <div className="text-sm font-semibold leading-none">Buraimi</div>
                            <div className="text-xs text-muted-foreground">Dashboard</div>
                        </div>
                    </Link>

                    <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
                        <Link href="/main">
                            <ExternalLink className="me-2 size-4" />
                            View website
                        </Link>
                    </Button>
                </div>


                <div className="ms-auto flex items-center gap-2">

                    <LangSwitcher />

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button type="button" variant="outline" size="icon" aria-label="Account menu">
                                <User className="size-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuItem asChild>
                                <Link href="/dashboard/settings">
                                    <Settings className="me-2 size-4" />
                                    Settings
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>Sign out</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}