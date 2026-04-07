import DepartmentCTA from "@/components/department/CTA"
import FacultyMember from "@/components/department/FacultyMember"
import DepartmentHero from "@/components/department/Hero"
import HeadMessage from "@/components/department/Message"
import Programs from "@/components/department/Programs"
import dbConnect from "@/lib/dbConnect"
import { normalizeHeadMessage } from "@/lib/department-public"
import { DepartmentModel } from "@/models/Department"
import type { DepartmentData } from "@/types/department"
import { getLocale } from "next-intl/server"
import { notFound } from "next/navigation"

export const dynamic = "force-dynamic"

export default async function DynamicDepartment(
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params

    await dbConnect()
    const department = await DepartmentModel.findOne({ domain: slug }).lean()

    if (!department) {
        notFound()
    }

    const departmentData = JSON.parse(JSON.stringify(department)) as DepartmentData

    const headNormalized = normalizeHeadMessage(departmentData.headMessage)
    const programsList = Array.isArray(departmentData.programs) ? departmentData.programs : []

    const local = await getLocale()
    const title = local == "en" ? departmentData.titleEn : departmentData.titleAr
    const subTitle = local == "en" ? departmentData.subTitleEn : departmentData.subTitleAr

    const dataForPrograms: DepartmentData = {
        ...departmentData,
        programs: programsList,
    }

    return (
        <div>
            <DepartmentHero title={title} subTitle={subTitle} />
            {headNormalized ? <HeadMessage message={headNormalized} /> : null}
            {programsList.length > 0 ? <Programs data={dataForPrograms} /> : null}
            {departmentData.facultyMembers &&
                <FacultyMember facultyMembers={departmentData.facultyMembers} />
            }
            <DepartmentCTA />
        </div>
    )
}