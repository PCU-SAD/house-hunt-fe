import { Container, Layout } from '@/components'
import { Link, Outlet, createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_apartments/apartments')({
  component: () => (
    <Layout>
      <Container>
        <div>Apartments page/!</div>

        <Link
          to="/apartments/$id"
          className="mt-4 block text-blue-500 hover:underline"
          params={{
            id: '123'
          }}>
          Go to Apartments / 123
        </Link>

        <Outlet />
      </Container>
    </Layout>
  )
})
