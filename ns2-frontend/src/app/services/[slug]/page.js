import ContactUs from '@/components/homepage/ContactUs';
import { fetchHomepageSection, fetchServiceBySlug } from '@/lib/api';
import { redirect } from 'next/navigation'; // Needed for redirecting in server components
import ServicesPageClient from './ServicesPageClient';

export default async function ServicesPage({ params }) {
  const { slug } = await params;

  const [contact, initialSections] = await Promise.all([
    fetchHomepageSection('Contact Us'),
    fetchServiceBySlug(slug),
  ]);

  if (!initialSections || initialSections.length === 0) {
    redirect('/');
  }

  return (
    <>
      <ServicesPageClient initialSections={initialSections} initialSlug={slug} />
      <ContactUs data={contact} />
    </>
  );
}
