import { UserIcon } from 'lucide-react'
import { FC, ReactNode } from 'react'
import { Button } from '../ui/button'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger
} from '../ui/menubar'

import Container from './Container'
import { NavigationMenuDemo } from './NavMenu'

type LayoutProps = {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header className="shadow-md">
        <Container className="flex h-14 items-center justify-between">
          <NavigationMenuDemo />

          <Menubar>
            <MenubarMenu>
              <MenubarTrigger className="h-8 w-8">
                <UserIcon className="h-4 w-4" />
              </MenubarTrigger>
              <MenubarContent align="end" alignOffset={0}>
                <MenubarItem>Settings</MenubarItem>
                <MenubarItem>Settings</MenubarItem>
                <MenubarItem>Settings</MenubarItem>
                <MenubarItem>Settings</MenubarItem>
                <MenubarItem>Become a member</MenubarItem>
                <MenubarSeparator />

                <MenubarItem>
                  <Button size="sm">Log out</Button>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </Container>
      </header>

      <div>{children}</div>
    </div>
  )
}

export default Layout
