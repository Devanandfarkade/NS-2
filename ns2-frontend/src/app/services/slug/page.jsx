// src/app/services/[slug]/page.jsx
import { fetchServiceBySlug } from "@/lib/services/api";
import ServicesHero from "@/components/services/ServicesHero";

export default async function ServicePage({ params }) {
  const { slug } = params;
  const data = await fetchServiceBySlug(slug);

  return (
    <div>
      <ServicesHero data={data} />
    </div>
  );
}
