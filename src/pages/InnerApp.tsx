import { router } from '@/app'
import LoadingPage from '@/pages/loading/Loading'
import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'
import { RouterProvider } from '@tanstack/react-router'
import { useEffect, useMemo } from 'react'

const InnerApp = () => {
  const auth = useAuthContext()

  console.log('🚀 ~ auth:', auth)

  const routerContext = useMemo(() => {
    return auth
  }, [auth])

  useEffect(() => {
    router.invalidate()
  }, [auth])

  if (auth?.isLoading) {
    console.log('loading')
    return <LoadingPage />
  }

  console.log('user type', auth.user?.type)

  return (
    <RouterProvider
      router={router}
      context={{
        auth: routerContext
      }}
    />
  )
}

export default InnerApp
