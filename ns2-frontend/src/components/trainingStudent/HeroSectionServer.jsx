import HeroSectionClient from "@/components/trainingStudent/HeroSectionClient";

export default function HeroSectionServer({ data }) {
  if (!data) return null;
  return <HeroSectionClient data={data} />;
}
