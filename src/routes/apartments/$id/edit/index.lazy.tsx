import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/apartments/$id/edit/')({
  component: Edit
})

function Edit() {
  const { id } = Route.useParams()

  return <div>Hello /apartments/{id}/edit/!</div>
}
