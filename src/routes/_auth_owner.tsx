import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth_owner')({
  beforeLoad: ({ location, context }) => {
    if (!context.auth?.user || context.auth.user.type !== 'OWNER') {
      throw redirect({
        to: '/',
        search: {
          redirect: location.href
        }
      })
    }
  }
})
