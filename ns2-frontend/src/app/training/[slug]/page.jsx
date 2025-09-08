export const metadata = {
  title: "NS^2 | | Corporate Training",
  description:
    "At NS², we craft innovative solutions that bridge technology and human creativity.",
};

import HeroSectionServer from "@/components/trainingCorporate/HeroSectionServer";
import AboutCorporateServer from "@/components/trainingCorporate/AboutCorporateServer";
import TrainingSectionServer from "@/components/trainingCorporate/TrainingOfferingsServer";
import WhyChooseUsServer from "@/components/trainingCorporate/WhyChooseUsServer";
import IndustriesServedServer from "@/components/trainingCorporate/IndustriesServedServer";
import TrainingProcessServer from "@/components/trainingCorporate/TrainingProcessServer";
import OurTrainersServer from "@/components/trainingCorporate/OurTrainersServer";

import { fetchTrainingPage } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function TrainingPage({ params }) {
  // Extract the slug value first
  const slug = (await params).slug;

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

  const industries = data.find(
    (section) => section.section_type === "INDUSTRIES_SERVED"
  );
  const processData = data.find(
    (section) => section.section_type === "TRAINING_PROCESS"
  );
  const trainersData = data.find(
    (section) => section.section_type === "OUR_TRAINERS"
  );

  return (
    <main>
      {slug === "corporate-training" && (
        <>
          {heroData && <HeroSectionServer data={heroData} />}
          {aboutData && <AboutCorporateServer data={aboutData} />}
          {trainingData && <TrainingSectionServer data={trainingData} />}
          {why && <WhyChooseUsServer data={why} />}
          {industries && <IndustriesServedServer data={industries} />}
          {processData && <TrainingProcessServer slug={slug} />}
          {trainersData && <OurTrainersServer data={trainersData} />}
        </>
      )}
    </main>
  );
}
