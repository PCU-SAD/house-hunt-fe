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

type PriceSortProps = {}

type SelectItemValue = 'price_asc' | 'price_desc' | 'createdAt'

const PriceSort: FC<PriceSortProps> = () => {
  const { sort } = useSearch({
    from: '/properties'
  })

  const selectValue =
    sort.key === 'createdAt' ? 'createdAt' : sort.key + '_' + sort.order

  const navigate = useNavigate({
    from: '/properties'
  })

  function handleChange(value: SelectItemValue) {
    const sortArr = value.split('_')

    const sortKey = value === 'createdAt' ? 'createdAt' : sortArr[0]

    const sortValue = value === 'createdAt' ? 'desc' : sortArr[1]

    navigate({
      resetScroll: false,
      search: (prev) => {
        return {
          ...prev,
          sort: {
            key: sortKey,
            order: sortValue
          } as SortSearchType
        }
      }
    })
  }

  return (
    <div className="min-w-[220px]">
      <Label className="mb-2 inline-block">Sort</Label>
      <Select onValueChange={handleChange} value={selectValue}>
        <SelectTrigger className="h-8 py-0">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="price_asc">From cheap to expensive</SelectItem>
          <SelectItem value="price_desc">From expensive to cheap</SelectItem>
          <SelectItem value="createdAt">Newest</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default PriceSort
