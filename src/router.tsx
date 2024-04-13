import { ErrorPage, NotFound } from '@/pages'
import { createHashHistory, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export const router = createRouter({
  routeTree,
  // this works for github pages
  history: createHashHistory(),
  basepath: '/house-hunt-fe/',
  defaultPreload: 'intent',
  defaultErrorComponent: ErrorPage,
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
