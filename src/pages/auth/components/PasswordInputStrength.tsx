import { cn } from '@/lib/utils'

import { FC, InputHTMLAttributes, forwardRef, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { Progress } from '../../../components/ui/progress'
import { FormType } from '../hooks/useLoginForm'
import PasswordInput from './PasswordInput'

type PasswordInputProps = InputHTMLAttributes<HTMLInputElement>

const PasswordInputStrength: FC<PasswordInputProps> = forwardRef<
  HTMLInputElement,
  PasswordInputProps
>(({ ...props }, ref) => {
  const initialStrength = 10
  const [strength, setStrength] = useState(initialStrength)

  const form = useFormContext<FormType>()

  const password = form.watch('password')

  function evaluatePasswordStrength(password: string) {
    let strength = initialStrength

    if (password?.length >= 8) strength += 22
    if (/[A-Z]/.test(password)) strength += 22
    if (/[0-9]/.test(password)) strength += 22
    if (/[-!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 22

    if (strength >= 90) strength = 100

    return strength
  }

  useEffect(() => {
    setStrength(evaluatePasswordStrength(password))
  }, [password])

  return (
    <div>
      <PasswordInput ref={ref} {...props} />

      <Progress
        className={cn('mt-4 h-3 rounded-md')}
        isColorful
        value={strength}
      />

      {strength < 40 && (
        <p className="mt-1 text-xs text-red-500">Weak password</p>
      )}
      {strength >= 40 && strength < 90 && (
        <p className="mt-1 text-xs text-yellow-500">Moderate password</p>
      )}
      {strength >= 90 && (
        <p className="mt-1 text-xs text-green-500">Strong password</p>
      )}
    </div>
  )
})

export default PasswordInputStrength
