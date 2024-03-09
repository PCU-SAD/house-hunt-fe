import { ErrorPage } from '@/pages'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$')({
  component: ErrorPage
})
