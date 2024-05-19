import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { cn } from '@/lib/utils'
import { apartmentTypeOptions } from '@/pages/owner/add-new-property/components/NewPropertyForm/components/inputs/ApartmentTypeSelect/ApartmentTypeData'
import { apartmentTypeSchema } from '@/pages/owner/add-new-property/components/NewPropertyForm/useNewPropertyForm'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate, useSearch } from '@tanstack/react-router'
import { ChevronUp } from 'lucide-react'
import { FC, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type PropertyTypeFilerProps = {}

const FormSchema = z.object({
  items: z.array(apartmentTypeSchema).refine((items) => {
    return items.length > 0
  }, 'At least one item must be selected')
})

const PropertyTypeFiler: FC<PropertyTypeFilerProps> = () => {
  const [open, setOpen] = useState(false)
  const { apartmentType } = useSearch({
    from: '/properties'
  })

  const navigate = useNavigate({
    from: '/properties'
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: 'onChange',
    values: {
      items: apartmentType
    }
  })

  const values = form.watch()

  useEffect(() => {
    navigate({
      search: (prev) => ({
        ...prev,
        apartmentType: values.items
      })
    })
  }, [navigate, values.items])

  return (
    <div>
      <Form {...form}>
        <form>
          <FormField
            control={form.control}
            name="items"
            render={() => (
              <FormItem>
                <DropdownMenu onOpenChange={setOpen} open={open}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="noSize"
                      className="h-8 justify-between px-2 py-0"
                      aria-label="Open menu">
                      <span className="sr-only">Open menu</span>
                      Apartment type
                      <ChevronUp
                        className={cn(
                          'h-4 w-4 transition-transform',
                          open && 'rotate-180'
                        )}
                      />
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="start"
                    className="flex max-h-[420px] flex-col gap-4 overflow-auto p-4 md:gap-3">
                    {apartmentTypeOptions.map((option) => (
                      <FormField
                        key={option.value}
                        control={form.control}
                        name="items"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={option.value}
                              className="flex flex-row items-start space-x-2 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(option.value)}
                                  onCheckedChange={(checked) => {
                                    if (!checked && values.items.length === 1)
                                      return

                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          option.value
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== option.value
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {option.label}
                              </FormLabel>

                              <FormMessage />
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  )
}

export default PropertyTypeFiler
