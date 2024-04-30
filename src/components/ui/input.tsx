import * as React from 'react'

import { cn } from '@/lib/utils'
import { ReactNode } from '@tanstack/react-router'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            {
              'pr-8': !!icon
            },
            className
          )}
          ref={ref}
          {...props}
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
          {icon}
        </div>
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
