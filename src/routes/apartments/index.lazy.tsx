import { Container, Layout } from '@/components'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/apartments/')({
  component: () => (
    <Layout>
      <Container>
        <div>Hello /apartments/!</div>
      </Container>
    </Layout>
  )
})
