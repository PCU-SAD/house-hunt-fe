import { Container, Layout } from '@/components'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import {
  createFileRoute,
  useNavigate,
  useRouteContext
} from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/protected')({
  component: Protected
})

function Protected() {
  const navigate = useNavigate()
  const { auth } = useRouteContext({
    from: '/_auth/protected'
  })

  function handleLogout() {
    auth.logout()
    navigate({
      to: '/'
    })
  }

  return (
    <Layout>
      <Container className="mt-10">
        <div className="flex flex-col items-start gap-4">
          <Typography>
            This page can only see logged in user! You are logged in by default
          </Typography>

          <Typography>
            Username: <strong>{auth.username}</strong>
          </Typography>
          <Button variant="destructive" onClick={handleLogout}>
            Log out
          </Button>
        </div>
      </Container>
    </Layout>
  )
}
