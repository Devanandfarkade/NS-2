"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function MobileMenu({ menuItems, logoUrl }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => setIsMounted(true), []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.getElementById("mobile-menu");
      const button = document.getElementById("hamburger-button");
      if (
        menu &&
        button &&
        !menu.contains(event.target) &&
        !button.contains(event.target)
      ) {
        setIsMenuOpen(false);
        setActiveSubmenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setActiveSubmenu(null);
  };

  const toggleSubmenu = (index) =>
    setActiveSubmenu(activeSubmenu === index ? null : index);

  const regularItems = menuItems.filter((item) => !item.is_button);
  const buttonItem = menuItems.find((item) => item.is_button);

  if (!isMounted) return null;

  return (
    <div className="md:hidden">
      <button
        id="hamburger-button"
        onClick={toggleMenu}
        className="p-2 rounded-md text-[#6C757D] hover:text-[#007BFF] hover:bg-[#e9ecef] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:ring-opacity-50"
        aria-label="Toggle mobile menu"
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          id="mobile-menu"
          className={`absolute inset-0 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 h-full flex flex-col">
            {/* Menu Header */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
              {logoUrl && !logoError ? (
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  <img
                    src={logoUrl}
                    alt="Company Logo"
                    className="h-10 w-auto"
                    onError={() => {
                      console.error(
                        "Failed to load logo in mobile menu:",
                        logoUrl
                      );
                      setLogoError(true);
                    }}
                  />
                </Link>
              ) : (
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center"
                >
                  <div className="h-10 w-32 bg-gray-300 flex items-center justify-center text-sm font-medium text-gray-600 rounded-md">
                    Company Logo
                  </div>
                </Link>
              )}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full text-[#6C757D] hover:text-[#007BFF] hover:bg-[#F8F9FA] transition-colors duration-200"
                aria-label="Close menu"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 overflow-y-auto">
              <ul className="space-y-2">
                {regularItems.map((item, index) => (
                  <li
                    key={index}
                    className="border-b border-gray-100 last:border-b-0"
                  >
                    {item.submenus && item.submenus.length > 0 ? (
                      <>
                        <button
                          onClick={() => toggleSubmenu(index)}
                          className="flex justify-between items-center w-full py-4 text-left text-[#6C757D] hover:text-[#007BFF] transition-colors duration-200 font-medium"
                        >
                          <span>{item.text}</span>
                          <svg
                            className={`w-4 h-4 transform transition-transform duration-200 ${
                              activeSubmenu === index ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        <ul
                          className={`pl-4 pb-3 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${
                            activeSubmenu === index ? "max-h-96" : "max-h-0"
                          }`}
                        >
                          {item.submenus.map((subitem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={subitem.url}
                                className="block py-2 px-4 text-[#6C757D] hover:text-[#007BFF] rounded-md hover:bg-[#F8F9FA] transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subitem.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link
                        href={item.url}
                        className="block py-4 text-[#6C757D] hover:text-[#007BFF] transition-colors duration-200 font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.text}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA Button */}
            {buttonItem && (
              <div className="pt-6 mt-auto border-t border-gray-200">
                <Link
                  href={buttonItem.url}
                  className="block w-full bg-[#007BFF] text-white text-center px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {buttonItem.text}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
