export const metadata = {
  title: "NS^2 | | Home",
  description:
    "At NS², we craft innovative solutions that bridge technology and human creativity.",
};

export const dynamic = "force-dynamic";
import ContactUs from "@/components/homepage/ContactUs";
import FAQSection from "@/components/homepage/FAQSection";
import Hero from "@/components/homepage/HeroSection";
import KeyAchievementsServer from "@/components/homepage/KeyAchievements.server";
import Overview from "@/components/homepage/Overview";
import ScrollToTop from "@/components/homepage/ScrollToTop";
import { ServicesSection } from "@/components/homepage/ServiceSection";
import Testimonial from "@/components/homepage/Testimonial";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
import { fetchHomepageSection } from "@/lib/api";

export default async function HomePage() {
  const heroData = await fetchHomepageSection("Hero Banner");
  const overview = await fetchHomepageSection("Overview");
  const whyChooseUs = await fetchHomepageSection("Why Choose Us");
  const testimonial = await fetchHomepageSection("Testimonials Slider");
  const faq = await fetchHomepageSection("Frequently Asked Questions");
  const cta = await fetchHomepageSection("Call To Action");
  const contact = await fetchHomepageSection("Contact Us");
  const keyAchievements = await fetchHomepageSection("Key Achivements");
  const ourServices = await fetchHomepageSection("Our Services");

  return (
    <main>
      <Hero data={heroData} />
      <Overview data={overview} />
      <WhyChooseUs data={whyChooseUs} />
      {ourServices && <ServicesSection data={ourServices} />}
      <KeyAchievementsServer data={keyAchievements} />
      <Testimonial data={testimonial} />
      <FAQSection data={faq} cta={cta} />
      <ContactUs data={contact} />
      <ScrollToTop />
    </main>
  );
}
