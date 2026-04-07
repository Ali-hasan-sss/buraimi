"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type RoleChoice = "member" | "industry" | "head";

export default function MemberForm({
    action,
    defaultName,
    defaultRole,
    defaultDescription,
    submitLabel,
}: {
    action: (formData: FormData) => void;
    defaultName?: string;
    defaultRole?: string;
    defaultDescription?: string;
    submitLabel?: string;
}) {
    const initialRoleChoice: RoleChoice = defaultRole === "member" || defaultRole === "industry" ? defaultRole : "head";
    const [roleChoice, setRoleChoice] = useState<RoleChoice>(initialRoleChoice);
    const [headRole, setHeadRole] = useState<string>(initialRoleChoice === "head" ? String(defaultRole || "") : "");

    const effectiveRole = useMemo(() => {
        if (roleChoice === "member") return "member";
        if (roleChoice === "industry") return "industry";
        return headRole.trim();
    }, [roleChoice, headRole]);

    const showDescription = roleChoice !== "member";

    return (
        <form action={action} className="space-y-4 rounded-xl border bg-background p-4">
            <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="name">Name</label>
                <Input id="name" name="name" placeholder="Name" defaultValue={defaultName} required />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="roleChoice">Role</label>
                <select
                    id="roleChoice"
                    name="roleChoice"
                    value={roleChoice}
                    onChange={(e) => setRoleChoice(e.target.value as RoleChoice)}
                    className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                    <option value="member">عضو</option>
                    <option value="industry">صناعي</option>
                    <option value="head">head</option>
                </select>
            </div>

            {roleChoice === "head" ? (
                <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="roleText">Head title</label>
                    <Input
                        id="roleText"
                        value={headRole}
                        onChange={(e) => setHeadRole(e.target.value)}
                        placeholder="Enter head title"
                        required
                    />
                </div>
            ) : null}

            <input type="hidden" name="role" value={effectiveRole} />

            {showDescription ? (
                <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="description">Description</label>
                    <Input id="description" name="description" placeholder="Description" defaultValue={defaultDescription} />
                </div>
            ) : (
                <input type="hidden" name="description" value="" />
            )}

            <div className="flex items-center justify-end gap-2">
                <Button type="submit" className="w-full sm:w-auto">{submitLabel || "Create"}</Button>
            </div>
        </form>
    );
}
