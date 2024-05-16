import { Toaster } from '@/components/ui/sonner'
import '@/index.css'
import LoadingPage from '@/pages/loading/Loading'
import { AuthContextType } from '@/providers/AuthProvider/AuthProvider'
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
  auth: AuthContextType
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouteContext>()({
  pendingComponent: LoadingPage,
  component: Index
})

function Index() {
  return (
    <>
      <Outlet />

      <ReactQueryDevtools buttonPosition="bottom-left" />

      <Toaster />
      <Suspense>
        <TanStackRouterDevtools position="bottom-right" />
      </Suspense>
    </>
  )
}
