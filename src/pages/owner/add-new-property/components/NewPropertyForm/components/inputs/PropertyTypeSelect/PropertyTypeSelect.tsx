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
import { propertyTypeOptions } from '@/pages/owner/add-new-property/components/NewPropertyForm/components/inputs/PropertyTypeSelect/propertyTypeData'
import { NewPropertyFormType } from '@/pages/owner/add-new-property/components/NewPropertyForm/useNewPropertyForm'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

type PropertyTypeSelectProps = {}

const PropertyTypeSelect: FC<PropertyTypeSelectProps> = () => {
  const form = useFormContext<NewPropertyFormType>()

  return (
    <FormField
      control={form.control}
      name="adType"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Type</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a verified email to display" />
              </SelectTrigger>
            </FormControl>

            <SelectContent>
              {propertyTypeOptions.map((option) => (
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

export default PropertyTypeSelect
