import FeatureHighlights from "@/components/internship/FeatureHighlights";
import HeroSection from "@/components/internship/HeroSection";
import InternshipOpportunities from "@/components/internship/InternshipOpportunities";
import ProgramStructure from "@/components/internship/ProgramStructure";
import WhyChooseUs from "@/components/internship/WhyChooseUs";
import { fetchInternshipPage } from "@/lib/api";

export const metadata = {
  title: "NS² | Internships",
  description: "Explore internship opportunities and innovative projects.",
};

export const dynamic = "force-dynamic";

export default async function InternshipPage() {
  const internshipData = await fetchInternshipPage();

  const heroBanner =
    internshipData.find(
      (section) =>
        section.section_type === "HERO" ||
        section.section_type === "Hero Banner"
    ) || null;

  const opportunities =
    internshipData.find(
      (section) => section.section_type === "INTERNSHIP_OPPORTUNITIES"
    ) || null;

  const whyChooseUs =
    internshipData.find(
      (section) => section.section_type === "WHY_CHOOSE_US"
    ) || null;

  const featureHighlights =
    internshipData.find(
      (section) => section.section_type === "FEATURE_HIGHLIGHTS"
    ) || null;

  const programStructure =
    internshipData.find(
      (section) => section.section_type === "PROGRAM_STRUCTURE"
    ) || null;

  return (
    <main className="bg-white">
      {heroBanner && <HeroSection data={heroBanner} />}
      {opportunities && <InternshipOpportunities initialData={opportunities} />}
      {whyChooseUs && <WhyChooseUs initialData={whyChooseUs} />}
      {featureHighlights && (
        <FeatureHighlights initialData={featureHighlights} />
      )}
      {programStructure && <ProgramStructure initialData={programStructure} />}
    </main>
  );
}
