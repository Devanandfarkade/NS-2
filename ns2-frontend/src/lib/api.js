const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export function normalizeImageUrl(url) {
  if (!url) return null;
  if (url.startsWith("http")) return url;
  // allow starting slash or not
  return `${API_BASE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}

export async function fetchNavbarData() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/core/header-footer`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data && (data.header || data.menu)) {
      return data;
    } else {
      console.warn(
        "API response missing expected structure, returning empty array instead of fallback"
      );
      return { header: [], menu: [] };
    }
  } catch (error) {
    console.error("Failed to fetch Navbar data:", error);
    return { header: [], menu: [] };
  }
}

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

export async function submitContactForm(payload) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/core/contact/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error("Contact API error:", response.status);
      return { success: false };
    }

    const result = await response.json();
    return { success: true, data: result };
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return { success: false };
  }
}

// export async function fetchServiceBySlug(slug) {
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/services/fetch-services/?slug=${slug}`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         cache: "no-store", // SSR fresh data
//       }
//     );

//     if (!res.ok) throw new Error("Failed to fetch service data");

//     return await res.json();
//   } catch (error) {
//     console.error("Failed to fetch service:", error);
//     return null;
//   }
// }

// src/lib/services/api.js
// const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// export async function fetchServiceBySlug(slug) {
//   try {
//     const res = await fetch(
//       `${API_BASE_URL}/api/services/fetch-services/?slug=${slug}`,
//       { cache: "no-store" }
//     );

//     if (!res.ok) throw new Error("Failed to fetch service data");

//     return await res.json();
//   } catch (error) {
//     console.error("Error fetching service by slug:", error);
//     return null;
//   }
// }
