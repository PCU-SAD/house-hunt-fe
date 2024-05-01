import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { FC } from 'react'

import { cn } from '@/lib/utils'
import { Link } from '@tanstack/react-router'

const NavMenu: FC = () => {
  return (
    <NavigationMenu className="hidden md:block md:w-screen">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link
            to="/"
            className={navigationMenuTriggerStyle()}
            activeProps={{
              className: cn('bg-slate-100')
            }}>
            Homepage
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            to="/houses"
            className={navigationMenuTriggerStyle()}
            activeProps={{
              className: cn('bg-slate-100')
            }}>
            Houses
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            to="/apartments"
            className={navigationMenuTriggerStyle()}
            activeProps={{
              className: cn('bg-slate-100')
            }}>
            Apartments
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link
            to="/protected"
            className={navigationMenuTriggerStyle()}
            activeProps={{
              className: cn('bg-slate-100')
            }}>
            Protected
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavMenu
