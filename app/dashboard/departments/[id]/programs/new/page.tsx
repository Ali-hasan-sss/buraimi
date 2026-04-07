import Link from "next/link";

import { Button } from "@/components/ui/button";
import AddProgramForm from "@/components/dashboard/departments/AddProgramForm";

export default async function NewProgramPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    return (
        <div className="max-w-2xl space-y-6">
            <div className="flex items-center justify-between gap-3">
                <div className="space-y-1">
                    <h1 className="text-2xl font-semibold tracking-tight">Add new program</h1>
                    <p className="text-sm text-muted-foreground">Create a new program under this department.</p>
                </div>

                <Button asChild variant="outline">
                    <Link href={`/dashboard/departments/${id}`}>Back</Link>
                </Button>
            </div>

            <div className="rounded-2xl border bg-white p-6">
                <AddProgramForm departmentId={id} />
            </div>
        </div>
    );
}