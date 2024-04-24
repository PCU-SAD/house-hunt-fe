import { Container, Layout } from '@/components'
import { Typography } from '@/components/ui/typography'
import { createFileRoute, useRouteContext } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/protected')({
  component: Protected
})

function Protected() {
  const { auth } = useRouteContext({
    from: '/_auth/protected'
  })

  return (
    <Layout>
      <Container>
        <div className="flex flex-col items-start gap-4">
          <Typography>
            This page can only see logged in user! You are logged in by default
          </Typography>

          <Typography>
            Username: <strong>{auth.username}</strong>
          </Typography>
        </div>
      </Container>
    </Layout>
  )
}
