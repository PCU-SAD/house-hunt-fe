import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import ListItem from './ListItem'

const NavMenu: FC = () => {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Example</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <a
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/">
                  <div>logo</div>
                  <div className="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Beautifully designed components built with Radix UI and
                    Tailwind CSS.
                  </p>
                </a>
              </li>
              <ListItem to="/apartments" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem to="/apartments" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem to="/apartments" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Example 2</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <a
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/">
                  <div>logo</div>
                  <div className="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Beautifully designed components built with Radix UI and
                    Tailwind CSS.
                  </p>
                </a>
              </li>
              <ListItem to="/apartments" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem to="/apartments" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem to="/apartments" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/houses" className={navigationMenuTriggerStyle()}>
            Houses
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/apartments" className={navigationMenuTriggerStyle()}>
            Apartments
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavMenu
