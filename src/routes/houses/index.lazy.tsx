import { Container, Layout } from '@/components'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/houses/')({
  component: () => (
    <Layout>
      <Container>
        <div>Hello /houses/!</div>
      </Container>
    </Layout>
  )
})
