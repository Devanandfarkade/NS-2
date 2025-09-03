const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export function normalizeImageUrl(url) {
  if (!url) return null;
  if (url.startsWith("http")) return url;
  // allow starting slash or not
  return `${API_BASE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}

//function for Navbar component
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

//function for Hero component of homepage
export async function fetchHeroData() {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/homepage/fetch-homepage`,
      {
        cache: "no-store",
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }
    const data = await response.json();

    if (data && Array.isArray(data) && data.length > 0) {
      return data.find((section) => section.section_type === "Hero Banner");
    }
    console.log(
      "API of Hero section/component returned unexpected structure, using fallback"
    );
    return null;
  } catch (error) {
    console.log("Failed to fetch hero data: ", error);
    return null;
  }
}

//function for overview of homepage
export async function fetchOverviewData() {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/homepage/fetch-homepage`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }

    const data = await response.json();

    const sections = Array.isArray(data)
      ? data
      : Array.isArray(data?.data)
        ? data.data
        : [];

    const overview = sections.find(
      (s) => s?.section_type?.toLowerCase() === "overview" && s?.is_active
    );

    if (!overview) {
      console.warn("Overview section not found in homepage API.");
      return null;
    }

    if (overview.background_image) {
      overview.background_image = normalizeImageUrl(overview.background_image);
    }
    if (overview.primary_image) {
      overview.primary_image = normalizeImageUrl(overview.primary_image);
    }

    return overview;
  } catch (error) {
    console.error("Failed to fetch overview data:", error);
    return null;
  }
}
