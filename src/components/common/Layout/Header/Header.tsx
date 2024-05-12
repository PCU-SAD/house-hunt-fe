import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { FC } from 'react'

import { navLinks } from '@/components/common/Layout/Header/navLinks'
import { cn } from '@/lib/utils'
import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'
import { Link } from '@tanstack/react-router'

const Header: FC = () => {
  const auth = useAuthContext()
  const userType = auth.user?.type

  const isLandlord = userType === 'LANDLORD'
  const isAdmin = userType === 'ADMIN'

  const filteredLinks = navLinks.filter((link) => {
    switch (link.access) {
      case 'ALL':
        return true

      case 'LANDLORD':
        return isLandlord

      case 'ADMIN':
        return isAdmin

      default:
        return false
    }
  })

  return (
    <NavigationMenu className="hidden md:block md:w-screen">
      <NavigationMenuList>
        {filteredLinks.map((link) => (
          <NavigationMenuItem>
            <Link
              to={link.to}
              className={navigationMenuTriggerStyle()}
              activeProps={{
                className: cn('bg-slate-100')
              }}
            >
              {link.label}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Header
