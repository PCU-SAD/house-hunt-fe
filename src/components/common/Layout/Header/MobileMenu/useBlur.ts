import { RefObject, useEffect } from 'react'

export function useBlur(
  setShowMenu: (value: boolean) => void,
  menuRef: RefObject<HTMLDivElement>
) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuRef, setShowMenu])
}
