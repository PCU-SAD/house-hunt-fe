import { createBrowserRouter } from 'react-router-dom'
import { Layout, ProtectedRoute } from './components'
import { ErrorPage, HomePage, LoginPage } from './pages'

export const router = createBrowserRouter([
  {
    path: '*',
    element: <ErrorPage />
  },
  {
    path: '/',
    element: (
      <Layout>
        <HomePage />
      </Layout>
    )
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/houses',
    element: (
      <ProtectedRoute>
        <div>profiles</div>
      </ProtectedRoute>
    )
  },
  {
    path: '/apartments',
    element: (
      <ProtectedRoute>
        <div>profiles</div>
      </ProtectedRoute>
    )
  }
])
