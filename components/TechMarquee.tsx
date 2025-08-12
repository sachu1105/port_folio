"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const techStack = [
  { src: "/images/nextjss-.png", alt: "Next.js" },
  { src: "/images/reactr.png", alt: "React" },
  { src: "/images/tailwinder.png", alt: "Tailwind CSS" },
  { src: "/images/mongodb.png", alt: "MongoDB" },
  { src: "/images/docker.png", alt: "Docker" },
];

export default function TechMarquee() {
  return (
    <section className="relative py-8 bg-[#efeeec] overflow-hidden">
      {/* Side Text */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-40 text-sm font-semibold text-black leading-tight">
        Working with <br /> Modern Technologies
      </div>

      {/* Left Frosted Blur with Fade */}
      <div className="absolute left-0 top-0 h-full w-56 z-20 bg-[#efeeec]/40 backdrop-blur-md bg-gradient-to-r from-[#efeeec]/60 to-transparent" />

      {/* Right Frosted Blur with Fade */}
      <div className="absolute right-0 top-0 h-full w-56 z-20 bg-[#efeeec]/40 backdrop-blur-md bg-gradient-to-l from-[#efeeec]/60 to-transparent" />

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-14 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {[...techStack, ...techStack].map((tech, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[150px] h-20"
            >
              <Image
                src={tech.src}
                alt={tech.alt}
                width={100}
                height={100}
                className="object-contain grayscale"
              />
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
