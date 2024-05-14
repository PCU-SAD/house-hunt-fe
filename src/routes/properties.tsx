import { PropertiesPage } from '@/pages'
import { ApartmentType, apartmentTypeSchema } from '@/pages/owner/add-new-property/components/NewPropertyForm/useNewPropertyForm'
import {
  MAX_PRICE,
  MIN_PRICE
} from '@/pages/properties/components/PropertiesFilters/PropertiesFilters'
import { URL_SEARCH_DATE_FORMAT } from '@/utils/consts'
import { createFileRoute } from '@tanstack/react-router'
import { formatDate } from 'date-fns'
import { z } from 'zod'

const IsFurnishedSearchSchema = z
  .enum(['FURNISHED', 'SEMI_FURNISHED', 'UNFURNISHED', 'ALL'])
  .catch('ALL')

export type IsFurnishedSearchType = z.infer<typeof IsFurnishedSearchSchema>
const defaultApartmentTypes: ApartmentType[] = ['ONE_KK', 'TWO_KK', 'ONE_ONE', 'TWO_KK', 'TWO_ONE']

const PropertiesSearchParamsSchema = z.object({
  page: z.number().int().catch(1),
  sort: z.enum(['asc', 'desc']).optional(),
  minPrice: z.number().int().min(MIN_PRICE).max(MAX_PRICE).catch(MIN_PRICE),
  maxPrice: z.number().int().min(MIN_PRICE).max(MAX_PRICE).catch(MAX_PRICE),
  isFurnished: IsFurnishedSearchSchema,
  availableFrom: z
    .string()
    .refine((value) => {
      const date = new Date(value)
      return !isNaN(date.getTime())
    })
    .catch(formatDate(new Date(), URL_SEARCH_DATE_FORMAT)),
  minRooms: z.number().int().min(1).max(50).catch(1),
  maxRooms: z.number().int().min(1).max(50).catch(5),
  apartmentType: z.array(apartmentTypeSchema).catch(defaultApartmentTypes)
})

export type PropertySearchParams = z.infer<typeof PropertiesSearchParamsSchema>

export const Route = createFileRoute('/properties')({
  validateSearch: (search) => {
    return PropertiesSearchParamsSchema.parse(search)
  },
  component: PropertiesPage
})
