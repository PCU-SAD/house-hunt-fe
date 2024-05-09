import { Container, Layout } from '@/components/common'
import { Typography } from '@/components/ui/typography'
import { useAuth } from '@/providers/AuthProvider/AuthProvider'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth-user/protected')({
  component: Protected
})

function Protected() {
  const auth = useAuth()

  return (
    <Layout>
      <Container>
        <div className="flex flex-col items-start gap-4">
          <Typography>
            This page can only see logged in user! You are logged in by default
          </Typography>

          <Typography>
            Username: <strong>{auth?.user?.email}</strong>
          </Typography>
          <Typography>
            User type: <strong>{auth?.user?.type}</strong>
          </Typography>
        </div>
      </Container>
    </Layout>
  )
}
