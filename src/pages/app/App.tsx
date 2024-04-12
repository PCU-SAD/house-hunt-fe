import { router } from '@/router'
import { auth } from '@/routes/__root'
import { RouterProvider } from '@tanstack/react-router'
import { FC } from 'react'

type AppProps = {}

const App: FC<AppProps> = () => {
  return (
    <div>
      <RouterProvider
        router={router}
        context={{
          auth
        }}
      />
    </div>
  )
}

export default App
