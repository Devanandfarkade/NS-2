import FeatureHighlights from "@/components/internship/FeatureHighlights";
import HeroSection from "@/components/internship/HeroSection";
import InternshipOpportunities from "@/components/internship/InternshipOpportunities";
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

  const featureHighlights=internshipData.find((section) => section.section_type==="FEATURE_HIGHLIGHTS")


  return (
    <main className="bg-white">
      {heroBanner ? (
        <HeroSection data={heroBanner} />
      ) : (
        <div className="p-10 text-center text-gray-900">
          No internship hero data found.
        </div>
      )}

      {opportunities ? (
        <InternshipOpportunities initialData={opportunities} />
      ) : (
        <div className="p-10 text-center text-gray-900">
          No internship opportunities data found.
        </div>
      )}

      {whyChooseUs ? (
        <WhyChooseUs initialData={whyChooseUs} />
      ) : (
        <div className="p-10 text-center text-gray-900">
          No "Why Choose Us" data found.
        </div>
      )}

      {featureHighlights ? (
        <FeatureHighlights initialData={featureHighlights} />
      ) : (
        <div className="p-10 text-center text-gray-900">
          No "FeatureHighlights" data found.
        </div>
      )}
    </main>
  );
}
