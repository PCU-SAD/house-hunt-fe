/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8KQ90AxfI5Z
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import PriceSlider from '@/pages/properties/components/PropertiesFilters/components/PriceSlider/PriceSlider'

export const MIN_PRICE = 10_000
export const MAX_PRICE = 100_000

const PropertiesFilters = () => {
  return (
    <div className="">
      <h2 className="mb-4 text-lg font-semibold">Filters</h2>
      <div className="space-y-4">
        <PriceSlider />

        <div>
          <h3 className="mb-2 text-base font-medium">Bedrooms</h3>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <h3 className="mb-2 text-base font-medium">Property Type</h3>
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Checkbox id="apartment" />
              Apartment
            </Label>
            <Label className="flex items-center gap-2">
              <Checkbox id="house" />
              House
            </Label>
            <Label className="flex items-center gap-2">
              <Checkbox id="townhouse" />
              Townhouse
            </Label>
            <Label className="flex items-center gap-2">
              <Checkbox id="condo" />
              Condo
            </Label>
            <Label className="flex items-center gap-2">
              <Checkbox id="duplex" />
              Duplex
            </Label>
            <Label className="flex items-center gap-2">
              <Checkbox id="studio" />
              Studio
            </Label>
          </div>
        </div>
        <div>
          <h3 className="mb-2 text-base font-medium">Amenities</h3>
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Checkbox id="pool" />
              Pool
            </Label>
            <Label className="flex items-center gap-2">
              <Checkbox id="gym" />
              Gym
            </Label>
            <Label className="flex items-center gap-2">
              <Checkbox id="parking" />
              Parking
            </Label>
            <Label className="flex items-center gap-2">
              <Checkbox id="balcony" />
              Balcony
            </Label>
            <Label className="flex items-center gap-2">
              <Checkbox id="dishwasher" />
              Dishwasher
            </Label>
          </div>
        </div>
        <div>
          <h3 className="mb-2 text-base font-medium">Neighborhood</h3>
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Checkbox id="downtown" />
              Downtown
            </Label>
            <Label className="flex items-center gap-2">
              <Checkbox id="suburbs" />
              Suburbs
            </Label>
            <Label className="flex items-center gap-2">
              <Checkbox id="beach" />
              Beach
            </Label>
            <Label className="flex items-center gap-2">
              <Checkbox id="city-center" />
              City Center
            </Label>
            <Label className="flex items-center gap-2">
              <Checkbox id="quiet" />
              Quiet
            </Label>
          </div>
        </div>
        <Button className="w-full">Apply Filters</Button>
      </div>
    </div>
  )
}

export default PropertiesFilters
