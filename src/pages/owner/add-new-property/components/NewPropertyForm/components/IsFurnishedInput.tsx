import {
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form'
import { Switch } from '@/components/ui/switch'
import { NewPropertyFormType } from '@/pages/owner/add-new-property/components/NewPropertyForm/useNewPropertyForm'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

type IsFurnishedInputProps = {}

const IsFurnishedInput: FC<IsFurnishedInputProps> = () => {
  const form = useFormContext<NewPropertyFormType>()

  return (
    <FormField
      control={form.control}
      name="furnished"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Furnished</FormLabel>

          <FormControl className="mt-2">
            <Switch checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
        </FormItem>
      )}
    />
  )
}

export default IsFurnishedInput
