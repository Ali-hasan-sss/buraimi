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
import RichTextInput from "@/components/dashboard/RichTextInput";

type Props = {
    departmentId: string;
};

export default function AddHeadMessageDialog({ departmentId }: Props) {
    const [open, setOpen] = useState(false);
    const [saving, setSaving] = useState(false);
    const router = useRouter();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSaving(true);

        const fd = new FormData(e.currentTarget);
        const body = {
            writer: fd.get("writer")?.toString().trim() || "",
            mail: fd.get("mail")?.toString().trim() || "",
            phone: fd.get("phone")?.toString().trim() || "",
            messageHtml: fd.get("messageHtml")?.toString().trim() || "",
        };

        try {
            const res = await fetch(`/api/departments/${departmentId}/head-message`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

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
                <Button variant="outline" size="sm">
                    Add Head Message
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Add Head Message</DialogTitle>
                    <DialogDescription>Fill in the head of department message details.</DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="hm-writer">Writer</label>
                        <Input id="hm-writer" name="writer" placeholder="د. فلان - رئيس القسم" />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                            <label className="text-sm font-medium" htmlFor="hm-mail">Email</label>
                            <Input id="hm-mail" name="mail" type="email" placeholder="name@buc.edu.om" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium" htmlFor="hm-phone">Phone</label>
                            <Input id="hm-phone" name="phone" placeholder="+968 25657531" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Message</label>
                        <RichTextInput name="messageHtml" placeholder="رسالة رئيس القسم..." />
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
