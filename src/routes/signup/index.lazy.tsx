import { SignupPage } from '@/pages/auth/Signup'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/signup/')({
  component: SignupPage
})
