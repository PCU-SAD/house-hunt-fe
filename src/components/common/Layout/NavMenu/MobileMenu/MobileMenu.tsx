import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { X as CloseIcon, Menu as MenuIcon } from 'lucide-react'
import { FC, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useBlur } from './useBlur'

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
  const menuRef = useRef<HTMLDivElement>(null)

  function handleOpen() {
    setShowMenu(true)
  }

  function handleClose() {
    setShowMenu(false)
  }

  useBlur(setShowMenu, menuRef)

  return (
    <>
      <Button
        size="icon"
        onClick={handleOpen}
        variant="ghost"
        className="md:hidden">
        <MenuIcon />
      </Button>

      <div
        data-mobile-menu="true"
        ref={menuRef}
        className={cn(
          'absolute right-0 top-[1dvh] z-20 flex h-[98dvh] w-[80%] translate-x-full transform flex-col justify-center gap-4 overflow-y-auto rounded-md bg-background p-4 px-8 pl-10 shadow-2xl transition-transform duration-200 md:hidden',
          {
            'translate-x-0': showMenu
          }
        )}>
        <div className="absolute -left-7 top-1/2 h-1 w-20 -translate-y-1/2 rotate-90 rounded-2xl bg-slate-100" />
        <Button
          size="icon"
          onClick={handleClose}
          variant="outline"
          className="absolute right-4 top-2">
          <CloseIcon />
        </Button>

        <Accordion type="single" defaultValue="item-1">
          {MenuItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent onClick={() => setShowMenu(false)}>
                <Link to="/login">{item.content}</Link>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  )
}

export default MobileMenu
