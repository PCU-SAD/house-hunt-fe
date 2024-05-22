import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth-owner')({
  beforeLoad: async ({ location, context }) => {
    if (!context.auth) return

    if (
      !context.auth.user ||
      (context.auth.user.type !== 'ADMIN' &&
        context.auth.user.type !== 'LANDLORD')
    ) {
      throw redirect({
        to: '/',
        search: {
          redirect: location.href
        }
      })
    }
    return context
  }
})
