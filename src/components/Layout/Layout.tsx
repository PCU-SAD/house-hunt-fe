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

type LayoutProps = {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header className="shadow-md">
        <Container className="flex h-14 items-center justify-between">
          <h1>Header</h1>

          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>
                <UserIcon />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Settings</MenubarItem>
                <MenubarItem>Settings</MenubarItem>
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
