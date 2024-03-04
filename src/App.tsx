import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'
import CookiesPopup from './components/common/CookiesPopup/CookiesPopup'
import { Toaster } from './components/ui/toaster'
import { router } from './routes'

const App: FC = () => {
  return (
    <main className="has-[data-mobile-menu]:overflow-hidden">
      <Toaster />
      <CookiesPopup />
      <RouterProvider router={router} />
    </main>
  )
}

export default App
