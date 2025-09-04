import Testimonial from "@/components/homepage/Testimonial";
import { fetchHomepageSection } from "@/lib/api";
import { redirect } from "next/navigation";
import { FeaturedProjectsSection } from "../../components/portfolio/FeaturedProjects";
import { HeroSection } from "../../components/portfolio/HeroSection";
import { ServicesSection } from "../../components/portfolio/ServiceSection";
import { TrustedCompaniesSection } from "../../components/portfolio/TrustedCompanies";
import { TeamSection } from "../../components/portfolio/ourteam"; // Assuming HeroSection is in its own file now
import { fetchPortfolioData } from "../../lib/api";

// Section component mapping
const SECTION_COMPONENTS = {
  "Hero Banner": HeroSection,
  "Our Services": ServicesSection,
  "Featured Projects": FeaturedProjectsSection,
  "Trusted Companies": TrustedCompaniesSection,
  "Our Team": TeamSection,
};

export default async function PortfolioPage() {
  // Fetch portfolio data from Django API
  const sections = await fetchPortfolioData();
  const testimonial = await fetchHomepageSection("Testimonials Slider");

  // Redirect if no data is found
  if (!sections || sections.length === 0) {
    redirect("/");
  }

  return (
    <main className="bg-white">
      {sections.map((section) => {
        // Look up the component based on the section_type from the API
        const Component = SECTION_COMPONENTS[section.section_type];
        // If a component is found, render it with its data
        return Component ? (
          <Component key={section.order} data={section} />
        ) : null;
      })}
      <Testimonial data={testimonial} />
    </main>
  );
}
