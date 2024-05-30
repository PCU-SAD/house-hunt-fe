import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth-user')({
  beforeLoad: ({ context }) => {
    const auth = context.auth

    if (!auth) return

    console.log('🚀 ~ Route ~ auth:', auth)

    if (!auth?.user) {
      throw redirect({
        to: '/'
      })
    }

    return context
  }
})
