import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/privacy-policy/')({
  component: () => <div>Hello /privacy-policy/ !</div>
})
