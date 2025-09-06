import { fetchTrainingPage } from "@/lib/api";
import HeroSectionClient from "@/components/trainingCorporate/HeroSectionClient";

export default async function HeroSectionServer() {
  const data = await fetchTrainingPage();

  const heroData = data.find(
    (section) => section.section_type === "HERO_CORPORATE"
  );

  return <HeroSectionClient data={heroData} />;
}
