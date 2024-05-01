import { router } from '@/app'
import LoadingPage from '@/pages/loading/Loading'
import { useAuth } from '@/providers/AuthProvider/AuthProvider'
import { RouterProvider } from '@tanstack/react-router'
import { FC, useEffect, useMemo } from 'react'

const InnerApp: FC = () => {
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

export default InnerApp
