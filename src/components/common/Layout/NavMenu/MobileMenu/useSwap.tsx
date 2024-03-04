import { RefObject, useEffect } from 'react'

export function useSwap(
  showMenu: boolean,
  setShowMenu: (value: boolean) => void,
  menuRef: RefObject<HTMLDivElement>
) {
  useEffect(() => {
    const handleTouchMove = (event) => {
      if (menuRef.current && event.touches[0].clientX > 150) {
        setShowMenu(false)
      }
    }

    if (showMenu) {
      document.addEventListener('touchmove', handleTouchMove)
    } else {
      document.removeEventListener('touchmove', handleTouchMove)
    }

    return () => {
      document.removeEventListener('touchmove', handleTouchMove)
    }
  }, [menuRef, setShowMenu, showMenu])
}
