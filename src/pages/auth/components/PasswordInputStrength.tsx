import { cn } from '@/lib/utils'

import { FC, InputHTMLAttributes, forwardRef, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { FormMessage } from '../../../components/ui/form'
import { Progress } from '../../../components/ui/progress'
import { FormType } from '../Login/useLoginForm'
import PasswordInput from './PasswordInput'

type PasswordInputProps = InputHTMLAttributes<HTMLInputElement>

const PasswordInputStrength: FC<PasswordInputProps> = forwardRef<
  HTMLInputElement,
  PasswordInputProps
>(({ ...props }, ref) => {
  const [strength, setStrength] = useState(0)

  const form = useFormContext<FormType>()

  const password = form.watch('password')

  function evaluatePasswordStrength(password: string) {
    let strength = 10

    if (password?.length >= 6) strength += 10
    if (/[A-Z]/.test(password)) strength += 20
    if (/[0-9]/.test(password)) strength += 20
    if (/[^A-Za-z0-9]/.test(password)) strength += 40

    return strength
  }

  useEffect(() => {
    setStrength(evaluatePasswordStrength(password))
  }, [password])

  return (
    <div>
      <PasswordInput ref={ref} {...props} />

      <FormMessage className="mt-2" />

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
