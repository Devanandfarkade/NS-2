import HeroSectionServer from "@/components/trainingCorporate/HeroSectionServer";
import AboutCorporateServer from "@/components/trainingCorporate/AboutCorporateServer";
import TrainingSectionServer from "@/components/trainingCorporate/TrainingOfferingsServer";
import WhyChooseUsServer from "@/components/trainingCorporate/WhyChooseUsServer";
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
  const trainingData = data.find(
    (section) => section.section_type === "TRAINING_OFFERINGS"
  );
  const why = data.find((section) => section.section_type === "WHY_CHOOSE_US");
  return (
    <main>
      {slug === "corporate-training" && (
        <>
          {heroData && <HeroSectionServer data={heroData} />}
          {aboutData && <AboutCorporateServer data={aboutData} />}
          {trainingData && <TrainingSectionServer data={trainingData} />}
          {why && <WhyChooseUsServer data={why} />}
        </>
      )}
    </main>
  );
}
