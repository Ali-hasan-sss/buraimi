import CoursesComp from "@/components/GeneralRequirements/courses";
import AboutGen from "@/components/GeneralRequirements/AboutGern";
import VisionGen from "@/components/GeneralRequirements/VisionGen";
import FacultyMemberComp from "@/components/GeneralRequirements/FacultyMember";
import Additional from "@/components/GeneralRequirements/Additional";
import GenReqHero from "@/components/GeneralRequirements/GenReqHero";
import GenReqMission from "@/components/GeneralRequirements/GenReqMission";
import GenReqObjectives from "@/components/GeneralRequirements/GenReqObjectives";
import GenReqCta from "@/components/GeneralRequirements/GenReqCta";

type ColorKey = "blue" | "green" | "purple" | "amber";

const colorStyles: Record<
    ColorKey,
    {
        border200: string;

        border500: string;
        bg50: string;
        from600: string;
        to700: string;
        text600: string;
        text700: string;
        bg600: string;
    }
> = {
    blue: {
        border200: "border-blue-200",
        border500: "border-blue-500",
        bg50: "bg-blue-50",
        from600: "from-blue-600",
        to700: "to-blue-700",
        text600: "text-blue-600",
        text700: "text-blue-700",
        bg600: "bg-blue-600",
    },
    green: {
        border200: "border-green-200",
        border500: "border-green-500",
        bg50: "bg-green-50",
        from600: "from-green-600",
        to700: "to-green-700",
        text600: "text-green-600",
        text700: "text-green-700",
        bg600: "bg-green-600",
    },
    purple: {
        border200: "border-purple-200",
        border500: "border-purple-500",
        bg50: "bg-purple-50",
        from600: "from-purple-600",
        to700: "to-purple-700",
        text600: "text-purple-600",
        text700: "text-purple-700",
        bg600: "bg-purple-600",
    },
    amber: {
        border200: "border-amber-200",
        border500: "border-amber-500",
        bg50: "bg-amber-50",
        from600: "from-amber-600",
        to700: "to-amber-700",
        text600: "text-amber-600",
        text700: "text-amber-700",
        bg600: "bg-amber-600",
    },
};

export default function GeneralRequirementsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <GenReqHero />

            {/* Main Content */}
            <section className="py-10 sm:py-16">
                <div className="container mx-auto px-4 max-w-7xl">
                    {/* About Section */}
                    <AboutGen />
                    {/* Vision */}
                    <VisionGen />

                    <GenReqMission />

                    <GenReqObjectives />

                    {/* Courses */}
                    <CoursesComp colorStyles={colorStyles} />
                    {/* Faculty Members */}
                    <FacultyMemberComp colorStyles={colorStyles} />
                    {/* Additional Info */}
                    <Additional />
                </div>
            </section>

            <GenReqCta />
        </div>
    );
}