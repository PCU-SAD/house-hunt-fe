import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from './components/ui/toaster'
import './index.css'
import { router } from './routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <Toaster />
    <RouterProvider router={router} />
  </>
)
