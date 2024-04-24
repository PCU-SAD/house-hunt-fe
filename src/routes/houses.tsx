import HousesPage from '@/pages/houses/Houses'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/houses')({
  component: HousesPage
})
