import { ErrorPage, NotFound } from '@/pages'
import App from '@/pages/App'
import { routeTree } from '@/routeTree.gen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createHashHistory, createRouter } from '@tanstack/react-router'
import ReactDOM from 'react-dom/client'

const queryClient = new QueryClient()

export const router = createRouter({
  routeTree,
  history: createHashHistory(),
  defaultPreload: 'intent',
  defaultErrorComponent: ErrorPage,
  defaultNotFoundComponent: NotFound,
  context: {
    auth: undefined!,
    queryClient
  }
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('app')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  )
}
