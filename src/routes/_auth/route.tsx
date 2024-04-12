import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
  beforeLoad: ({ location, context }) => {
    if (context.auth.status === 'loggedOut') {
      throw redirect({
        to: '/login',
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
