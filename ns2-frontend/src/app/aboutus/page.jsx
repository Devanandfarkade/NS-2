// src/app/aboutus/page.jsx
import { fetchAboutPage } from "@/lib/api";
import WhoWeAre from "@/components/aboutus/WhoWeAre";

export const revalidate = 0; // SSR - no cache

export default async function AboutUsPage() {
  const data = await fetchAboutPage();

  if (!data || !Array.isArray(data)) {
    return <p className="text-center py-10">Failed to load About Us data</p>;
  }

  const whoWeAre = data.find(
    (section) => section.section_type === "WHO_WE_ARE" && section.is_active
  );

  return (
    <main className="min-h-screen bg-white">
      {whoWeAre && <WhoWeAre data={whoWeAre} />}
    </main>
  );
}
