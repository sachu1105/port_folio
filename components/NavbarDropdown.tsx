"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function NavbarDropdown() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[100%] max-w-7xl
                 bg-white rounded-[30px] shadow-lg p-8 z-40"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-fr">
        {/* What's Included */}
        <div className="min-w-[200px] max-w-[250px]">
          <Image
            src="/images/mesrati.jpg"
            alt="What's Included"
            width={250}
            height={150}
            className="block w-full h-[150px] object-cover rounded-xl mb-3"
          />

          <h3 className="font-semibold text-lg mb-1">What&apos;s Included</h3>
          <p className="text-gray-600 text-sm">
            Your membership starts with 100+ labs. Here&apos;s everything we
            test.
          </p>
        </div>

        {/* Stories */}
        <div className="min-w-[200px] max-w-[250px]">
          <Image
            src="/images/mesrati.jpg"
            alt="What's Included"
            width={250}
            height={150}
            className="block w-full h-[150px] object-cover rounded-xl mb-3"
          />

          <h3 className="font-semibold text-lg mb-1">Stories</h3>
          <p className="text-gray-600 text-sm">
            Hear what members have to say about their Superpower experience.
          </p>
        </div>

        {/* Our Why */}
        <div className="min-w-[200px] max-w-[250px]">
          <Image
            src="/images/mesrati.jpg"
            alt="What's Included"
            width={250}
            height={150}
            className="block w-full h-[150px] object-cover rounded-xl mb-3"
          />

          <h3 className="font-semibold text-lg mb-1">Our Why</h3>
          <p className="text-gray-600 text-sm">
            Our vision for a better future of health.
          </p>
        </div>

        {/* FAQs */}
        <div className="min-w-[200px] max-w-[250px]">
          <Image
            src="/images/mesrati.jpg"
            alt="What's Included"
            width={250}
            height={150}
            className="block w-full h-[150px] object-cover rounded-xl mb-3"
          />

          <h3 className="font-semibold text-lg mb-1">FAQs</h3>
          <p className="text-gray-600 text-sm">
            Find answers to common questions.
          </p>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-600 border-t pt-4">
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Terms & Conditions</Link>
      </div>
    </motion.div>
  );
}
