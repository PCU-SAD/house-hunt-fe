import { navLinks } from '@/components/common/Layout/Header/navLinks'
import { Button } from '@/components/ui/button'
import { NavigationMenuItem } from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'
import { Link } from '@tanstack/react-router'
import { MenuIcon } from 'lucide-react'
import { FC, useState } from 'react'

type MobileMenuProps = {}

const MobileMenu: FC<MobileMenuProps> = () => {
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

  const [showMenu, setShowMenu] = useState(false)

  function handleOpen() {
    setShowMenu(true)
  }

  function handleClose() {
    setShowMenu(false)
  }

  return (
    <Sheet open={showMenu}>
      <SheetTrigger className="md:hidden" onClick={handleOpen} asChild>
        <Button size="icon" variant="ghost">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent
        handleClose={handleClose}
        side="left"
        className="flex w-full flex-col items-center justify-center sm:max-w-[400px] md:hidden">
        <div className="flex flex-col gap-2">
          {filteredLinks.map((link) => (
            <NavigationMenuItem key={link.to}>
              <Link
                to={link.to}
                activeProps={{
                  className: cn('underline underline-offset-2')
                }}>
                {link.label}
              </Link>
            </NavigationMenuItem>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu
