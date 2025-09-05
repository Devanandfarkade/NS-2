// app/portfolio/page.js

import Testimonial from "@/components/homepage/Testimonial";
import { FeaturedProjectsSection } from "../../components/portfolio/FeaturedProjects";
import { HeroSection } from "../../components/portfolio/HeroSection";
import { TrustedCompaniesSection } from "../../components/portfolio/TrustedCompanies";
import { TeamSection } from "../../components/portfolio/ourteam";

const SECTION_COMPONENTS = {
  "hero banner": HeroSection,
  "featured projects": FeaturedProjectsSection,
  "trusted companies": TrustedCompaniesSection,
  "our team": TeamSection,
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

async function fetcher(url) {
  const res = await fetch(url, { cache: "no-store" }); // or "force-cache" to cache SSR response
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

export default async function PortfolioPage() {
  // Server side data fetching (SSR)
  const sections = await fetcher(`${API_BASE_URL}/api/portfolio/fetch-portfolio`);
  const homepageSections = await fetcher(`${API_BASE_URL}/api/homepage/fetch-homepage`);

  const testimonialSection = homepageSections?.find(
    (s) => s.section_type === "Testimonials Slider"
  );

  return (
    <main className="bg-white">
      {sections?.map((section) => {
        const key = section.section_type.toLowerCase().replace(/_/g, " ");
        const Component = SECTION_COMPONENTS[key];
        return Component ? <Component key={section.order} data={section} /> : null;
      })}

      {testimonialSection && <Testimonial data={testimonialSection} />}
    </main>
  );
}
