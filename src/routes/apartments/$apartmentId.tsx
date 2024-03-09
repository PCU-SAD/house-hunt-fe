import { Container, Layout } from '@/components'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/apartments/$apartmentId')({
  component: Apartment
})

function Apartment() {
  const id = Route.useParams()

  return (
    <Layout>
      <Container>
        <div>Hello /apartments/{id.apartmentId}!</div>
      </Container>
    </Layout>
  )
}
