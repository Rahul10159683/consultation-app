"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  const navItems = [
    { label: "Home", href: "/Home" },
    { label: "About", href: "/About" },
    { label: "Services", href: "/Services" },
    { label: "Contact", href: "/Contact" },
  ];

  const handleNavClick = (href) => {
    router.push(href);
    setMenuOpen(false);
  };

  return (
    <header className="w-full bg-white">
      <div className="max-w-full mx-auto flex items-center px-6 py-4 sm:px-10">
        <div className="text-4xl sm:text-2xl flex justify-center mr-20 font-extrabold text-shadow-2xs text-blue-900 hover:text-amber-400">
          CLOUD MERGE
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-gray-700 focus:outline-none"
        >
          {menuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        <nav className="hidden sm:flex space-x-8 text-base font-medium relative">
          {navItems.map((item) => {
            const isActive = pathname.toLowerCase() === item.href.toLowerCase();
            const isHovered = hovered === item.href;

            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setHovered(item.href)}
                onMouseLeave={() => setHovered(null)}
              >
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`pb-1 bg-transparent ${
                    isActive ? "text-black" : "text-gray-700 hover:text-black"
                  }`}
                >
                  {item.label}
                </button>

                {(isActive || isHovered) && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-black"
                    transition={{
                      type: "tween",
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </div>
            );
          })}
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden px-6 pb-4 space-y-2 text-sm font-medium bg-purple-50 overflow-hidden"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`block w-full text-left bg-transparent ${
                    isActive
                      ? "text-black font-semibold"
                      : "text-gray-700 hover:text-black"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
