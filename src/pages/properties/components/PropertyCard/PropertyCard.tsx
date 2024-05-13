import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { propertyService } from '@/services/property-service/property-service'
import { PropertyType } from '@/services/property-service/types'
import { useQuery } from '@tanstack/react-query'
import {
  AlertCircle,
  BathIcon,
  BedIcon,
  CurrencyIcon,
  HomeIcon,
  LocateIcon,
  RulerIcon,
  WifiIcon
} from 'lucide-react'
import { FC } from 'react'

type PropertyCardProps = {
  property: PropertyType
}

const PropertyCard: FC<PropertyCardProps> = ({ property }) => {
  const {
    isLoading,
    data: images,
    isError
  } = useQuery({
    queryKey: ['property-image', property.id],
    queryFn: () => propertyService.getPropertyImages(property.id),
    retry: 1
  })

  const hasError = isError || images?.length == 0 || images == null

  return (
    <Card className="h-full w-full">
      <CardHeader className="">
        {isLoading ? (
          <Skeleton className="h-48 w-full rounded-md" />
        ) : hasError ? (
          <div className="flex min-h-52 w-full flex-col items-center justify-center rounded-md">
            <AlertCircle className="h-10 w-10 text-red-500" />
            <p className="mt-2 text-sm text-muted-foreground">
              Something went wrong
            </p>
          </div>
        ) : (
          <img
            alt="Property Image"
            className="h-full min-h-52 w-full rounded-md object-contain"
            src={`data:image/;base64,${images[0]}`}
          />
        )}
      </CardHeader>
      <CardContent className="space-y-4 p-4 sm:p-6">
        <div>
          <h3 className="text-2xl font-bold">{property.title}</h3>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            {property.description}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <HomeIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span>3 BHK</span>
          </div>
          <div className="flex items-center gap-2">
            <RulerIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span>1200 sq ft</span>
          </div>
          <div className="flex items-center gap-2">
            <LocateIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span>Old Town, Prague</span>
          </div>
          <div className="flex items-center gap-2">
            <CurrencyIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span>$2,500/month</span>
          </div>
          <div className="flex items-center gap-2">
            <BedIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span>3 Bedrooms</span>
          </div>
          <div className="flex items-center gap-2">
            <BathIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span>2 Bathrooms</span>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-bold">Amenities</h4>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            <li className="flex items-center gap-2">
              <WifiIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span>High-speed WiFi</span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

export default PropertyCard
