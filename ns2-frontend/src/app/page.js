import { fetchHomepageSection } from "@/lib/api";
import Hero from "@/components/homepage/HeroSection";
import Overview from "@/components/homepage/Overview";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
import Testimonial from "@/components/homepage/Testimonial";

export default async function HomePage() {
  const heroData = await fetchHomepageSection("Hero Banner");
  const overview = await fetchHomepageSection("Overview");
  const whyChooseUs = await fetchHomepageSection("Why Choose Us");
  const testimonial = await fetchHomepageSection("Testimonials Slider");

  return (
    <main>
      <Hero data={heroData} />
      <Overview data={overview} />
      <WhyChooseUs data={whyChooseUs} />
      <Testimonial data={testimonial} />
    </main>
  );
}
