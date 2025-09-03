import { fetchHeroData } from "@/lib/api";
import Hero from "@/components/homepage/HeroSection";

import { fetchOverviewData } from "@/lib/api";
import Overview from "@/components/homepage/Overview";

export default async function HomePage() {
  const heroData = await fetchHeroData();
  const overview = await fetchOverviewData();
  return (
    <main>
      <Hero data={heroData} />
      <Overview data={overview} />
    </main>
  );
}
