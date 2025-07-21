import Link from "next/link";
import React from "react";

const homepageSections = [
  { label: "New Arrival", link: "/store/new-arrivals" },
  { label: "Trending Now", link: "/store/trending-now" },
  { label: "Category", link: "category" },
  { label: "Essentials", link: "/store/essentials" },
];

function HeroSection() {
  return (
    <section className="container mx-auto grid grid-cols-1 items-stretch gap-5 pt-20 pb-14 md:min-h-screen md:grid-cols-3">
      {/* LEFT SECTION */}
      <article className="col-span-2 space-y-5 py-12">
        {/* Homepage Navigation Buttons: Hidden on mobile */}
        <nav
          id="homepage-sections"
          aria-label="Homepage Sections"
          className="hidden items-stretch justify-center border-4 border-black bg-slate-50 p-4 shadow-[4px_4px_0_0_#000] md:flex"
        >
          {homepageSections.map((section, i, arr) => (
            <Link
              key={section.label}
              href={section.link}
              className={`border-2 border-black bg-white px-3 py-1 font-bold shadow-[2px_2px_0_0_#000] transition hover:bg-yellow-100 ${
                i !== arr.length - 1 ? "border-r-0" : ""
              }`}
            >
              {section.label}
            </Link>
          ))}
        </nav>
        {/* Final Sale Banner */}
        <aside
          aria-label="Final Sale Banner"
          className="mx-5 flex max-h-96 flex-col items-center justify-center gap-2 border-4 border-black bg-[#A8A6FF] py-20 text-center shadow-[4px_4px_0_0_#000] md:mx-0 md:py-40"
        >
          <h3 className="text-base text-white md:text-lg">
            FINAL SALE: New styles added!
          </h3>
          <h2 className="text-4xl font-bold text-white md:text-7xl">
            Up to 70% off
          </h2>
          <h3 className="text-base text-white md:text-lg">
            Fresh styles starting ₹399
          </h3>
        </aside>
      </article>

      {/* RIGHT SECTION (Hero Image): Hidden on mobile */}
      <aside
        id="hero-image"
        className="relative col-span-1 hidden h-full md:block"
      >
        <div className="h-full w-full border-4 border-black bg-[#FF9F9F] shadow-[4px_4px_0_0_#000]" />
      </aside>
    </section>
  );
}
export default HeroSection;
