'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import ProcessStepsSection from '@/components/services/ProcessStepsSection';
import ServicesHero from '@/components/services/ServicesHero';
import TechGridSection1 from '@/components/services/TechGridSection1';
import TechGridSection2 from '@/components/services/TechGridSection2';
import WhatWeProvideSection from '@/components/services/WhatWeProvideSection';

const SECTION_COMPONENTS = {
  BANNER: ServicesHero,
  TECH_GRID_1: TechGridSection1,
  TECH_GRID_2: TechGridSection2,
  PROCESS_STEPS: ProcessStepsSection,
  WHAT_WE_PROVIDE: WhatWeProvideSection,
};

export default function ServicesPageClient({ initialSections, initialSlug }) {
  const [sections, setSections] = useState(initialSections);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const pathname = usePathname();

  // Extract slug from URL dynamically
  const slug = pathname.split('/').pop() || initialSlug;

  useEffect(() => {
    if (slug === initialSlug) return; // No need to refetch on initial load

    setLoading(true);
    setError(null);

    fetch(`/api/services/${slug}`) // Adjust this endpoint to your actual API
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch service data');
        return res.json();
      })
      .then((data) => {
        setSections(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [slug, initialSlug]);

  if (loading) return <div>Loading service...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!sections || sections.length === 0) return <div>No data found</div>;

  return (
    <main className="bg-white">
      {sections.map((section) => {
        const Component = SECTION_COMPONENTS[section.section_type];
        return Component ? <Component key={section.order} data={section} /> : null;
      })}
    </main>
  );
}
