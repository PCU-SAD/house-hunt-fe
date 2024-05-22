import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

import {
  districts,
  DistrictType
} from '@/pages/owner/add-new-property/components/NewPropertyForm/useNewPropertyForm'
import { useNavigate, useSearch } from '@tanstack/react-router'
import { FC } from 'react'

const DistrictsFilter: FC = () => {
  const { district } = useSearch({
    from: '/properties'
  })

  const navigate = useNavigate({
    from: '/properties'
  })

  function handleChange(value: DistrictType) {
    navigate({
      search: (prev) => ({
        ...prev,
        district: value
      })
    })
  }

  return (
    <div>
      <Label>District</Label>
      <Select onValueChange={handleChange} value={district}>
        <SelectTrigger className="h-8 py-0">
          <SelectValue placeholder="Select your district" />
        </SelectTrigger>

        <SelectContent>
          {districts.map((option) => (
            <SelectItem value={option} key={option}>
              {option.at(0).toUpperCase() + option.slice(1).toLowerCase()}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default DistrictsFilter
