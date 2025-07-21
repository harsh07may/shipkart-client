import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({
  title,
  src,
  className = "",
  textSize = "text-xl md:text-3xl",
  link,
}: {
  title: string;
  src: string;
  className?: string;
  textSize?: string;
  link: string;
}) => (
  <Link
    href={link}
    className={`group relative aspect-[2.35/1] overflow-hidden bg-black ${className}`}
  >
    <Image
      src={src}
      fill
      alt={title}
      className="object-cover opacity-80 transition-transform duration-300 group-hover:scale-110 group-hover:blur-xs"
    />
    <h2
      className={`absolute inset-0 flex items-center justify-center font-extrabold text-white ${textSize}`}
    >
      {title}
    </h2>
  </Link>
);

export default function CategorySection() {
  return (
    <section className="relative flex items-center justify-center bg-white py-20">
      {/* Background Grid */}
      <Image
        src="/category-background.png"
        alt="background"
        fill
        className="absolute inset-0 z-0 object-cover"
      />

      {/* Foreground Grid */}
      <div className="relative z-10 grid w-[90%] max-w-7xl grid-cols-1 gap-5 md:grid-cols-3">
        {/* Left Card */}
        <CategoryCard
          title="STREET STYLE"
          src="/images/mens-streetwear.png"
          className="md:col-span-2"
          textSize="text-2xl md:text-4xl"
          link="/store/street-style"
        />

        {/* Right Column */}
        <div className="flex flex-col gap-4 md:h-full">
          <CategoryCard
            title="FORMALS"
            src="/images/mens-formals.png"
            className="flex-1"
            link="/store/formals"
          />
          <CategoryCard
            title="CASUALS"
            src="/images/mens-streetwear.png"
            className="flex-1"
            link="/store/casuals"
          />
        </div>
      </div>
    </section>
  );
}
