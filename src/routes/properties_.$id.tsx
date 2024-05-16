import { Property } from '@/pages'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/properties/$id')({
  component: Property
})
