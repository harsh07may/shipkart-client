import Image from "next/image";
import Link from "next/link";
import React from "react";

const homepageSections = [
  "New Arrival",
  "Trending Now",
  "Category",
  "Essentials",
];

const genderCategorySections = [
  {
    label: "MEN",
    img: {
      src: "https://img.icons8.com/pulsar-line/48/boy.png",
      alt: "boys",
    },
  },
  {
    label: "WOMEN",
    img: {
      src: "https://img.icons8.com/pulsar-line/48/girl.png",
      alt: "girls",
    },
  },
  {
    label: "KIDS",
    img: {
      src: "https://img.icons8.com/windows/32/babys-room.png",
      alt: "kids",
    },
  },
];

function HeroSection() {
  return (
    <section className="container mx-auto grid grid-cols-1 items-stretch gap-5 pt-20 pb-14 md:min-h-screen md:grid-cols-3">
      {/* LEFT SECTION */}
      <article className="col-span-2 space-y-5 py-12">
        {/* Gender Category */}
        <nav
          id="category-gender"
          aria-label="Gender Categories"
          className="flex items-center justify-start gap-5"
        >
          {genderCategorySections.map(({ label, img }) => (
            <button
              key={label}
              type="button"
              className="group flex-center h-10 w-10 rounded-full border-2 transition hover:w-24 hover:bg-[#A8A6FF]"
              aria-label={label}
            >
              <Image width="32" height="32" src={img.src} alt={img.alt} />
              <span className="hidden group-hover:block">{label}</span>
            </button>
          ))}
        </nav>

        {/* Homepage Navigation Buttons: Hidden on mobile */}
        <nav
          id="homepage-sections"
          aria-label="Homepage Sections"
          className="hidden items-stretch justify-center border-4 border-black bg-slate-50 p-4 shadow-[4px_4px_0_0_#000] md:flex"
        >
          {homepageSections.map((label, i, arr) => (
            <Link
              key={label}
              href="#"
              className={`border-2 border-black bg-white px-3 py-1 font-bold shadow-[2px_2px_0_0_#000] transition hover:bg-yellow-100 ${
                i !== arr.length - 1 ? "border-r-0" : ""
              }`}
            >
              {label}
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
