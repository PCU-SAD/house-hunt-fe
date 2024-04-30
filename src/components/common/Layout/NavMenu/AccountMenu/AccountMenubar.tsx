import { Button } from '@/components/ui/button'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger
} from '@/components/ui/menubar'
import { Route } from '@/routes/__root'
import { Link, useNavigate } from '@tanstack/react-router'
import { UserIcon } from 'lucide-react'
import { FC } from 'react'
import './styles.css'
import LoginDrawer from '@/pages/auth/login/LoginDrawer'

type AccountMenubarProps = {}

const AccountMenubar: FC<AccountMenubarProps> = () => {
  const navigate = useNavigate()
  const { auth } = Route.useRouteContext()

  function handleLogout() {
    auth.logout()
    navigate({
      to: '/'
    })
  }

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className="h-8 w-8">
          <UserIcon className="h-4 w-4" />
        </MenubarTrigger>
        <MenubarContent align="end">
          <Link to="/settings">
            <MenubarItem>Settings</MenubarItem>
          </Link>

          <MenubarItem>
            <LoginDrawer />
          </MenubarItem>
          <MenubarSeparator />

          <MenubarItem>
            <Button size="sm" onClick={handleLogout}>
              Log out
            </Button>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default AccountMenubar
