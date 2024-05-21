
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

import Image1 from "/placeholder1.jpeg";
import Image2 from "/placeholder2.jpeg";
import Image3 from "/placeholder3.jpeg";
import Image4 from "/placeholder4.jpeg";

const images = [Image1, Image2, Image3, Image4];

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <Carousel className="w-full max-w-[1200px] mx-auto rounded-xl overflow-hidden shadow-lg">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className={index === currentIndex ? "block" : "hidden"}>
            <div className="relative">
              <img
                alt={`Real Estate ${index + 1}`}
                className="w-full h-[600px] object-cover transition duration-500 ease-in-out transform hover:scale-105"
                height="600"
                src={image}
                width="1200"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                <h2 className="text-3xl font-bold text-white md:text-4xl">
                  Find Your Dream Home
                </h2>
                <p className="mt-2 max-w-md text-gray-200 md:text-lg">
                  Discover the perfect property for you and your family.
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition duration-300"
        onClick={handlePrevious}
      />
      <CarouselNext
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition duration-300"
        onClick={handleNext}
      />
    </Carousel>
  );
}
