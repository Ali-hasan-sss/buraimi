import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50" dir="rtl">
            <div className="relative bg-gradient-to-l from-[#254151] to-[#6096b4] text-white py-20 overflow-hidden">
                <div className="relative container mx-auto px-4 z-10">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <Skeleton className="h-16 w-16 rounded-full bg-white/20" />
                        </div>
                        <Skeleton className="h-12 w-40 mx-auto bg-white/20" />
                        <Skeleton className="h-7 w-[36rem] max-w-full mx-auto mt-4 bg-white/20" />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-16 relative z-20 mb-20">
                <div className="grid md:grid-cols-3 gap-8">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="bg-white rounded-2xl shadow-2xl p-8 text-center border-t-4 border-[#c2a772]">
                            <Skeleton className="h-20 w-20 rounded-full mx-auto mb-6" />
                            <Skeleton className="h-12 w-24 mx-auto mb-4" />
                            <Skeleton className="h-5 w-44 mx-auto" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <Skeleton className="h-8 w-48 mb-6" />
                    <Skeleton className="h-10 w-72 mb-6" />

                    <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 mb-8 border border-[#6096b4]/30">
                        <Skeleton className="h-5 w-full mb-3" />
                        <Skeleton className="h-5 w-5/6 mb-6" />

                        <div className="bg-white rounded-xl p-6 shadow-md">
                            <div className="flex items-start gap-4">
                                <Skeleton className="h-12 w-12 rounded-lg" />
                                <div className="flex-1">
                                    <Skeleton className="h-6 w-72 mb-3" />
                                    <Skeleton className="h-4 w-full mb-2" />
                                    <Skeleton className="h-4 w-5/6" />
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-8">
                            <Skeleton className="h-12 w-40 rounded-full" />
                            <Skeleton className="h-12 w-40 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="container mx-auto px-4">
                    <Skeleton className="h-10 w-[36rem] max-w-full mx-auto mb-4" />
                    <Skeleton className="h-6 w-[28rem] max-w-full mx-auto mb-12" />

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#c2a772]/20">
                                <div className="flex items-start gap-6">
                                    <Skeleton className="h-24 w-24 rounded-2xl" />
                                    <div className="flex-1">
                                        <Skeleton className="h-7 w-56 mb-4" />
                                        <Skeleton className="h-4 w-full mb-2" />
                                        <Skeleton className="h-4 w-5/6" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
