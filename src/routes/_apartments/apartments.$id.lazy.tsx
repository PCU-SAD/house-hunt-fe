import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_apartments/apartments/$id')({
  component: () => <div>Hello /apartments/$id!</div>
})
