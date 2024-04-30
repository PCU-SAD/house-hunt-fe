import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth-user')({
  beforeLoad: ({ location, context }) => {
    console.log(context.auth)
    
    if (!context.auth?.username) {
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
