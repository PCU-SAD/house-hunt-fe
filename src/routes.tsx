import { createBrowserRouter, useParams } from 'react-router-dom'
import { Container, Layout, ProtectedRoute } from './components'
import { HomePage, LoginPage } from './pages'

export const router = createBrowserRouter([
  {
    path: '*',
    element: <div>not found</div>
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
    path: '/profile',
    element: (
      <ProtectedRoute>
        <div>profiles</div>
      </ProtectedRoute>
    )
  },
  {
    path: '/profile/:id',
    element: <Profile />
  }
])

function Profile() {
  const { id } = useParams()

  return (
    <Layout>
      <Container>{id}</Container>
    </Layout>
  )
}
