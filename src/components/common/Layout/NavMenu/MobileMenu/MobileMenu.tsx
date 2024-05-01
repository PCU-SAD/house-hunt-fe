import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { MenuIcon } from 'lucide-react'
import { FC, useState } from 'react'

type MobileMenuProps = {}

const MenuItems = [
  {
    title: 'Houses',
    content: 'More information'
  },
  {
    title: 'Apartments',
    content: 'More information'
  },
  {
    title: 'Something else?',
    content: 'More information'
  }
]

const MobileMenu: FC<MobileMenuProps> = () => {
  const [showMenu, setShowMenu] = useState(false)

  function handleOpen() {
    setShowMenu(true)
  }

  function handleClose() {
    setShowMenu(false)
  }

  return (
    <Sheet open={showMenu}>
      <SheetTrigger className="md:hidden" onClick={handleOpen}>
        <Button size="icon" variant="ghost">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent
        handleClose={handleClose}
        side="left"
        className="flex w-full flex-col items-center justify-center sm:max-w-[400px] md:hidden">
        <Accordion type="single" defaultValue="item-1">
          {MenuItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent onClick={handleClose}>
                some content
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu
