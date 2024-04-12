import { Toaster } from '@/components/ui/toaster'
import '@/index.css'
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import React, { Suspense } from 'react'

const TanStackRouterDevtools =
  import.meta.env.VITE_NODE_ENV === 'development'
    ? React.lazy(() =>
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools
        }))
      )
    : () => null

export const auth: Auth = {
  status: 'loggedOut',
  username: undefined,
  login: (username: string) => {
    auth.status = 'loggedIn'
    auth.username = username
  },
  logout: () => {
    auth.status = 'loggedOut'
    auth.username = undefined
  }
}

export type Auth = {
  login: (username: string) => void
  logout: () => void
  status: 'loggedOut' | 'loggedIn'
  username?: string
}

export const Route = createRootRouteWithContext<{ auth: Auth }>()({
  component: () => {
    return (
      <div className="min-h-dvh overflow-x-hidden">
        <Toaster />

        <Outlet />

        <Suspense>
          <TanStackRouterDevtools />
        </Suspense>
      </div>
    )
  }
})
