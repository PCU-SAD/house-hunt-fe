import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export const newPropertyFormSchema = z
  .object({
    title: z.string().min(1, 'Title is required').max(100),
    address: z.string().min(1, 'Address is required').max(100),
    price: z.coerce.string(),
    squareMeters: z.coerce
      .number()
      .min(1, 'Square meters is required')
      .nonnegative()
      .max(1000, 'Max square meters is 1000'),
    type: z.string().min(1, 'Type is required').max(40),
    floorNumber: z.coerce.number(),
    moveInDate: z.date(),
    images_1: z.any(),
    images_2: z.any(),
    images_3: z.any(),
    images_4: z.any(),
    images_5: z.any(),
    images_6: z.any(),
    furnished: z.boolean()
  })
  .superRefine((val, ctx) => {
    const images = [
      val.images_1,
      val.images_2,
      val.images_3,
      val.images_4,
      val.images_5,
      val.images_6
    ]

    const atLeastOneImage = images.some((image) => {
      if (Array.isArray(image)) {
        return image.length > 1
      }

      return image !== undefined
    })

    if (!atLeastOneImage) {
      return ctx.addIssue({
        code: 'custom',
        message: 'At least one image is required',
        path: ['images_1']
      })
    }
  })

export type NewPropertyFormType = z.infer<typeof newPropertyFormSchema>

export function useNewPropertyForm() {
  return useForm<NewPropertyFormType>({
    resolver: zodResolver(newPropertyFormSchema),
    mode: 'onChange',
    defaultValues: {
      title: 'title',
      address: 'address',
      price: '10.0',
      squareMeters: 100,
      type: 'House',
      floorNumber: 2,
      moveInDate: new Date(),
      images_1: undefined,
      images_2: undefined,
      images_3: undefined,
      images_4: undefined,
      images_5: undefined,
      images_6: undefined,
      furnished: false
    }
  })
}
