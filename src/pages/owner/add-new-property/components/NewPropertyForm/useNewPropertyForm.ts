import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const apartmentTypeSchema = z.enum([
  'ONE_KK',
  'ONE_ONE',
  'TWO_KK',
  'TWO_ONE',
  'THREE_KK',
  'THREE_ONE',
  'FOUR_KK',
  'FOUR_ONE',
  'FIVE_KK',
  'FIVE_ONE',
  'SIX_KK',
  'SIX_ONE',
  'SEVEN_KK',
  'SEVEN_ONE'
])

export type ApartmentType = z.infer<typeof apartmentTypeSchema>

const adTypeSchema = z.enum(['RENTAL', 'SALE'])

export type AdType = z.infer<typeof adTypeSchema>

const FurnishedSchema = z.enum(['FURNISHED', 'SEMI_FURNISHED', 'UNFURNISHED'])

export type FurnishedType = z.infer<typeof FurnishedSchema>

export const newPropertyFormSchema = z
  .object({
    title: z
      .string()
      .min(5, 'Title must be at least 5 characters long')
      .max(100, 'Title must be at most 100 characters long'),
    address: z
      .string()
      .min(5, 'Address must be at least 5 characters long')
      .max(100),
    price: z.coerce.number().nonnegative().min(1, 'Price is required'),
    squareMeters: z.coerce
      .number()
      .min(1, 'Square meters is required')
      .nonnegative()
      .max(1000, 'Max square meters is 1000'),
    description: z.string().min(1, 'Description is required').max(300),
    isFurnished: FurnishedSchema,
    numberOfRooms: z.coerce
      .number()
      .int()
      .min(1, 'Number of rooms is required')
      .max(50, 'Max number of rooms is 50'),
    floorNumber: z.coerce
      .number()
      .int()
      .min(-10, 'Min floor number is -10')
      .max(140, 'Max floor number is 140'),
    availableFrom: z.date(),
    adType: adTypeSchema,
    apartmentType: apartmentTypeSchema,
    ownerEmail: z.string().email()
  })
  // .superRefine((val, ctx) => {
    // const images = [
    //   val.images_1,
    //   val.images_2,
    //   val.images_3,
    //   val.images_4,
    //   val.images_5,
    //   val.images_6
    // ]
    // const atLeastOneImage = images.some((image) => {
    //   if (Array.isArray(image)) {
    //     return image.length > 1
    //   }
    //   return image !== undefined
    // })
    // if (!atLeastOneImage) {
    //   return ctx.addIssue({
    //     code: 'custom',
    //     message: 'At least one image is required',
    //     path: ['images_1']
    //   })
    // }
  // })

export type NewPropertyFormType = z.infer<typeof newPropertyFormSchema>

export function useNewPropertyForm() {
  return useForm<NewPropertyFormType>({
    resolver: zodResolver(newPropertyFormSchema),
    mode: 'onChange',
    defaultValues: {
      title: 'title',
      address: 'address',
      price: 10.0,
      squareMeters: 10,
      description: 'description',
      isFurnished: 'UNFURNISHED',
      numberOfRooms: 1,
      floorNumber: 1,
      availableFrom: new Date(),
      adType: 'RENTAL',
      apartmentType: 'ONE_KK',
      ownerEmail: ''
    }
  })
}
