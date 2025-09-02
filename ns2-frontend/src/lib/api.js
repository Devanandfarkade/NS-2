const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE;

//In case of server not working, this will by default be shown.
const fallbackNavbarData = {
  menu: [
    {
      text: "Home",
      url: "/",
      is_button: false,
      order: 1,
      submenus: [],
    },
    {
      text: "Services",
      url: "#",
      is_button: false,
      order: 2,
      submenus: [
        { text: "Web Development", url: "/services/web-dev", order: 1 },
        { text: "App Development", url: "/services/app-dev", order: 2 },
        { text: "Cloud & DevOPS", url: "/services/cloud-devops", order: 3 },
        {
          text: "Digital Marketing",
          url: "/services/digital-marketing",
          order: 4,
        },
        { text: "AI & ML", url: "/services/ai-ml", order: 5 },
      ],
    },
    {
      text: "Internships",
      url: "#",
      is_button: false,
      order: 3,
      submenus: [
        { text: "Web Development", url: "/internships/web-dev", order: 1 },
        { text: "App Development", url: "/internships/app-dev", order: 2 },
        { text: "Cloud & DevOPS", url: "/internships/cloud-devops", order: 3 },
        { text: "AI & ML", url: "/internships/ai-ml", order: 4 },
      ],
    },
    {
      text: "Training",
      url: "/training",
      is_button: false,
      order: 4,
      submenus: [],
    },
    {
      text: "About",
      url: "/about",
      is_button: false,
      order: 5,
      submenus: [],
    },
    {
      text: "Contact",
      url: "/contact",
      is_button: false,
      order: 6,
      submenus: [],
    },
    {
      text: "Get Started",
      url: "/get-started",
      is_button: true,
      order: 7,
      submenus: [],
    },
  ],
};

export async function fetchNavbarData() {
  try {
    // console.log(
    //   "Fetching navbar data from:",
    //   `${API_BASE_URL}/api/core/header-footer`
    // );
    const response = await fetch(`${API_BASE_URL}/api/core/header-footer`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    // console.log("API response data:", data);

    if (data && data.header) {
      return data.header;
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
