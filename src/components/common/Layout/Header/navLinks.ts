import { ValidRoutes } from '@/app'
import { UserRole } from '@/providers/AuthProvider/AuthProvider'

type LinkType = {
  to: ValidRoutes
  access: 'ALL' | UserRole
  label: string
}

export const navLinks: LinkType[] = [
  {
    to: '/',
    label: 'Homepage',
    access: 'ALL'
  },
  {
    to: '/properties',
    label: 'Properties',
    access: 'ALL'
  },
  {
    to: '/manage-properties',
    label: 'My properties',
    access: 'LANDLORD'
  },
  {
    to: '/admin-dashboard',
    label: 'Manage users',
    access: 'ADMIN'
  }
]
