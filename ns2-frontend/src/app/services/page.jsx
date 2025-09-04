
// import ServicesHero from "@/components/serrvices/ServicesHero";
// import { fetchServices } from "@/lib/api";

// export const dynamic = "force-dynamic"; // ensures SSR, not static cache

// export default async function ServicesPage() {
//   const data = await fetchServices(); // SSR fetch on server
//   return <ServicesHero data={data} />;
// }


import ServicesHero from "@/components/serrvices/ServicesHero";
import { fetchServiceBySlug } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function ServicesPage({ searchParams }) {
  // Get slug from query (fallback = aiml if not provided)
  const slug = searchParams?.slug || "aiml";

  const data = await fetchServiceBySlug(slug);

  return <ServicesHero data={data} />;
}
