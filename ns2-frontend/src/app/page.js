export const metadata = {
  title: "NS^2 | | Home",
  description:
    "At NS², we craft innovative solutions that bridge technology and human creativity.",
};

export const dynamic = "force-dynamic";

import FAQSection from "@/components/homepage/FAQSection";
import Hero from "@/components/homepage/HeroSection";
import Overview from "@/components/homepage/Overview";
import ScrollToTop from "@/components/homepage/ScrollToTop";
import Testimonial from "@/components/homepage/Testimonial";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
import { fetchHomepageSection } from "@/lib/api";
import ContactUs from "@/components/homepage/ContactUs";
import KeyAchievementsServer from "@/components/homepage/KeyAchievements.server";

export default async function HomePage() {
  const heroData = await fetchHomepageSection("Hero Banner");
  const overview = await fetchHomepageSection("Overview");
  const whyChooseUs = await fetchHomepageSection("Why Choose Us");
  const testimonial = await fetchHomepageSection("Testimonials Slider");
  const faq = await fetchHomepageSection("Frequently Asked Questions");
  const cta = await fetchHomepageSection("Call To Action");
  const contact = await fetchHomepageSection("Contact Us");
  const keyAchievements = await fetchHomepageSection("Key Achivements");

  return (
    <main>
      <Hero data={heroData} />
      <Overview data={overview} />
      <WhyChooseUs data={whyChooseUs} />
      <KeyAchievementsServer data={keyAchievements} />
      <Testimonial data={testimonial} />
      <FAQSection data={faq} cta={cta} />
      <ContactUs data={contact} />
      <ScrollToTop />
    </main>
  );
}
