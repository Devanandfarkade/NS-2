import HeroSectionClient from "@/components/trainingCorporate/HeroSectionClient";

export default function HeroSectionServer({ data }) {
  if (!data) return null;
  return <HeroSectionClient data={data} />;
}
