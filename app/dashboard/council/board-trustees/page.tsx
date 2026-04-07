import Link from "next/link";
import { revalidatePath } from "next/cache";

import dbConnect from "@/lib/dbConnect";
import { BoardTrustee } from "@/models/BoardTrustees";
import { Button } from "@/components/ui/button";

type TrusteeDoc = {
    _id: unknown;
    name: string;
    role: string;
};

async function deleteMember(formData: FormData) {
    "use server";

    const id = String(formData.get("id") || "");
    if (!id) return;

    await dbConnect();
    await BoardTrustee.findByIdAndDelete(id);
    revalidatePath("/dashboard/council/board-trustees");
}

export default async function Trust() {
    await dbConnect();
    const members = (await BoardTrustee.find({}).sort({ createdAt: -1 }).lean()) as TrusteeDoc[];

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1">
                    <h1 className="text-2xl font-semibold tracking-tight">Board of Trustees</h1>
                    <p className="text-sm text-muted-foreground">Manage members</p>
                </div>
                <Button asChild className="w-full sm:w-auto">
                    <Link href="/dashboard/council/board-trustees/new">Add new member</Link>
                </Button>
            </div>

            <div className="overflow-hidden rounded-xl border bg-background">
                <div className="w-full overflow-x-auto">
                    <table className="w-max min-w-full text-sm">
                        <thead className="bg-muted/50 ">
                            <tr className="text-left">
                                <th className="hidden px-4 py-3 font-medium text-start sm:table-cell">ID</th>
                                <th className="px-4 py-3 font-medium text-start">Name</th>
                                <th className="px-4 py-3 font-medium text-start">Role</th>
                                <th className="px-4 py-3 font-medium text-start">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {members.length === 0 ? (
                                <tr>
                                    <td className="px-4 py-6 text-muted-foreground" colSpan={4}>
                                        No members found.
                                    </td>
                                </tr>
                            ) : (
                                members.map((m) => (
                                    <tr key={String(m._id)} className="border-t">
                                        <td className="hidden px-4 py-3 font-mono text-xs sm:table-cell">{String(m._id)}</td>
                                        <td className="px-4 py-3 whitespace-nowrap">{m.name}</td>
                                        <td className="px-4 py-3 whitespace-nowrap">{m.role}</td>
                                        <td className="px-4 py-3">
                                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                                                <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
                                                    <Link href={`/dashboard/council/board-trustees/${String(m._id)}`}>Update</Link>
                                                </Button>

                                                <form action={deleteMember} className="w-full sm:w-auto">
                                                    <input type="hidden" name="id" value={String(m._id)} />
                                                    <Button type="submit" variant="destructive" size="sm" className="w-full sm:w-auto">
                                                        Delete
                                                    </Button>
                                                </form>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}