import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";
import React from "react";
function NewArrivalsSection() {
  return (
    <section
      id="new-arrivals"
      className="flex flex-col items-center justify-center gap-5 bg-white py-20"
    >
      <h3 className="mb-3 text-center text-2xl font-bold underline underline-offset-2">
        New Arrivals
      </h3>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-full max-w-[90%]"
      >
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="lg:basis-1/6">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Link
        href="/store/new-arrivals"
        className="text-center text-lg font-bold underline hover:scale-105"
      >
        View more
      </Link>
    </section>
  );
}

export default NewArrivalsSection;
