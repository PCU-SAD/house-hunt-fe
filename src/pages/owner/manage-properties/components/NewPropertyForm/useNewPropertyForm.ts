import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const propertyFormSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number().positive(),
  location: z.string(),
  image: z.string()
})

export type PropertyFormType = z.infer<typeof propertyFormSchema>

export function usePropertyForm() {
  return useForm<PropertyFormType>({
    resolver: zodResolver(propertyFormSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      description: '',
      price: 0,
      location: '',
      image: ''
    }
  })
}
