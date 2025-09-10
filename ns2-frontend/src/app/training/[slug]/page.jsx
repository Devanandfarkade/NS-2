export const metadata = {
  title: "NS^2 | | Training Programs",
  description:
    "At NS², we offer comprehensive training programs for both corporate professionals and students.",
};

import HeroSectionServer from "@/components/trainingCorporate/HeroSectionServer";
import StudentHeroSectionServer from "@/components/trainingStudent/HeroSectionServer"; // New import
import AboutCorporateServer from "@/components/trainingCorporate/AboutCorporateServer";
import TrainingSectionServer from "@/components/trainingCorporate/TrainingOfferingsServer";
import WhyChooseUsServer from "@/components/trainingCorporate/WhyChooseUsServer";
import IndustriesServedServer from "@/components/trainingCorporate/IndustriesServedServer";
import TrainingProcessServer from "@/components/trainingCorporate/TrainingProcessServer";
import OurTrainersServer from "@/components/trainingCorporate/OurTrainersServer";

import FAQSection from "@/components/homepage/FAQSection";

import { fetchTrainingPage } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function TrainingPage({ params }) {
  const slug = (await params).slug;

  const data = await fetchTrainingPage(slug);
  const heroData = data.find(
    (section) =>
      section.section_type ===
      (slug === "corporate-training" ? "HERO_CORPORATE" : "HERO_STUDENT")
  );
  const aboutData = data.find(
    (section) =>
      section.section_type ===
      (slug === "corporate-training" ? "ABOUT_CORPORATE" : "ABOUT_STUDENT")
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
  const faq = data.find((section) => section.section_type === "FAQ");

  return (
    <main>
      {/* Use different hero sections based on slug */}
      {heroData && slug === "corporate-training" && (
        <HeroSectionServer data={heroData} />
      )}
      {heroData && slug === "student-training" && (
        <StudentHeroSectionServer data={heroData} />
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
