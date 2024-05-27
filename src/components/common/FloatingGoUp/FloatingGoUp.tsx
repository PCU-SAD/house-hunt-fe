import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import throttle from 'lodash.throttle'
import { ChevronUp } from 'lucide-react'
import { FC, useCallback, useEffect, useRef, useState } from 'react'

type FloatingGoUpProps = {}

const FloatingGoUp: FC<FloatingGoUpProps> = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLButtonElement>(null)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = useCallback(
    throttle(() => {
      console.log(window.scrollY)
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight / 1.5 &&
        document.body.offsetHeight > 1500
      ) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }, 300),
    []
  )

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Button
      ref={ref}
      size="icon"
      variant="outline"
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-4 right-4 z-50 rounded-full shadow-sm transition-opacity',
        {
          'pointer-events-none opacity-0': !isVisible
        }
      )}>
      <ChevronUp className="h-5 w-5" />
    </Button>
  )
}

export default FloatingGoUp
