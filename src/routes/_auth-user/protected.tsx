import { Container, Layout } from '@/components'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { useAuth } from '@/providers/AuthProvider/AuthProvider'
import { createFileRoute, useNavigate, useRouter } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth-user/protected')({
  component: Protected
})

function Protected() {
  const router = useRouter()
  const navigate = useNavigate()
  const auth = useAuth()

  return (
    <Layout>
      <Container>
        <div className="flex flex-col items-start gap-4">
          <Typography>
            This page can only see logged in user! You are logged in by default
          </Typography>

          <Typography>
            Username: <strong>{auth.user}</strong>
          </Typography>

          <Button
            onClick={() => {
              auth.logout()
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
