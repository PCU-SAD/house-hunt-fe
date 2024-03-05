import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'
import CookiesPopup from './components/common/CookiesPopup/CookiesPopup'
import { Toaster } from './components/ui/toaster'
import { router } from './routes'

const App: FC = () => {
  return (
    <div className='overflow-x-hidden'>
      <Toaster />
      <CookiesPopup />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
