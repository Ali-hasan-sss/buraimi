import PillCTA from '@/components/researchPill/PillCTA';
import ProjHero from "@/components/Research/projects/ProjHero";
import ProjStatsSection from "@/components/Research/projects/ProjStatsSection";
import ProjExplorerSection from "@/components/Research/projects/ProjExplorerSection";

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <ProjHero />
            <ProjStatsSection />
            <ProjExplorerSection />
            <PillCTA />
        </div>
    );
}
