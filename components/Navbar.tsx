"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import NavbarDropdown from "./NavbarDropdown";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      // If click is outside both dropdown and button, close it
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl rounded-full 
                 bg-black/10 backdrop-blur-md border border-white/10 px-2 py-2 flex items-center justify-between shadow-lg"
    >
      <div className="flex gap-6 text-sm font-medium text-white relative ml-6">
        <Link href="/" className={pathname === "/" ? "text-orange-500" : ""}>
          Home
        </Link>
        <Link
          href="/about"
          className={pathname === "/about" ? "text-orange-500" : ""}
        >
          My story
        </Link>

        <button
          ref={buttonRef}
          onClick={() => setDropdownOpen((prev) => !prev)}
          className="cursor-pointer"
        >
          Skills
        </button>

        <Link
          href="/projects"
          className={pathname === "/projects" ? "text-orange-500" : ""}
        >
          Projects
        </Link>
      </div>

      <AnimatePresence>
        {dropdownOpen && (
          <div ref={dropdownRef}>
            <NavbarDropdown />
          </div>
        )}
      </AnimatePresence>

      {/* Center Logo */}
      <div className="text-white text-lg font-bold tracking-wide">
        carbonform
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <Link
          href="#"
          className="bg-orange-500 text-white text-md font-semibold px-5 py-3 rounded-full 
                      hover:bg-orange-600 transition-all"
        >
          <span>Let&apos;s Connect</span>{" "}
          <ArrowUpRight className="inline ml-2" />
        </Link>
      </div>
    </nav>
  );
}
