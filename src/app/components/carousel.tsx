import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";

import p1 from "../images/pic1.png";
import p4 from "../images/pic4.png";

const Page = () => {
  const images = [p4, p1];

  return (
    <Carousel
      className="w-screen relative"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="flex h-full">
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className="relative flex items-center justify-center w-full h-full"
          >
            <div className="w-full h-full relative">
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                unoptimized
                className="w-full h-full object-cover"
              />

              <CarouselPrevious
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-4 rounded-full shadow-lg opacity-30 hover:opacity-70 transition-all ease-in z-10"
              />
              <CarouselNext
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-4 rounded-full shadow-lg opacity-30 hover:opacity-70 transition-all ease-in z-10"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Page;
