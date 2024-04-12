import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/protected')({
  component: () => <div>Hello /_auth/protected!</div>
})
