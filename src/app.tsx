import { RouterProvider, createRouter } from '@tanstack/react-router'
import ReactDOM from 'react-dom/client'
import { ErrorPage } from './pages'
import { routeTree } from './routeTree.gen'

const router = createRouter({
  routeTree,
  basepath: '/house-hunt-fe',
  defaultPreload: 'intent',
  defaultErrorComponent: ErrorPage,
  defaultPendingComponent: () => <div>Custom Loading...</div>,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('app')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<RouterProvider router={router} />)
}
