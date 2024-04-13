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
import { useNavigate } from '@tanstack/react-router'
import { UserIcon } from 'lucide-react'
import { FC } from 'react'
import './styles.css'

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
          <MenubarItem>Settings 1</MenubarItem>
          <MenubarItem>Settings 2</MenubarItem>
          <MenubarItem>Settings 3</MenubarItem>
          <MenubarItem>Settings 4</MenubarItem>
          <MenubarItem>Become a member</MenubarItem>
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
