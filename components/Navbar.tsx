"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import NavbarDropdown from "./NavbarDropdown";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl rounded-full 
                 bg-black/50 backdrop-blur-md border border-white/10 px-2 py-2 flex items-center justify-between shadow-lg"
    >
      <div className="flex gap-6 text-sm font-medium text-white relative ml-6">
        <Link href="/" className={pathname === "/" ? "text-orange-500": ""}>Home</Link>
        <Link href="/about" className={pathname === "/about" ? "text-orange-500":""}>About</Link>
        <button onClick={() => setDropdownOpen((prev) => !prev)}>Skills</button>
        <Link href="/projects" className={pathname === "/projects" ? "text-orange-500": ""}>Projects</Link>
      </div>
      <AnimatePresence>{dropdownOpen && <NavbarDropdown />}</AnimatePresence>

      {/* Center Logo */}
      <div className="text-white text-lg font-bold tracking-wide">
        carbonform
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
    
        <Link
          href="#"
          className="bg-orange-500 text-white text-md font-semibold px-5 py-3 rounded-full 
                     shadow hover:bg-orange-600 transition-all"
        >
          Let's Connect
        </Link>
      </div>
    </nav>
  );
}
