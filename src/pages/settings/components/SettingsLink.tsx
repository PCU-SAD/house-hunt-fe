import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'
import { FC, ReactNode } from 'react'

type SettingsLinkProps = {
  icon: ReactNode
  to: string
  children: ReactNode
}

const SettingsLink: FC<SettingsLinkProps> = ({ icon, to, children }) => {
  return (
    <Button
      variant="ghost"
      size="sm"
      className="relative flex-grow justify-start gap-2 py-1 pl-4"
      asChild>
      <Link
        to={to}
        activeProps={{
          className: `bg-gray-100 before:h-5 before:w-1 before:rounded-md before:bg-blue-600 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1 before:content=['']`
        }}>
        {icon}

        {children}
      </Link>
    </Button>
  )
}

export default SettingsLink
