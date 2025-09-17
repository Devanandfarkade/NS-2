'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-Z9P7RWW6VP', {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
