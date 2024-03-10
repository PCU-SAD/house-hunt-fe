import { createFileRoute } from '@tanstack/react-router'
import { Loader } from 'lucide-react'

export const Route = createFileRoute('/apartments/$id')({
  component: Apartment,
  loader: async () => {
    const res = await new Promise<{ name: string }>((res) =>
      setTimeout(() => res({ name: 'apartment' }), 1000)
    )

    return res
  },
  pendingComponent: () => {
    return (
      <div className="animate-spin">
        <Loader />
      </div>
    )
  }
})

function Apartment() {
  const { id } = Route.useParams()
  const data = Route.useLoaderData()

  return (
    <div>
      Hello /apartments/{id}
      {data.name}
    </div>
  )
}
