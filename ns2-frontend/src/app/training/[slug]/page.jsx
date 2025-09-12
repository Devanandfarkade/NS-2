const metadata = {
  title: "NS^2 | | Training Programs",
  description:
    "At NS², we offer comprehensive training programs for both corporate professionals and students.",
};

import WhatYouWillLearnServer from "@/components/trainingStudent/WhatYouWillLearnServer";
import ProgramStructureServer from "@/components/trainingStudent/ProgramStructureServer";
import HeroSectionServer from "@/components/trainingCorporate/HeroSectionServer";
import StudentHeroSectionServer from "@/components/trainingStudent/HeroSectionServer";
import AboutCorporateServer from "@/components/trainingCorporate/AboutCorporateServer";
import TrainingSectionServer from "@/components/trainingCorporate/TrainingOfferingsServer";
import WhyChooseUsServer from "@/components/trainingCorporate/WhyChooseUsServer";
import IndustriesServedServer from "@/components/trainingCorporate/IndustriesServedServer";
import TrainingProcessServer from "@/components/trainingCorporate/TrainingProcessServer";
import OurTrainersServer from "@/components/trainingCorporate/OurTrainersServer";
import FAQSection from "@/components/homepage/FAQSection";

import { fetchTrainingPage } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function TrainingPage({ params: incomingParams }) {
  // Await params before using
  const params = await incomingParams;
  const slug = params.slug;

  const data = await fetchTrainingPage(slug);

  // HERO
  const heroData = data.find(
    (section) =>
      section.section_type ===
      (slug === "corporate-training" ? "HERO_CORPORATE" : "HERO_STUDENT")
  );

  // ABOUT
  const aboutData = data.find(
    (section) =>
      section.section_type ===
      (slug === "corporate-training" ? "ABOUT_CORPORATE" : "ABOUT_STUDENT")
  );

  // TRAINING OFFERINGS
  const trainingData = data.find(
    (section) => section.section_type === "TRAINING_OFFERINGS"
  );

  // PROGRAM STRUCTURE (STUDENT)
  const programStructureData = data.filter(
    (section) => section.section_type === "PROGRAM_STRUCTURE"
  );

  const whatYouWillLearnData = data.filter(
    (section) => section.section_type === "WHAT_YOU_WILL_LEARN"
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
  const faq = data.find((section) => section.section_type === "FAQ");

  return (
    <main>
      {heroData &&
        (slug === "corporate-training" ? (
          <HeroSectionServer data={heroData} />
        ) : (
          <StudentHeroSectionServer data={heroData} />
        ))}

      {programStructureData.length > 0 && slug === "student-training" && (
        <ProgramStructureServer data={programStructureData} />
      )}

      {whatYouWillLearnData.length > 0 && slug === "student-training" && (
        <WhatYouWillLearnServer data={whatYouWillLearnData} />
      )}

      {aboutData && <AboutCorporateServer data={aboutData} />}
      {trainingData && <TrainingSectionServer data={trainingData} />}
      {why && <WhyChooseUsServer data={why} />}
      {industries && <IndustriesServedServer data={industries} />}
      {processData && <TrainingProcessServer slug={slug} />}
      {trainersData && <OurTrainersServer data={trainersData} />}
      {faq && <FAQSection data={faq} />}
    </main>
  );
}
