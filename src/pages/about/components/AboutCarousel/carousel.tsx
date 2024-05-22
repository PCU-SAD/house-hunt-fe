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

const images = [Image1, Image2, Image3, Image4]

export const AboutCarousel: FC = () => {
  return (
    <Carousel
      className="max-w-[500px]"
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
        {images.map((image, index) => (
          <CarouselItem key={index} className="relative">
            <div className="relative">
              <img
                alt={`Real Estate ${index + 1}`}
                className="h-[500px] w-full rounded-xl object-cover"
                src={image}></img>
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
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white/80 p-2 transition duration-300 hover:bg-white" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white/80 p-2 transition duration-300 hover:bg-white" />
    </Carousel>
  )
}

export default AboutCarousel
