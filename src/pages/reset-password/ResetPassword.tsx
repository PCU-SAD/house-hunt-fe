import { Container, Layout } from '@/components/common'
import ResetPasswordForm from '@/pages/reset-password/components/ResetPasswordForm/ResetPasswordForm'
import { FC } from 'react'

type ResetPasswordProps = {}

const ResetPassword: FC<ResetPasswordProps> = () => {
  return (
    <Layout>
      <Container>
        <ResetPasswordForm />
      </Container>
    </Layout>
  )
}

export default ResetPassword
