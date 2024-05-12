import { Container, Layout } from '@/components/common'
import { Button } from '@/components/ui/button'
import { Link, Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/apartments')({
  component: () => (
    <Layout>
      <Container>
        <div>Apartments parent page</div>

        <div className="flex gap-2">
          <Button asChild variant="outline">
            <Link
              to="/apartments/$id"
              params={{
                id: '123'
              }}
            >
              Go to non existent apartment
            </Link>
          </Button>

          <Button asChild variant="outline">
            <Link
              to="/apartments/$id"
              params={{
                id: '1'
              }}
            >
              Go to apartments/1
            </Link>
          </Button>
        </div>

        <Outlet />
      </Container>
    </Layout>
  )
})
