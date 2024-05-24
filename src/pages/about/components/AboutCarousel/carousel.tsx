import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { FC } from 'react'

import Image1 from '/placeholder1.jpeg'
import Image2 from '/placeholder2.jpeg'
import Image3 from '/placeholder3.jpeg'
import Image4 from '/placeholder4.jpeg'

export const AboutCarousel: FC = () => {
  return (
    <Carousel
      className="max-w-[500px] min-w-[300px]"
      opts={{
        loop: true
      }}
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnInteraction: true
        })
      ]}>
      <CarouselContent>
        <CarouselItem className="relative">
          <div className="relative">
            <img
              alt="Real Estate 1"
              className="h-[500px] w-full rounded-xl object-cover"
              src={Image1}
            ></img>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-gray-900/50 to-transparent" />
          </div>
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Find Your Dream Home
            </h2>
            <p className="mt-2 max-w-md text-gray-200 md:text-lg">
              Discover the perfect property for you and your family.
            </p>
          </div>
        </CarouselItem>

        <CarouselItem className="relative">
          <div className="relative">
            <img
              alt="Real Estate 2"
              className="h-[500px] w-full rounded-xl object-cover"
              src={Image2}
            ></img>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-gray-900/50 to-transparent" />
          </div>
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Luxury Living
            </h2>
            <p className="mt-2 max-w-md text-gray-200 md:text-lg">
              Experience the epitome of luxury in our high-end properties.
            </p>
          </div>
        </CarouselItem>

        <CarouselItem className="relative">
          <div className="relative">
            <img
              alt="Real Estate 3"
              className="h-[500px] w-full rounded-xl object-cover"
              src={Image3}
            ></img>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-gray-900/50 to-transparent" />
          </div>
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Modern Amenities
            </h2>
            <p className="mt-2 max-w-md text-gray-200 md:text-lg">
              Enjoy state-of-the-art amenities in our contemporary properties.
            </p>
          </div>
        </CarouselItem>

        <CarouselItem className="relative">
          <div className="relative">
            <img
              alt="Real Estate 4"
              className="h-[500px] w-full rounded-xl object-cover"
              src={Image4}
            ></img>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-gray-900/50 to-transparent" />
          </div>
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Serene Locations
            </h2>
            <p className="mt-2 max-w-md text-gray-200 md:text-lg">
              Discover tranquil properties in the most desirable locations.
            </p>
          </div>
        </CarouselItem>
      </CarouselContent>

      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white/80 p-2 transition duration-300 hover:bg-white" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white/80 p-2 transition duration-300 hover:bg-white" />
    </Carousel>
  )
}

export default AboutCarousel
