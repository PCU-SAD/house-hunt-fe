import { AccountSettings } from '@/pages/settings'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings/account')({
  component: () => <AccountSettings />
})
