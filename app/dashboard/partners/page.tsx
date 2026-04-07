import Link from "next/link";
import { revalidatePath } from "next/cache";

import dbConnect from "@/lib/dbConnect";
import { Partnership } from "@/models/Partnership";

import { Button } from "@/components/ui/button";

type PartnerDoc = {
    _id: unknown;
    order: number;
    name: string;
    nameEn: string;
    type: string;
    description: string;
    date: string;
    link?: string;
    international: boolean;
};

async function deletePartner(formData: FormData) {
    "use server";

    const id = String(formData.get("id") || "");
    if (!id) return;

    await dbConnect();
    await Partnership.findByIdAndDelete(id);
    revalidatePath("/dashboard/partners");
}

export default async function Partners() {
    await dbConnect();
    const partners = (await Partnership.find({}).sort({ order: 1 }).lean()) as PartnerDoc[];

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1">
                    <h1 className="text-2xl font-semibold tracking-tight">Partners</h1>
                    <p className="text-sm text-muted-foreground">Manage partnerships</p>
                </div>
                <Button asChild className="w-full sm:w-auto">
                    <Link href="/dashboard/partners/new">Add new partner</Link>
                </Button>
            </div>

            {partners.length === 0 ? (
                <div className="rounded-xl border bg-background p-6 text-sm text-muted-foreground">No partners found.</div>
            ) : (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {partners.map((partner) => (
                        <div
                            key={String(partner._id)}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
                        >
                            <div className="bg-gradient-to-r from-[#254151] to-[#6096b4] p-6">
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between gap-3">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                                    <span className="text-white font-bold">{partner.order}</span>
                                                </div>
                                                <h3 className="text-white font-bold text-lg">{partner.name}</h3>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <Button asChild size="sm" variant="secondary" className="h-8">
                                                    <Link href={`/dashboard/partners/${String(partner._id)}`}>Update</Link>
                                                </Button>

                                                <form action={deletePartner}>
                                                    <input type="hidden" name="id" value={String(partner._id)} />
                                                    <Button type="submit" size="sm" variant="destructive" className="h-8">
                                                        Delete
                                                    </Button>
                                                </form>
                                            </div>
                                        </div>

                                        <p className="text-blue-100 text-sm mt-2">{partner.nameEn}</p>

                                        {partner.link ? (
                                            <a
                                                href={partner.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-100/90 hover:text-white text-sm underline underline-offset-4"
                                            >
                                                {partner.link}
                                            </a>
                                        ) : null}
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 space-y-4">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#c2a772]/10 to-[#c2a772]/5 rounded-full border border-[#c2a772]/20">
                                    <div className="w-2 h-2 bg-[#c2a772] rounded-full"></div>
                                    <span className="text-[#254151] font-semibold text-sm">{partner.type}</span>
                                </div>

                                <p className="text-gray-700 leading-relaxed text-sm">{partner.description}</p>

                                <div className="flex items-center justify-between gap-2 pt-3 border-t border-gray-100 text-sm">
                                    <span className="text-gray-600">{partner.date || "-"}</span>
                                    <span className="text-gray-600">{partner.international ? "International" : "Local"}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}