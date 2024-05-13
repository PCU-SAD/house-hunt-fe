import { PropertiesPage } from '@/pages'
import {
  MAX_PRICE,
  MIN_PRICE
} from '@/pages/properties/components/PropertiesFilters/PropertiesFilters'
import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

const PropertiesSearchParamsSchema = z.object({
  page: z.number().int().catch(1),
  sort: z.enum(['asc', 'desc']).optional(),
  minPrice: z.number().int().min(MIN_PRICE).max(MAX_PRICE).catch(MIN_PRICE),
  maxPrice: z.number().int().min(MIN_PRICE).max(MAX_PRICE).catch(MAX_PRICE)
})

export type PropertySearchParams = z.infer<typeof PropertiesSearchParamsSchema>

export const Route = createFileRoute('/properties')({
  validateSearch: (search) => {
    return PropertiesSearchParamsSchema.parse(search)
  },
  component: PropertiesPage
})
