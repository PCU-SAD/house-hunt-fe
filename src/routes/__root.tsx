import { Toaster } from '@/components/ui/toaster'
import '@/index.css'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import React, { Suspense } from 'react'

const TanStackRouterDevtools =
  import.meta.env.VITE_NODE_ENV === 'development'
    ? React.lazy(() =>
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools
        }))
      )
    : () => null

export const Route = createRootRoute({
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
