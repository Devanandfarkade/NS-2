import { fetchAboutPage } from "@/lib/api";
import WhoWeAre from "@/components/aboutus/WhoWeAre";
import VisionSection from "@/components/aboutus/VisionSection";
import CompanyGallery from "@/components/aboutus/CompanyGallery";

export const revalidate = 0; // Full SSR

export default async function AboutUsPage() {
  const data = await fetchAboutPage();

  if (!data || !Array.isArray(data)) {
    return <p className="text-center py-10">Failed to load About Us data</p>;
  }

  const whoWeAre = data.find(
    (section) => section.section_type === "WHO_WE_ARE" && section.is_active
  );

  const vision = data.find(
    (section) => section.section_type === "VISION_MISSION" && section.is_active
  );
  const gallery = data.find(
    (section) => section.section_type === "GALLERY" && section.is_active
  );

  return (
    <main className="min-h-screen bg-white">
      {whoWeAre && <WhoWeAre data={whoWeAre} />}
      {vision && <VisionSection data={vision} />}
      {gallery && <CompanyGallery data={gallery} />}
    </main>
  );
}
