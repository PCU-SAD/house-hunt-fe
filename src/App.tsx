import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from './components/ui/toaster'
import { router } from './routes'

const App: FC = () => {
  return (
    <div className="min-h-dvh overflow-x-hidden">
      <Toaster />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
