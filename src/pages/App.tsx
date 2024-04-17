import { router } from '@/app'
import { Loading } from '@/pages'
import { useAuth } from '@/pages/auth/hooks/useAuth'
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
    return <Loading />
  }

  return <RouterProvider router={router} context={routerContext} />
}

export default App
