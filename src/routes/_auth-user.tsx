import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth-user')({
  beforeLoad: ({ location, context }) => {
    if (!context.auth?.user) {
      throw redirect({
        to: '/',
        search: {
          redirect: location.href
        }
      })
    }
  }
})
