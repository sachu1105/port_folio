"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative bg-white text-black mt-16 rounded-t-[50px] overflow-hidden border-t border-gray-200">
      {/* Background large transparent text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[6rem] md:text-[10rem] font-bold text-black/5 tracking-widest select-none">
          CARBONFORM
        </h1>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
          <FooterCol links={["How it Works", "What's Included", "Gift Superpower"]} />
          <FooterCol links={["Member Login", "Manifesto", "Join the Team", "Superpower Labs"]} />
          <FooterCol links={["For Creators", "For Partners", "For Teams"]} />
          <FooterCol links={["X/Twitter", "Instagram", "LinkedIn"]} />
          <FooterCol links={["Terms", "Privacy Policy", "FAQ", "Contact"]} />
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 text-xs text-gray-500">
          2025 SUPERPOWER HEALTH, INC
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ links }: { links: string[] }) {
  return (
    <div>
      {links.map((link, i) => (
        <FooterLink key={i} href="#">
          {link}
        </FooterLink>
      ))}
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block mb-2 hover:text-orange-500 transition-colors before:content-['›'] before:text-orange-500 before:mr-2"
    >
      {children}
    </Link>
  )
}
