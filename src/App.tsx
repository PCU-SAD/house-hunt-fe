import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from './components/ui/toaster'
import { router } from './routes'

const App: FC = () => {
  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  )
}

export default App
