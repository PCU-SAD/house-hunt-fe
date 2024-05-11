import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { apartmentTypeOptions } from '@/pages/owner/add-new-property/components/NewPropertyForm/components/inputs/ApartmentTypeSelect/ApartmentTypeData'

import { NewPropertyFormType } from '@/pages/owner/add-new-property/components/NewPropertyForm/useNewPropertyForm'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

type ApartmentTypeSelectProps = {}

const ApartmentTypeSelect: FC<ApartmentTypeSelectProps> = () => {
  const form = useFormContext<NewPropertyFormType>()

  return (
    <FormField
      control={form.control}
      name="apartmentType"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Apartment type</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a verified email to display" />
              </SelectTrigger>
            </FormControl>

            <SelectContent className="max-h-[300px]">
              {apartmentTypeOptions.map((option) => (
                <SelectItem value={option.value} key={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default ApartmentTypeSelect
