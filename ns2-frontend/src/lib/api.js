const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

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
