import What from "@/components/main/WhatH";
import { GraduateStudies } from "@/components/main/ProgramsExplorer"
import { Hero } from "@/components/main/Hero";
import { FactsAndStats } from "@/components/main/FactsAndStats";
import { EventsSection } from "@/components/main/EventSection";
import { ResearchHighlights } from "@/components/main/ResearchHighlights";
import { NewsHighlights } from "@/components/main/NewsH";
import { CampusExperience, CampusWelcomeSection } from "@/components/main/CampusWelcomeSection";
import { SocialMediaFeed } from "@/components/main/SocialMediaFeed";
import { Partners } from "@/components/main/Partners";
import { CollegesShowcase } from "@/components/main/CollegesShowcase";
import dbConnect from "@/lib/dbConnect";
import { mapDepartmentsToShowcaseCards } from "@/lib/department-public";
import {
  getSiteContactSettings,
  resolveSidePanelContact,
  socialProfileLinksForStrip,
} from "@/lib/site-contact-settings";
import { listGradProgramsForCarousel } from "@/lib/graduate-program-public";
import { DepartmentModel } from "@/models/Department";

export const dynamic = "force-dynamic";

export default async function Main() {
    await dbConnect();
    const siteContact = await getSiteContactSettings();
    const sidePanelContact = resolveSidePanelContact(siteContact);
    const mainSocialLinks = socialProfileLinksForStrip(siteContact.socialLinks);
    const deptDocs = await DepartmentModel.find({}).sort({ domain: 1 }).lean();
    const graduateCarousel = await listGradProgramsForCarousel();

    const showcaseColleges = mapDepartmentsToShowcaseCards(
        deptDocs.map((doc) => ({
            domain: String(doc.domain),
            titleAr: String(doc.titleAr),
            titleEn: String(doc.titleEn),
            subTitleAr: doc.subTitleAr != null ? String(doc.subTitleAr) : undefined,
            subTitleEn: doc.subTitleEn != null ? String(doc.subTitleEn) : undefined,
            showcaseImage:
                doc.showcaseImage != null && String(doc.showcaseImage).trim() !== ''
                    ? String(doc.showcaseImage).trim()
                    : undefined,
        }))
    );

    return (
        <div className="bg-background text-foreground  ">
            <Hero sidePanelContact={sidePanelContact} />
            <What />

            <CollegesShowcase colleges={showcaseColleges} />
            <GraduateStudies programs={graduateCarousel} />
            <FactsAndStats />
            <EventsSection />
            <ResearchHighlights />
            <NewsHighlights />
            <CampusExperience />

            <SocialMediaFeed socialLinks={mainSocialLinks} />
            <Partners />
        </div>
    )
}