"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
    programId: string;
    titleAr: string;
    titleEn: string;
    descriptionAr: string;
    descriptionEn: string;
};

export default function EditProgramDialog({
    departmentId,
    programId,
    titleAr,
    titleEn,
    descriptionAr,
    descriptionEn,
}: Props) {
    const [open, setOpen] = useState(false);
    const [saving, setSaving] = useState(false);
    const router = useRouter();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSaving(true);

        const fd = new FormData(e.currentTarget);
        const body = {
            titleAr: fd.get("titleAr")?.toString().trim() || "",
            titleEn: fd.get("titleEn")?.toString().trim() || "",
            descriptionAr: fd.get("descriptionAr")?.toString().trim() || "",
            descriptionEn: fd.get("descriptionEn")?.toString().trim() || "",
        };

        try {
            const res = await fetch(
                `/api/departments/${departmentId}/programs/${programId}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body),
                }
            );

            if (res.ok) {
                setOpen(false);
                router.refresh();
            }
        } finally {
            setSaving(false);
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size="sm" variant="secondary" className="h-7 text-xs">
                    Update
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>Update Program</DialogTitle>
                    <DialogDescription>Edit the program title and description.</DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="ep-titleAr">Title (AR)</label>
                        <Input id="ep-titleAr" name="titleAr" defaultValue={titleAr} required />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="ep-titleEn">Title (EN)</label>
                        <Input id="ep-titleEn" name="titleEn" defaultValue={titleEn} required />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="ep-descAr">Description (AR)</label>
                        <textarea
                            id="ep-descAr"
                            name="descriptionAr"
                            defaultValue={descriptionAr}
                            rows={3}
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="ep-descEn">Description (EN)</label>
                        <textarea
                            id="ep-descEn"
                            name="descriptionEn"
                            defaultValue={descriptionEn}
                            rows={3}
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
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
