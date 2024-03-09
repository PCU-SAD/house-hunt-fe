import { Container, Layout } from '@/components'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/apartments/$id/')({
  component: Apartment
})

function Apartment() {
  const { id } = Route.useParams()

  return (
    <Layout>
      <Container>
        <div>Hello /apartments/{id}!</div>
      </Container>
    </Layout>
  )
}
