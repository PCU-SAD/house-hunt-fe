/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PropertiesImport } from './routes/properties'
import { Route as AuthUserImport } from './routes/_auth-user'
import { Route as AuthOwnerImport } from './routes/_auth-owner'
import { Route as AuthAdminImport } from './routes/_auth-admin'
import { Route as SettingsRouteImport } from './routes/settings/route'
import { Route as IndexImport } from './routes/index'
import { Route as SettingsAccountImport } from './routes/settings/account'
import { Route as AuthUserProtectedImport } from './routes/_auth-user/protected'
import { Route as AuthOwnerManagePropertiesImport } from './routes/_auth-owner/manage-properties'
import { Route as AuthAdminAdminImport } from './routes/_auth-admin/admin'
import { Route as AuthOwnerManagePropertiesAddNewImport } from './routes/_auth-owner/manage-properties_.add-new'
import { Route as AuthOwnerManagePropertiesIdImport } from './routes/_auth-owner/manage-properties_.$id'

// Create/Update Routes

const PropertiesRoute = PropertiesImport.update({
  path: '/properties',
  getParentRoute: () => rootRoute,
} as any)

const AuthUserRoute = AuthUserImport.update({
  id: '/_auth-user',
  getParentRoute: () => rootRoute,
} as any)

const AuthOwnerRoute = AuthOwnerImport.update({
  id: '/_auth-owner',
  getParentRoute: () => rootRoute,
} as any)

const AuthAdminRoute = AuthAdminImport.update({
  id: '/_auth-admin',
  getParentRoute: () => rootRoute,
} as any)

const SettingsRouteRoute = SettingsRouteImport.update({
  path: '/settings',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SettingsAccountRoute = SettingsAccountImport.update({
  path: '/account',
  getParentRoute: () => SettingsRouteRoute,
} as any)

const AuthUserProtectedRoute = AuthUserProtectedImport.update({
  path: '/protected',
  getParentRoute: () => AuthUserRoute,
} as any)

const AuthOwnerManagePropertiesRoute = AuthOwnerManagePropertiesImport.update({
  path: '/manage-properties',
  getParentRoute: () => AuthOwnerRoute,
} as any)

const AuthAdminAdminRoute = AuthAdminAdminImport.update({
  path: '/admin',
  getParentRoute: () => AuthAdminRoute,
} as any)

const AuthOwnerManagePropertiesAddNewRoute =
  AuthOwnerManagePropertiesAddNewImport.update({
    path: '/manage-properties/add-new',
    getParentRoute: () => AuthOwnerRoute,
  } as any)

const AuthOwnerManagePropertiesIdRoute =
  AuthOwnerManagePropertiesIdImport.update({
    path: '/manage-properties/$id',
    getParentRoute: () => AuthOwnerRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/settings': {
      preLoaderRoute: typeof SettingsRouteImport
      parentRoute: typeof rootRoute
    }
    '/_auth-admin': {
      preLoaderRoute: typeof AuthAdminImport
      parentRoute: typeof rootRoute
    }
    '/_auth-owner': {
      preLoaderRoute: typeof AuthOwnerImport
      parentRoute: typeof rootRoute
    }
    '/_auth-user': {
      preLoaderRoute: typeof AuthUserImport
      parentRoute: typeof rootRoute
    }
    '/properties': {
      preLoaderRoute: typeof PropertiesImport
      parentRoute: typeof rootRoute
    }
    '/_auth-admin/admin': {
      preLoaderRoute: typeof AuthAdminAdminImport
      parentRoute: typeof AuthAdminImport
    }
    '/_auth-owner/manage-properties': {
      preLoaderRoute: typeof AuthOwnerManagePropertiesImport
      parentRoute: typeof AuthOwnerImport
    }
    '/_auth-user/protected': {
      preLoaderRoute: typeof AuthUserProtectedImport
      parentRoute: typeof AuthUserImport
    }
    '/settings/account': {
      preLoaderRoute: typeof SettingsAccountImport
      parentRoute: typeof SettingsRouteImport
    }
    '/_auth-owner/manage-properties/$id': {
      preLoaderRoute: typeof AuthOwnerManagePropertiesIdImport
      parentRoute: typeof AuthOwnerImport
    }
    '/_auth-owner/manage-properties/add-new': {
      preLoaderRoute: typeof AuthOwnerManagePropertiesAddNewImport
      parentRoute: typeof AuthOwnerImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  SettingsRouteRoute.addChildren([SettingsAccountRoute]),
  AuthAdminRoute.addChildren([AuthAdminAdminRoute]),
  AuthOwnerRoute.addChildren([
    AuthOwnerManagePropertiesRoute,
    AuthOwnerManagePropertiesIdRoute,
    AuthOwnerManagePropertiesAddNewRoute,
  ]),
  AuthUserRoute.addChildren([AuthUserProtectedRoute]),
  PropertiesRoute,
])

/* prettier-ignore-end */
