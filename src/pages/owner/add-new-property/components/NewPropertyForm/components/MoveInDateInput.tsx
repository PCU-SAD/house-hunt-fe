import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { NewPropertyFormType } from '@/pages/owner/add-new-property/components/NewPropertyForm/useNewPropertyForm'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

type MoveInDateInputProps = {}

const MoveInDateInput: FC<MoveInDateInputProps> = () => {
  const form = useFormContext<NewPropertyFormType>()

  return (
    <FormField
      name="moveInDate"
      control={form.control}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>Move in date</FormLabel>

            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'flex w-[200px] justify-start gap-2 pl-3 text-left font-normal',
                      !field.value && 'text-muted-foreground'
                    )}>
                    <CalendarIcon className="h-4 w-4 opacity-50" />
                    {field.value ? (
                      format(field.value, 'dd.MM.yyyy')
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={(date) => date < new Date()}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}

export default MoveInDateInput
