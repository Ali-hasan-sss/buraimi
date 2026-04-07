"use client"
import { DepartmentProgram } from "@/types/department"
import { motion } from "framer-motion"
import { Award, BookOpen, Target } from "lucide-react"
import { useState } from "react"
import { StudyDialog } from "./StudyDialog"
import { useLocale } from "next-intl"

export default function ProgramCard(
    { program, index }: { program: DepartmentProgram, index: number }
) {
    const [selectedProgramLevelId, setSelectedProgramLevelId] = useState<string>(program.levels[0]?.id ?? "")
    const [studyIndex, setStudyIndex] = useState<number>(0)

    const locale = useLocale()
    const title = locale == "ar" ? program.titleAr : program.titleEn
    const description = locale == "ar" ? program.descriptionAr : program.descriptionEn

    const handleActiveStudy = (activeLevelId: string) => {
        setSelectedProgramLevelId(activeLevelId)

        const idx = program.studyPlan?.findIndex((plan) => plan.id === activeLevelId)
        setStudyIndex(idx >= 0 ? idx : 0)
    }

    const selectedLevelCredits = program.levels.find((l) => l.id === selectedProgramLevelId)?.credits ?? ""
    return (
        <div>

            <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 border-2 border-[#c2a772]/20 hover:border-[#6096b4] transition-all"
            >
                <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#254151] to-[#6096b4] flex items-center justify-center flex-shrink-0">
                        <BookOpen className="size-8 text-white" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl text-[#254151] mb-2">{title}</h3>
                        <p className="text-gray-600">{description}</p>
                    </div>
                </div>

                <div className="space-y-4 mb-6">
                    {selectedLevelCredits ? (
                        <div className="flex items-center gap-2 text-[#6096b4]">
                            <Award className="size-5" />
                            <span>{selectedLevelCredits}</span>
                        </div>
                    ) : null}

                    {/* Level Selection Buttons */}
                    <div className="flex flex-wrap gap-2">
                        {program.levels.map((level) => (
                            <button
                                key={level.id}
                                onClick={() => handleActiveStudy(level.id)}

                                className={`px-4 py-2 text-sm transition-all ${selectedProgramLevelId === level.id
                                    ? 'bg-[#c2a772] text-white'
                                    : 'bg-[#c2a772]/10 text-[#c2a772] hover:bg-[#c2a772]/20'
                                    }`}
                            >
                                {level.label}
                            </button>
                        ))}
                    </div>
                </div>

                {program.studyPlan && program.studyPlan[studyIndex] ? <StudyDialog studyPlan={program.studyPlan[studyIndex]} /> : null}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 mt-5"
            >
                <h3 className="text-2xl text-[#254151] mb-6 flex items-center gap-3">
                    <Target className="size-6 text-[#c2a772]" />
                    {program.objective.title}
                </h3>
                <ul className="space-y-3">
                    {program.objective.data.map((item, key) => (
                        <li key={key} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-[#c2a772] mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    )
}