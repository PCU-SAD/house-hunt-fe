import { FormType } from '@/App'
import { cn } from '@/lib/utils'
import { EyeNoneIcon } from '@radix-ui/react-icons'
import { EyeIcon } from 'lucide-react'
import { FC, InputHTMLAttributes, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { Button } from './button'
import { FormMessage } from './form'
import { Input } from './input'
import { Progress } from './progress'

type PasswordInputProps = InputHTMLAttributes<HTMLInputElement>
export type PasswordStrength = 'weak' | 'moderate' | 'strong'

const PasswordInput: FC<PasswordInputProps> = ({ ...props }) => {
  const [showPassword, setShowPassword] = useState(false)

  const form = useFormContext<FormType>()

  const password = form.watch('password')

  const [strength, setStrength] = useState<PasswordStrength>('weak')

  function evaluatePasswordStrength(password: string) {
    let strength = 0

    if (password?.length >= 6) strength += 1
    if (/[a-z]/.test(password)) strength += 1
    if (/[A-Z]/.test(password)) strength += 1
    if (/[0-9]/.test(password)) strength += 1
    if (/[^A-Za-z0-9]/.test(password)) strength += 1

    switch (strength) {
      case 1:
      case 2:
        return 'weak'
      case 3:
      case 4:
        return 'moderate'
      case 5:
        return 'strong'
      default:
        return 'weak'
    }
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
        <Input {...props} type={showPassword ? 'input' : 'password'} />

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
        strength={strength}
        className={cn('mt-4 h-3 rounded-md')}
        value={strength === 'weak' ? 10 : strength === 'moderate' ? 40 : 100}
      />
      {strength === 'weak' && (
        <p className="mt-1 text-xs text-red-500">Weak password</p>
      )}
      {strength === 'moderate' && (
        <p className="mt-1 text-xs text-yellow-500">Moderate password</p>
      )}
      {strength === 'strong' && (
        <p className="mt-1 text-xs text-green-500">Strong password</p>
      )}
    </div>
  )
}

export default PasswordInput
