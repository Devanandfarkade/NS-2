export const metadata = {
  title: "NS^2 | Corporate Training",
  description:
    "Tailored corporate training solutions to empower businesses, leaders, and employees for sustainable growth and success.",
};

export const dynamic = "force-dynamic";

import HeroSectionServer from "@/components/trainingCorporate/HeroSectionServer";

export default function TrainingPage() {
  return (
    <main>
      <HeroSectionServer />
    </main>
  );
}
