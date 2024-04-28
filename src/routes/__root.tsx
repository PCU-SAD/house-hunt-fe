import { Toaster } from '@/components/ui/toaster'
import '@/index.css'
import { Auth } from '@/pages/auth/hooks/useAuth'
import LoadingPage from '@/pages/loading/Loading'
import { QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
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

type RouteContext = {
  auth: Auth
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouteContext>()({
  pendingComponent: LoadingPage,
  component: Index
})

function Index() {
  return (
    <>
      <Toaster />

      <Outlet />

      <ReactQueryDevtools buttonPosition="bottom-right" />

      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  )
}
