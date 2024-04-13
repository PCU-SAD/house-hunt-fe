import { NotFound } from '@/pages'
import { createMemoryHistory, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export const router = createRouter({
  routeTree,
  history: createMemoryHistory({
    initialEntries: ['/']
  }),

  basepath: '/house-hunt-fe/',
  defaultPreload: 'intent',
  defaultErrorComponent: () => <div>Something went wrong</div>,
  defaultNotFoundComponent: NotFound,
  context: {
    auth: undefined!
  }
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
