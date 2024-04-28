import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Link } from '@tanstack/react-router'
import { X as CloseIcon, Menu as MenuIcon } from 'lucide-react'
import { FC, useEffect, useRef, useState } from 'react'
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

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add('overflow-hidden')

      document.getElementById('app')?.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
      document.getElementById('app')?.classList.remove('overflow-hidden')
    }
  }, [showMenu])

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
        ref={menuRef}
        className={cn(
          'absolute right-0 top-0 z-20 flex h-dvh w-[80%] translate-x-full transform flex-col justify-center overflow-y-auto rounded-md bg-background p-4 px-6  transition-transform duration-200 md:hidden',
          {
            'translate-x-0': showMenu,
            'shadow-2xl': showMenu
          }
        )}>
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
