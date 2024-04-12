import { createFileRoute, notFound } from '@tanstack/react-router'
import { Loader } from 'lucide-react'

export const Route = createFileRoute('/apartments/$id')({
  component: Apartment,
  loader: async (props) => {
    const res = await new Promise<{ name: string }>((res, rej) => {
      return setTimeout(() => {
        if (props.params.id === '123') {
          rej(notFound())
        }

        res({ name: 'apartment' }), 2_000
      })
    })

    return res
  },
  pendingComponent: () => {
    return (
      <div className="h-10 w-10">
        <Loader className="animate-spin duration-150" />
      </div>
    )
  },
  notFoundComponent: () => <div>Requested apartment does not exist</div>
})

function Apartment() {
  const { id } = Route.useParams()
  const data = Route.useLoaderData()

  return (
    <div>
      Apartments child {id} {data.name}
    </div>
  )
}
