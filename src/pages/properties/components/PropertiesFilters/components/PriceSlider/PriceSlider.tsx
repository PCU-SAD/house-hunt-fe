import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import {
  MAX_PRICE,
  MIN_PRICE
} from '@/pages/properties/components/PropertiesFilters/PropertiesFilters'
import { czkCurrencyFormatter } from '@/utils/czkCurrencyFormatter'
import { useNavigate, useSearch } from '@tanstack/react-router'
import { ArrowBigUp } from 'lucide-react'
import { FC } from 'react'

const STEP = 1000

type RangeType = [number, number]

const PriceSlider: FC = () => {
  const { minPrice, maxPrice, adType } = useSearch({
    from: '/properties'
  })

  const isSale = adType === 'SALE'
  const maxPriceValue = isSale ? MAX_PRICE : 100_000

  const navigate = useNavigate({
    from: '/properties'
  })

  function handleChange(range: RangeType) {
    navigate({
      search: (prev) => ({
        ...prev,
        minPrice: range[0],
        maxPrice: range[1]
      })
    })
  }

  return (
    <div className="mb-1 mt-2" data-vaul-no-drag>
      <Label>Price range</Label>

      <div className="mt-2 flex items-center gap-4 text-sm">
        <p>{czkCurrencyFormatter.format(minPrice)}</p>—
        <p>{czkCurrencyFormatter.format(maxPrice)}</p>
      </div>

      <div className="mt-2">
        <Slider
          minStepsBetweenThumbs={1}
          step={isSale ? 10_000 : STEP}
          min={MIN_PRICE}
          max={maxPriceValue}
          value={[minPrice, maxPrice]}
          onValueChange={handleChange}
        />

        {isSale && (
          <p className="mt-2 hidden text-sm text-muted-foreground md:block">
            <span className="inline-block">
              Use arrow keys or hold
              <ArrowBigUp className="ml-1 inline-block h-4 w-4" />
            </span>
            <kbd className="mx-1 inline-block rounded bg-muted px-1 py-0.5 text-xs uppercase">
              Shift
            </kbd>
            + arrow for precise prices
          </p>
        )}
      </div>
    </div>
  )
}

export default PriceSlider
