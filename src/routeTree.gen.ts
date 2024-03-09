/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()
const SignupIndexLazyImport = createFileRoute('/signup/')()
const PrivacyPolicyIndexLazyImport = createFileRoute('/privacy-policy/')()
const LoginIndexLazyImport = createFileRoute('/login/')()
const HousesIndexLazyImport = createFileRoute('/houses/')()
const ApartmentsIndexLazyImport = createFileRoute('/apartments/')()
const ApartmentsIdIndexLazyImport = createFileRoute('/apartments/$id/')()
const ApartmentsIdEditIndexLazyImport = createFileRoute(
  '/apartments/$id/edit/',
)()

// Create/Update Routes

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const SignupIndexLazyRoute = SignupIndexLazyImport.update({
  path: '/signup/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/signup/index.lazy').then((d) => d.Route))

const PrivacyPolicyIndexLazyRoute = PrivacyPolicyIndexLazyImport.update({
  path: '/privacy-policy/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/privacy-policy/index.lazy').then((d) => d.Route),
)

const LoginIndexLazyRoute = LoginIndexLazyImport.update({
  path: '/login/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login/index.lazy').then((d) => d.Route))

const HousesIndexLazyRoute = HousesIndexLazyImport.update({
  path: '/houses/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/houses/index.lazy').then((d) => d.Route))

const ApartmentsIndexLazyRoute = ApartmentsIndexLazyImport.update({
  path: '/apartments/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/apartments/index.lazy').then((d) => d.Route),
)

const ApartmentsIdIndexLazyRoute = ApartmentsIdIndexLazyImport.update({
  path: '/apartments/$id/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/apartments/$id/index.lazy').then((d) => d.Route),
)

const ApartmentsIdEditIndexLazyRoute = ApartmentsIdEditIndexLazyImport.update({
  path: '/apartments/$id/edit/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/apartments/$id/edit/index.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/apartments/': {
      preLoaderRoute: typeof ApartmentsIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/houses/': {
      preLoaderRoute: typeof HousesIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/login/': {
      preLoaderRoute: typeof LoginIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/privacy-policy/': {
      preLoaderRoute: typeof PrivacyPolicyIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/signup/': {
      preLoaderRoute: typeof SignupIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/apartments/$id/': {
      preLoaderRoute: typeof ApartmentsIdIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/apartments/$id/edit/': {
      preLoaderRoute: typeof ApartmentsIdEditIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  ApartmentsIndexLazyRoute,
  HousesIndexLazyRoute,
  LoginIndexLazyRoute,
  PrivacyPolicyIndexLazyRoute,
  SignupIndexLazyRoute,
  ApartmentsIdIndexLazyRoute,
  ApartmentsIdEditIndexLazyRoute,
])

/* prettier-ignore-end */
