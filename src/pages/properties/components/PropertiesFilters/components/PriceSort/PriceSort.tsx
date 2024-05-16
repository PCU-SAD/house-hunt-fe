import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { SortSearchType } from '@/routes/properties'
import { useNavigate, useSearch } from '@tanstack/react-router'
import { FC } from 'react'

type PriceSortProps = {
  applyFilters: () => void
}

const PriceSort: FC<PriceSortProps> = ({ applyFilters }) => {
  const { sort } = useSearch({
    from: '/properties'
  })

  const navigate = useNavigate({
    from: '/properties'
  })

  function handleChange(value: SortSearchType) {
    navigate({
      search: (prev) => {
        return {
          ...prev,
          sort: value
        }
      }
    })

    applyFilters()
  }

  return (
    <div>
      <Label className="mb-2 inline-block">Sort</Label>
      <Select onValueChange={handleChange} value={sort}>
        <SelectTrigger className="h-8 py-0">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="ASC">From expensive to cheap</SelectItem>
          <SelectItem value="DESC">From cheap to expensive</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default PriceSort
