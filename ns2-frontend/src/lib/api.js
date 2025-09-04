const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

//image normalizer - ram
export function normalizeImageUrl(url) {
  if (!url) return null;
  if (url.startsWith("http")) return url;
  // allow starting slash or not
  return `${API_BASE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}

//function for Navbar component - ram
export async function fetchNavbarData() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/core/header-footer`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data && data.header) {
      return data;
    } else if (data && data.menu) {
      return data;
    } else {
      console.warn(
        "API response doesn't have expected structure, using fallback data"
      );
      return fallbackNavbarData;
    }
  } catch (error) {
    console.error("Failed to fetch Navbar data:", error);
    console.log("Using fallback navbar data");
    return fallbackNavbarData;
  }
}

// ✅ Generic fetcher for homepage sections
export async function fetchHomepageSection(sectionType) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/homepage/fetch-homepage`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) throw new Error(`HTTP error status: ${response.status}`);

    const data = await response.json();

    const sections = Array.isArray(data)
      ? data
      : Array.isArray(data?.data)
        ? data.data
        : [];

    const section = sections.find(
      (s) =>
        s.section_type?.toLowerCase() === sectionType.toLowerCase() &&
        s.is_active
    );

    if (!section) {
      console.warn(`${sectionType} section not found.`);
      return null;
    }

    // Normalize images if present
    if (section.background_image)
      section.background_image = normalizeImageUrl(section.background_image);

    if (section.primary_image)
      section.primary_image = normalizeImageUrl(section.primary_image);

    return section;
  } catch (error) {
    console.error(`Failed to fetch ${sectionType} section:`, error);
    return null;
  }
}

export async function fetchPortfolioData() {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/portfolio/fetch-portfolio`,
      {
        cache: "no-store", // Ensures fresh data on every request (SSR)
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // Check if the API returns a valid, non-empty array
    if (data && Array.isArray(data) && data.length > 0) {
      return data;
    }

    console.warn(
      "API for Portfolio page returned an empty or invalid response."
    );
    return []; // Return an empty array on failure to avoid render errors
  } catch (error) {
    console.error("Failed to fetch Portfolio page data:", error);
    return []; // Return an empty array on error
  }
}

