import { fetchHeroData } from "@/lib/api";
import Hero from "@/components/homepage/HeroSection";

export default async function HomePage() {
  const heroData = await fetchHeroData();
  return (
    <main>
      <Hero data={heroData} />
    </main>
  );
}
