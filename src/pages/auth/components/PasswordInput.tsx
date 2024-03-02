import { cn } from '@/lib/utils'
import { FormType } from '@/pages/auth/LoginPage/LoginPage'
import { EyeNoneIcon } from '@radix-ui/react-icons'
import { EyeIcon } from 'lucide-react'
import { FC, InputHTMLAttributes, forwardRef, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { Button } from '../../../components/ui/button'
import { FormMessage } from '../../../components/ui/form'
import { Input } from '../../../components/ui/input'
import { Progress } from '../../../components/ui/progress'

type PasswordInputProps = InputHTMLAttributes<HTMLInputElement>

const PasswordInput: FC<PasswordInputProps> = forwardRef<
  HTMLInputElement,
  PasswordInputProps
>(({ ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false)
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

  function handleClick() {
    setShowPassword((prev) => !prev)
  }

  return (
    <div>
      <div className="relative">
        <Input
          {...props}
          ref={ref}
          type={showPassword ? 'input' : 'password'}
        />

        <Button
          onClick={handleClick}
          variant="ghost"
          type="button"
          className="absolute right-2 top-1/2 flex -translate-y-1/2 transform items-center p-1 hover:bg-transparent">
          {showPassword ? (
            <EyeIcon className="h-5 w-5" />
          ) : (
            <EyeNoneIcon className="h-5 w-5" />
          )}
        </Button>
      </div>

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

export default PasswordInput
