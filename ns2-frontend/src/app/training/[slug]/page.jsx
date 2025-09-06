import HeroSectionServer from "@/components/trainingCorporate/HeroSectionServer";
import AboutCorporateServer from "@/components/trainingCorporate/AboutCorporateServer";
import { fetchTrainingPage } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function TrainingPage({ params }) {
  const { slug } = params;
  const data = await fetchTrainingPage(slug);
  const heroData = data.find(
    (section) => section.section_type === "HERO_CORPORATE"
  );
  const aboutData = data.find(
    (section) => section.section_type === "ABOUT_CORPORATE"
  );

  console.log(data);
  return (
    <main>
      {slug === "corporate-training" && (
        <>
          {heroData && <HeroSectionServer data={heroData} />}
          {aboutData && <AboutCorporateServer data={aboutData} />}
        </>
      )}
    </main>
  );
}
