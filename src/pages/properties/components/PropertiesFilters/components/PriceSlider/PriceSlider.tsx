import { Slider } from '@/components/ui/slider'
import { Typography } from '@/components/ui/typography'
import {
  MAX_PRICE,
  MIN_PRICE
} from '@/pages/properties/components/PropertiesFilters/PropertiesFilters'
import { czkCurrencyFormatter } from '@/utils/czkCurrencyFormatter'
import { useNavigate, useSearch } from '@tanstack/react-router'
import { FC } from 'react'

const STEP = 1000

type RangeType = [number, number]

const PriceSlider: FC = () => {
  const { minPrice, maxPrice } = useSearch({
    from: '/properties'
  })

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
    <div>
      <Typography variant="h4">Price range</Typography>

      <div className="mt-2 flex items-center gap-4">
        <p>{czkCurrencyFormatter.format(minPrice)}</p>—
        <p>{czkCurrencyFormatter.format(maxPrice)}</p>
      </div>

      <div className="mt-2">
        <Slider
          minStepsBetweenThumbs={1}
          step={STEP}
          min={MIN_PRICE}
          max={MAX_PRICE}
          defaultValue={[minPrice, maxPrice]}
          onValueChange={handleChange}
        />
      </div>
    </div>
  )
}

export default PriceSlider
