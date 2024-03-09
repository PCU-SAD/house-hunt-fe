import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_apartments/_apartments')({
  component: () => <Outlet />
})
