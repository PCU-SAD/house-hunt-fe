import { Container, Layout } from '@/components'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/houses')({
  component: () => (
    <Layout>
      <Container>
        <div>Hello houses</div>
      </Container>
    </Layout>
  )
})
