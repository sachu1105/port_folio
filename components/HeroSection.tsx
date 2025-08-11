// components/HeroSection.tsx
import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden ">
      {/* Video Background */}
      <video
        src="https://superpower-website.b-cdn.net/superpower-100-year-potential-video-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover px-4 py-4 rounded-4xl"
      />

      {/* Overlay for text readability */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white min-h-[calc(100vh-80px)] px-4">
        {/* <h1 className="text-4xl sm:text-6xl font-bold max-w-3xl leading-tight">
          Every body has <br /> 100 year potential
        </h1>
        <p className="mt-4 text-lg">
          Superpower is your new health intelligence
        </p>
        <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-md">
          Start Testing
        </button> */}

        {/* Floating info card */}
        <div className="absolute bottom-8 right-6 bg-black rounded-lg px-6 py-4 flex items-center gap-3 shadow-lg">
          <Image
            src="/images/mesrati.jpg" // replace with your actual path
            alt="Lab Icon"
            width={30}
            height={30}
            className="rounded-md"
          />
          <div>
            <p className="text-sm font-semibold text-white">
              It starts with 100+ labs
            </p>
            <p className="text-xs text-gray-300">Unlock it for $499</p>
          </div>
        </div>
      </div>
    </section>
  );
}
