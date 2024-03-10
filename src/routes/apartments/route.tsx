import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/apartments')({
  component: () => (
    <div>
      <div>Hello /apartments!</div>

      <Outlet />
    </div>
  )
})
