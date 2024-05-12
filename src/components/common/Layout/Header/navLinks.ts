import { ValidRoutes } from '@/app'
import { UserType } from '@/providers/AuthProvider/AuthProvider'

type LinkType = {
  to: ValidRoutes
  access: 'ALL' | UserType
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
    to: '/admin',
    label: 'Manage users',
    access: 'ADMIN'
  }
]
