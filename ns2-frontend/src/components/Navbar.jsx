// app/components/Navbar.jsx
import Link from "next/link";
import { fetchNavbarData } from "@/lib/api";
import MobileMenu from "./MobileMenuClient"; // Client component

export default async function Navbar() {
  // Fetch data on the server
  let navbarData;
  try {
    navbarData = await fetchNavbarData();
  } catch (err) {
    console.error("Error fetching navbar data:", err);
    navbarData = null;
  }

  // Use fallback if data is missing
  const menuItems = navbarData?.menu || [
    {
      text: "Home",
      url: "/",
      is_button: false,
      order: 1,
      submenus: [],
    },
    {
      text: "Get Started",
      url: "/get-started",
      is_button: true,
      order: 2,
      submenus: [],
    },
  ];

  const regularMenuItems = menuItems.filter((item) => !item.is_button);
  const buttonMenuItem = menuItems.find((item) => item.is_button);

  return (
    <nav className="bg-[#F8F9FA] shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-[#007BFF] font-poppins font-bold text-xl"
        >
          NS^2 Infotech
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center items-center">
          <ul className="flex space-x-6">
            {regularMenuItems.map((item, index) => (
              <li key={index} className="relative group">
                {item.submenus && item.submenus.length > 0 ? (
                  <>
                    <button className="text-[#6C757D] hover:text-[#007BFF] transition-colors duration-200 flex items-center">
                      {item.text}
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>

                    {/* Desktop Submenu */}
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                      {item.submenus.map((subitem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subitem.url}
                          className="block px-4 py-2 text-[#6C757D] hover:text-[#007BFF] hover:bg-gray-100"
                        >
                          {subitem.text}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.url}
                    className="text-[#6C757D] hover:text-[#007BFF] transition-colors duration-200"
                  >
                    {item.text}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button - Desktop */}
        {buttonMenuItem && (
          <div className="hidden md:block">
            <Link
              href={buttonMenuItem.url}
              className="bg-[#007BFF] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
            >
              {buttonMenuItem.text}
            </Link>
          </div>
        )}

        {/* Mobile Menu */}
        <div className="md:hidden">
          <MobileMenu menuItems={menuItems} />
        </div>
      </div>
    </nav>
  );
}
