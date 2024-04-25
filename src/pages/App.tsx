import { router } from '@/app'

import { useAuth } from '@/pages/auth/hooks/useAuth'
import LoadingPage from '@/pages/loading/Loading'

import { RouterProvider } from '@tanstack/react-router'
import { FC, useEffect, useMemo } from 'react'

type AppProps = {}

const App: FC<AppProps> = () => {
  const auth = useAuth()

  const routerContext = useMemo(
    () => ({
      auth
    }),
    [auth]
  )

  useEffect(() => {
    router.invalidate()
  }, [routerContext])

  if (auth.isLoading) {
    return <LoadingPage />
  }

  return <RouterProvider router={router} context={routerContext} />
}

export default App
