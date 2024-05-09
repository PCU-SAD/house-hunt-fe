import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth-user')({
  beforeLoad: async ({ context }) => {
    if (!context.auth) return

    if (!context.auth?.user?.email) {
      throw redirect({
        to: '/',
        search: {
          redirect: location.href
        }
      })
    }
  }
})
