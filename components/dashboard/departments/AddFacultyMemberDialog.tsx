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
};

export default function AddFacultyMemberDialog({ departmentId }: Props) {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [saving, setSaving] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSaving(true);

        const fd = new FormData(e.currentTarget);
        const body = {
            email: fd.get("email")?.toString().trim() || "",
            name: fd.get("name")?.toString().trim() || "",
            phone: fd.get("phone")?.toString().trim() || "",
            position: fd.get("position")?.toString().trim() || "",
            title: fd.get("title")?.toString().trim() || "",
        };

        try {
            const res = await fetch(`/api/departments/${departmentId}/faculty-members`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            const json = (await res.json().catch(() => null)) as { ok?: boolean; message?: string } | null;

            if (!res.ok || !json?.ok) {
                toast.error(json?.message || "Failed to add member");
                return;
            }

            toast.success("Member added");
            setOpen(false);
            router.refresh();
        } finally {
            setSaving(false);
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button type="button">Add member</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>Add Faculty Member</DialogTitle>
                    <DialogDescription>Add a new faculty member to this department.</DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="afm-name">Name</label>
                        <Input id="afm-name" name="name" required />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="afm-email">Email</label>
                        <Input id="afm-email" name="email" type="email" required />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                            <label className="text-sm font-medium" htmlFor="afm-phone">Phone</label>
                            <Input id="afm-phone" name="phone" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium" htmlFor="afm-title">Title</label>
                            <Input id="afm-title" name="title" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="afm-position">Position</label>
                        <Input id="afm-position" name="position" />
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
