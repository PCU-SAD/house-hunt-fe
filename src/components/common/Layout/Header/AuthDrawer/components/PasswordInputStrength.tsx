import { cn } from '@/lib/utils'

import {
  lowercasePattern,
  minChars,
  noWhiteSpaceMessage,
  numberPattern,
  specialCharPattern,
  uppercasePattern
} from '@/components/common/Layout/Header/AuthDrawer/signup/SignupForm/useSignupForm'
import { FC, InputHTMLAttributes, forwardRef, useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import { Progress } from '../../../../../ui/progress'
import PasswordInput from './PasswordInput'

type PasswordInputProps = InputHTMLAttributes<HTMLInputElement>

const PasswordInputStrength: FC<PasswordInputProps> = forwardRef<
  HTMLInputElement,
  PasswordInputProps
>(({ ...props }, ref) => {
  const form = useFormContext()
  const password = form.watch(props.name)

  function evaluatePasswordStrength(password: string) {
    let strength = 10

    if (password?.length >= minChars) strength += 22
    if (lowercasePattern.test(password)) strength += 11
    if (uppercasePattern.test(password)) strength += 11
    if (numberPattern.test(password)) strength += 22
    if (specialCharPattern.test(password)) strength += 22

    if (strength >= 90) strength = 100

    if (form.formState.errors[props.name]?.message === noWhiteSpaceMessage) {
      return 10
    }

    return strength
  }

  const strength = useMemo(
    () => evaluatePasswordStrength(password),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [form.formState.errors[props.name], password]
  )

  const weakPassword = strength < 40
  const moderatePassword = strength >= 40 && strength < 90
  const strongPassword = strength >= 90

  return (
    <div>
      <PasswordInput ref={ref} {...props} />

      <Progress
        className={cn('mt-4 h-3 rounded-md')}
        isColorful
        value={strength}
      />

      <p
        className={cn('mt-1 text-xs', {
          'text-red-500': weakPassword,
          'text-yellow-500': moderatePassword,
          'text-green-500': strongPassword
        })}>
        {weakPassword && 'Weak password'}
        {moderatePassword && 'Moderate password'}
        {strongPassword && 'Strong password'}
      </p>
    </div>
  )
})

export default PasswordInputStrength
