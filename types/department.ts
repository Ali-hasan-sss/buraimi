export type DepartmentCourse = {
    seq: number
    code: string
    title: string
    credits: number
    oqf: number
    prerequisite: string
}

export type PlanHeader = {
    title: string,
    totalHour?: number | null,
    generalRequirementsHours?: number | null,
    departmentRequirementsHours?: number | null,
    majorRequirementsHours?: number | null,
    electiveRequirements?: number | null
}
export type DepartmentStudyPlan = {
    id: string
    PlanHeader: PlanHeader
    generalRequirements: DepartmentCourse[]
    departmentRequirements: DepartmentCourse[]
    majorRequirements: DepartmentCourse[]
    electiveRequirements?: DepartmentCourse[]
}

export type DepartmentProgramLevelId = string

export type DepartmentProgramLevel = {
    id: DepartmentProgramLevelId
    label: string
    credits: string
}

export type DepartmentProgram = {
    id: string
    titleAr: string
    titleEn: string
    descriptionAr: string
    descriptionEn: string
    levels: DepartmentProgramLevel[],
    objective: {
        title: string,
        data: string[]
    },
    studyPlan: DepartmentStudyPlan[]
}

export type DepartmentFacultyMember = {
    name: string
    title: string
    position?: string
    email: string
    phone: string
}

export type headMessage = {
    message: { __html: string | TrustedHTML; },
    mail: string,
    phone: string,
    writer: string
}

export type DepartmentData = {
    domain: string,
    titleAr: string,
    subTitleAr: string,
    titleEn: string,
    subTitleEn: string,
    headMessage: headMessage
    programs: DepartmentProgram[]
    facultyMembers: DepartmentFacultyMember[]
}

export type DepartmentMap = Record<string, DepartmentData>
