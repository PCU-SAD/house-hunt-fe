import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth-user')({
  beforeLoad: ({ context }) => {
    const auth = context.auth

    if (!auth) return context

    if (!auth?.user || auth?.user.type !== 'TENANT') {
      throw redirect({
        to: '/'
      })
    }

    return context
  }
})
