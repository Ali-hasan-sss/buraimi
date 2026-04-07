"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Save, Plus, Trash2, CheckCircle, AlertCircle } from "lucide-react";
import { updateChairmanParagraphs } from "../actions/getMessages";
import type { MessageParagraph } from "../actions/getMessages";

interface ChairmanEditFormProps {
    initialParagraphs: MessageParagraph[];
}

export default function ChairmanEditForm({ initialParagraphs }: ChairmanEditFormProps) {
    const [paragraphs, setParagraphs] = useState<MessageParagraph[]>(initialParagraphs);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

    const handleUpdateText = (index: number, field: "textEn" | "textAr", value: string) => {
        const updated = [...paragraphs];
        updated[index] = { ...updated[index], [field]: value };
        setParagraphs(updated);
    };

    const handleAddParagraph = () => {
        setParagraphs([...paragraphs, { textEn: "", textAr: "" }]);
    };

    const handleRemoveParagraph = (index: number) => {
        setParagraphs(paragraphs.filter((_, i) => i !== index));
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        setStatus(null);

        const result = await updateChairmanParagraphs(paragraphs);

        if (result.error) {
            setStatus({ type: "error", message: result.error });
        } else {
            setStatus({ type: "success", message: "تم حفظ التغييرات بنجاح" });
        }

        setIsSubmitting(false);
    };

    return (
        <div className="rounded-xl border bg-background p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">تعديل الفقرات</h2>
                <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleAddParagraph}
                    className="gap-2"
                >
                    <Plus className="size-4" />
                    إضافة فقرة
                </Button>
            </div>

            <div className="space-y-4">
                {paragraphs.map((para, index) => (
                    <div key={index} className="border rounded-lg p-4 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-muted-foreground">فقرة {index + 1}</span>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => handleRemoveParagraph(index)}
                                className="text-red-500 hover:text-red-700 hover:bg-red-50"
                            >
                                <Trash2 className="size-4" />
                            </Button>
                        </div>
                        <div className="space-y-2">
                            <Textarea
                                placeholder="النص بالعربية..."
                                value={para.textAr}
                                onChange={(e) => handleUpdateText(index, "textAr", e.target.value)}
                                rows={3}
                                className="resize-none"
                            />
                            <Textarea
                                placeholder="Text in English..."
                                value={para.textEn}
                                onChange={(e) => handleUpdateText(index, "textEn", e.target.value)}
                                rows={3}
                                className="resize-none"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {status && (
                <div className={`flex items-center gap-2 p-3 rounded-lg mt-4 ${status.type === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
                    {status.type === "success" ? <CheckCircle className="size-4" /> : <AlertCircle className="size-4" />}
                    <span className="text-sm">{status.message}</span>
                </div>
            )}

            <div className="flex justify-end mt-4">
                <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="gap-2"
                >
                    <Save className="size-4" />
                    حفظ التغييرات
                </Button>
            </div>
        </div>
    );
}
