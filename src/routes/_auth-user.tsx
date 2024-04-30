import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth-user')({
  beforeLoad: ({ location, context }) => {
    if (!context.auth?.username) {
      throw redirect({
        to: '/',
        search: {
          redirect: location.href
        }
      })
    }

    return {
      username: context.auth.username
    }
  }
})
