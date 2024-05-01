import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth-admin')({
  beforeLoad: ({ location, context }) => {
    if (!context.auth?.user || context.auth.user.type !== 'ADMIN') {
      throw redirect({
        to: '/',
        search: {
          redirect: location.href
        }
      })
    }

    return {
      username: context.auth.user
    }
  }
})
