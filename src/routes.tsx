import { createBrowserRouter } from 'react-router-dom'
import { Container, Layout, ProtectedRoute } from './components'
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
       <Layout>
          <Container>
            <div>houses</div>
          </Container>
        </Layout>
      </ProtectedRoute>
    )
  },
  {
    path: '/apartments',
    element: (
      <ProtectedRoute>
        <Layout>
          <Container>
            <div>apartments</div>
          </Container>
        </Layout>
      </ProtectedRoute>
    )
  }
])
