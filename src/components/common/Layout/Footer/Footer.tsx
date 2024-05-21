import Container from '@/components/common/Layout/Container'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Link } from '@tanstack/react-router'
import { FC } from 'react'

type FooterProps = {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="mt-12 min-h-[80px] pb-16 text-primary shadow-lg">
      <Container className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row sm:justify-between md:px-6">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} House hunter. All rights reserved.
        </p>

        <nav className="flex gap-2 sm:gap-2">
          <Link
            className={cn(
              buttonVariants({
                variant: 'link',
                size: 'noSize'
              }),
              'text-xs font-normal text-slate-800 underline-offset-2'
            )}
            to="/">
            Terms of Service
          </Link>
          <Link
            className={cn(
              buttonVariants({
                variant: 'link',
                size: 'noSize'
              }),
              'text-xs font-normal text-slate-800 underline-offset-2'
            )}
            to="/">
            Privacy
          </Link>
        </nav>
      </Container>
    </footer>
  )
}

export default Footer
