import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { ProtectedRoute } from './components'
import { LoginPage } from './pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/profile',
    element: (
      <ProtectedRoute>
        <div>profile</div>
      </ProtectedRoute>
    )
  }
])
