import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth-admin')({
  beforeLoad: ({ context }) => {
    const auth = context.auth

    if (!auth) return context

    console.log('🚀 ~ Route ~ auth:', auth)

    if (!auth?.user || auth.user.type !== 'ADMIN') {
      throw redirect({
        to: '/'
      })
    }

    return context
  }
})
