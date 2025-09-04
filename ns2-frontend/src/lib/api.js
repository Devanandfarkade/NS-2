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

//function for Hero component of homepage - ram
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

//function for overview of homepage - ram
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


//function for fetchWhyChooseUsData of homepage - ram
export async function fetchWhyChooseUsData() {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/homepage/fetch-homepage`,
      { cache: "no-store" }
    );
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    const data = await response.json();
    const section = data.find(
      (s) => s.section_type?.toLowerCase() === "why choose us" && s.is_active
    );
    if (!section) return null;

    if (section.background_image)
      section.background_image = normalizeImageUrl(section.background_image);
    if (section.primary_image)
      section.primary_image = normalizeImageUrl(section.primary_image);

    return section;
  } catch (error) {
    console.error("Failed to fetch Why Choose Us data:", error);
    return null;
  }
}

//function for testimonial of homepage - ram

export async function fetchTestimonialData() {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/homepage/fetch-homepage`,
      { cache: "no-store" }
    );
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

    const data = await response.json();

    const section = data.find(
      (s) =>
        s.section_type?.toLowerCase() === "testimonials slider" && s.is_active
    );

    return section || null;
  } catch (error) {
    console.error("Failed to fetch Testimonials data:", error);
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

export async function fetchServiceBySlug(slug) {
  try {
    const res = await fetch(
      `${API_BASE_URL}/api/services/fetch-services/?slug=${slug}`,
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Failed to fetch service data");

    return await res.json();
  } catch (error) {
    console.error("Error fetching service by slug:", error);
    return null;
  }
}
