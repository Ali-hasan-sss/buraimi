"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
    departmentId: string;
    email: string;
    name: string;
    phone: string;
    position: string;
    title: string;
};

export default function EditFacultyMemberDialog({
    departmentId,
    email,
    name,
    phone,
    position,
    title,
}: Props) {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [saving, setSaving] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSaving(true);

        const fd = new FormData(e.currentTarget);
        const body = {
            email,
            member: {
                name: fd.get("name")?.toString().trim() || "",
                phone: fd.get("phone")?.toString().trim() || "",
                position: fd.get("position")?.toString().trim() || "",
                title: fd.get("title")?.toString().trim() || "",
            },
        };

        try {
            const res = await fetch(`/api/departments/${departmentId}/faculty-members`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            const json = (await res.json().catch(() => null)) as { ok?: boolean; message?: string } | null;

            if (!res.ok || !json?.ok) {
                toast.error(json?.message || "Failed to update member");
                return;
            }

            toast.success("Member updated");
            setOpen(false);
            router.refresh();
        } finally {
            setSaving(false);
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button type="button" size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
                    edit
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>Edit Faculty Member</DialogTitle>
                    <DialogDescription>{email}</DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="efm-name">Name</label>
                        <Input id="efm-name" name="name" defaultValue={name} required />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                            <label className="text-sm font-medium" htmlFor="efm-phone">Phone</label>
                            <Input id="efm-phone" name="phone" defaultValue={phone} />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium" htmlFor="efm-title">Title</label>
                            <Input id="efm-title" name="title" defaultValue={title} />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="efm-position">Position</label>
                        <Input id="efm-position" name="position" defaultValue={position} />
                    </div>

                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={() => setOpen(false)} disabled={saving}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={saving}>
                            {saving ? "Saving..." : "Save"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
