import { cn } from '@/lib/utils'
import React from 'react'
import { Link } from 'react-router-dom'

type ListItemProps = {
  to: string
  title: string
  children: React.ReactNode
  className?: string
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, ListItemProps>(
  ({ className, title, to, children }, ref) => {
    return (
      <li>
        <Link
          to={to}
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </li>
    )
  }
)

ListItem.displayName = 'ListItem'

export default ListItem
