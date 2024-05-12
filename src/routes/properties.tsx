import { PropertiesPage } from '@/pages'
import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

const PropertiesSearchParamsSchema = z.object({
  page: z.number().int().catch(1),
  sort: z.enum(['asc', 'desc']).optional()
})

export const Route = createFileRoute('/properties')({
  validateSearch: (search) => {
    return PropertiesSearchParamsSchema.parse(search)
  },
  component: PropertiesPage
})
