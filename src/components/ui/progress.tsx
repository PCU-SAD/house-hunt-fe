import * as ProgressPrimitive from '@radix-ui/react-progress'
import * as React from 'react'

import { cn } from '@/lib/utils'
import { PasswordStrength } from './PasswordInput'

const PasswordProgress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    strength?: PasswordStrength
  }
>(({ className, value, strength, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      'relative h-4 w-full overflow-hidden rounded-full bg-secondary',
      className
    )}
    {...props}>
    <ProgressPrimitive.Indicator
      className={cn(
        'h-full w-full flex-1 transition-all',
        strength === 'weak'
          ? 'bg-red-500'
          : strength === 'moderate'
            ? 'bg-yellow-500'
            : strength === 'strong'
              ? 'bg-green-500'
              : 'bg-primary'
      )}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
PasswordProgress.displayName = ProgressPrimitive.Root.displayName

export { PasswordProgress as Progress }
