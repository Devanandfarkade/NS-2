import { fetchServiceBySlug } from '@/lib/api';
import ServicesPageClient from './ServicesPageClient'; // The client component you'll create

export default async function ServicesPage({ params }) {
  const { slug } = await params;

  const actualSlug = slug || "aiml";

  const initialSections = await fetchServiceBySlug(actualSlug);

  if (!initialSections || initialSections.length === 0) {
    redirect("/");
  }

  return <ServicesPageClient initialSections={initialSections} initialSlug={actualSlug} />;
}
