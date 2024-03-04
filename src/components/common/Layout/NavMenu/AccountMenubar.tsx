import { Button } from '@/components/ui/button'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger
} from '@/components/ui/menubar'
import { UserIcon } from 'lucide-react'
import { FC } from 'react'

type AccountMenubarProps = {}

const AccountMenubar: FC<AccountMenubarProps> = () => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className="h-8 w-8">
          <UserIcon className="h-4 w-4" />
        </MenubarTrigger>
        <MenubarContent align="end" alignOffset={0}>
          <MenubarItem>Settings 1</MenubarItem>
          <MenubarItem>Settings 2</MenubarItem>
          <MenubarItem>Settings 3</MenubarItem>
          <MenubarItem>Settings 4</MenubarItem>
          <MenubarItem>Become a member</MenubarItem>
          <MenubarSeparator />

          <MenubarItem>
            <Button size="sm">Log out</Button>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default AccountMenubar
