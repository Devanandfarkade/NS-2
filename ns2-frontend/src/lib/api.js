const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

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

//function for Hero component
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
  } catch {
    console.log("Failed to fetch hero data: ", error);
    return null;
  }
}
