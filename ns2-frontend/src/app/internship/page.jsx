import HeroSection from "@/components/internship/HeroSection";
import InternshipOpportunities from "@/components/internship/InternshipOpportunities";
import { fetchInternshipPage } from "@/lib/api";

export const metadata = {
  title: "NS² | Internships",
  description: "Explore internship opportunities and innovative projects.",
};

export const dynamic = "force-dynamic";

export default async function InternshipPage() {
  const internshipData = await fetchInternshipPage();

  // Pick hero section
  const heroBanner =
    internshipData.find(
      (section) =>
        section.section_type === "HERO" ||
        section.section_type === "Hero Banner"
    ) || null;

  // Pick internship opportunities section
  const opportunities =
    internshipData.find(
      (section) =>
        section.section_type === "INTERNSHIP_OPPORTUNITIES"
    ) || null;

  return (
    <main className="bg-white">
      {/* Hero Section */}
      {heroBanner ? (
        <HeroSection data={heroBanner} />
      ) : (
        <div className="p-10 text-center">No internship hero data found.</div>
      )}

      {/* Internship Opportunities Section */}
      {opportunities ? (
        <InternshipOpportunities initialData={opportunities} />
      ) : (
        <div className="p-10 text-center">
          No internship opportunities data found.
        </div>
      )}
    </main>
  );
}
