import { SignpostBigIcon, StarsIcon } from "lucide-react";
import React from "react";

type Props = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
    gender: string | undefined;
  }>;
};

const categories = [
  {
    id: 1,
    link: "new-arrivals",
    label: "New Arrivals",
    desc: "The key to comfort and fusion.",
    imgSrc1: "/images/male-model",
    imgSrc12: "/images/male-model",
  },
  {
    id: 2,
    link: "trending-now",
    label: "Trending Now",
    desc: "Stay ahead with the latest trends.",
    imgSrc1: "/images/trending-now-1",
    imgSrc12: "/images/trending-now-2",
  },
  {
    id: 3,
    link: "essentials",
    label: "Essentials",
    desc: "Must-haves for every wardrobe.",
    imgSrc1: "/images/essentials-1",
    imgSrc12: "/images/essentials-2",
  },
  {
    id: 4,
    link: "street-style",
    label: "Street Style",
    desc: "Urban styles for every day.",
    imgSrc1: "/images/streetwear-1",
    imgSrc12: "/images/streetwear-2",
  },
  {
    id: 5,
    link: "casuals",
    label: "Casuals",
    desc: "Relaxed fits for any occasion.",
    imgSrc1: "/images/casuals-1",
    imgSrc12: "/images/casuals-2",
  },
  {
    id: 6,
    link: "formals",
    label: "Formals",
    desc: "Dress sharp for special moments.",
    imgSrc1: "/images/formals-1",
    imgSrc12: "/images/formals-2",
  },
];

async function StorePage({ params, searchParams }: Props) {
  const { slug } = await params;
  const filters = await searchParams;

  const selectedCategory = categories.find((categorie) => {
    return categorie.link == slug;
  });

  return (
    <main className="min-h-screen bg-white pt-20 pb-14 font-sans">
      <section className="container mx-auto flex flex-col gap-5 lg:flex-row">
        {/* Left side (2 columns stacked vertically on large screens) */}
        <div className="flex flex-1 gap-5">
          <div className="h-full flex-1 bg-red-300">1</div>
          <div className="h-full flex-1 bg-red-300">2</div>
        </div>
        {/* Right side (2 small boxes stacked vertically) */}
        <div className="flex flex-col gap-5">
          <div className="relative flex flex-[0.5] flex-col border-2 border-black bg-[#D2CAC7] p-10">
            <p className="text-2xl">{selectedCategory?.label}</p>
            <SignpostBigIcon className="absolute right-5 bottom-0 h-12 w-20 stroke-1" />
          </div>
          <div className="relative flex flex-[0.5] flex-col border-2 border-black bg-yellow-400 p-10">
            <p className="text-2xl">{selectedCategory?.desc}</p>
            <StarsIcon className="absolute right-5 bottom-0 h-10 w-10 stroke-1" />
          </div>
        </div>
      </section>
      <section className="container mx-auto my-5 w-full lg:flex-row">
        <div className="font-rubik-mono border-2 border-black bg-[#A7A6FF] px-5 py-5 text-center font-medium md:px-10 md:text-4xl">{`${selectedCategory?.label.toUpperCase()} COLLECTION`}</div>
      </section>
      {/* <Suspense fallback={<>Loading...</>}>Some other component</Suspense> */}
    </main>
  );
}

export default StorePage;
