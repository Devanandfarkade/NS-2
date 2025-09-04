import { fetchHeroData } from "@/lib/api";
import Hero from "@/components/homepage/HeroSection";

import { fetchOverviewData } from "@/lib/api";
import Overview from "@/components/homepage/Overview";

import { fetchWhyChooseUsData } from "@/lib/api";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";

import { fetchTestimonialData } from "@/lib/api";
import Testimonial from "@/components/homepage/Testimonial";

export default async function HomePage() {
  const heroData = await fetchHeroData();
  const overview = await fetchOverviewData();
  const Whychooseus = await fetchWhyChooseUsData();
  const testimonial = await fetchTestimonialData();

  return (
    <main>
      <Hero data={heroData} />
      <Overview data={overview} />
      <WhyChooseUs data={Whychooseus} />
      <Testimonial data={testimonial} />
    </main>
  );
}
