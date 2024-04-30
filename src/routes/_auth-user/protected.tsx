import { queryClient } from '@/app'
import { Container, Layout } from '@/components'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import {
  createFileRoute,
  useNavigate,
  useRouteContext,
  useRouter
} from '@tanstack/react-router'

export const Route = createFileRoute('/_auth-user/protected')({
  component: Protected
})

function Protected() {
  const router = useRouter()
  const navigate = useNavigate()
  const { auth } = useRouteContext({
    from: '/_auth-user/protected'
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

          <Button
            onClick={() => {
              queryClient.setQueryData(['getMe'], {
                username: ''
              })

              router.invalidate()

              navigate({
                to: '/'
              })
            }}>
            Logout
          </Button>
        </div>
      </Container>
    </Layout>
  )
}
