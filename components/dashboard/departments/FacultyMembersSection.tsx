"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Mail, Phone, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import AddFacultyMemberDialog from "@/components/dashboard/departments/AddFacultyMemberDialog";
import EditFacultyMemberDialog from "@/components/dashboard/departments/EditFacultyMemberDialog";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

export type FacultyMember = {
    email: string;
    name: string;
    phone: string;
    position: string;
    title: string;
};

type Props = {
    departmentId: string;
    members: FacultyMember[];
};

function DeleteMemberButton({ departmentId, email }: { departmentId: string; email: string }) {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [deleting, setDeleting] = useState(false);

    async function onDelete() {
        setDeleting(true);
        try {
            const res = await fetch(
                `/api/departments/${departmentId}/faculty-members?email=${encodeURIComponent(email)}`,
                { method: "DELETE" }
            );
            const json = (await res.json().catch(() => null)) as { ok?: boolean; message?: string } | null;

            if (!res.ok || !json?.ok) {
                toast.error(json?.message || "Failed to delete member");
                return;
            }

            toast.success("Member deleted");
            setOpen(false);
            router.refresh();
        } finally {
            setDeleting(false);
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button type="button" size="sm" className="bg-red-500 hover:bg-red-600 text-white">
                    delete
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete faculty member</DialogTitle>
                    <DialogDescription>This will remove this member from the department.</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button type="button" variant="outline" onClick={() => setOpen(false)} disabled={deleting}>
                        Cancel
                    </Button>
                    <Button type="button" variant="destructive" onClick={onDelete} disabled={deleting}>
                        {deleting ? "Deleting..." : "Delete"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default function FacultyMembersSection({ departmentId, members }: Props) {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold tracking-tight">Faculty Members</h2>
                <AddFacultyMemberDialog departmentId={departmentId} />
            </div>

            {members.length === 0 ? (
                <div className="rounded-xl border bg-background p-6 text-sm text-muted-foreground">
                    No faculty members found.
                </div>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {members.map((member, idx) => (
                        <div
                            key={`${member.email}-${idx}`}
                            className="bg-gradient-to-br from-white to-blue-50 p-6 border border-[#c2a772]/20 hover:border-[#6096b4] transition-all"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#254151] to-[#6096b4] flex items-center justify-center flex-shrink-0">
                                    <Users className="size-7 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg text-[#254151] mb-1 truncate">{member.name}</h3>
                                    <p className="text-sm text-[#6096b4] mb-1">{member.title}</p>
                                    {member.position && <p className="text-sm text-gray-600">{member.position}</p>}
                                </div>
                            </div>

                            <div className="flex gap-2 my-3">
                                <DeleteMemberButton departmentId={departmentId} email={member.email} />
                                <EditFacultyMemberDialog
                                    departmentId={departmentId}
                                    email={member.email}
                                    name={member.name}
                                    phone={member.phone}
                                    position={member.position}
                                    title={member.title}
                                />
                            </div>

                            <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2 text-gray-700">
                                    <Mail className="size-4 text-[#c2a772] flex-shrink-0" />
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="hover:text-[#6096b4] transition-colors truncate"
                                    >
                                        {member.email}
                                    </a>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <Phone className="size-4 text-[#c2a772] flex-shrink-0" />
                                    <span className="truncate">{member.phone}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
