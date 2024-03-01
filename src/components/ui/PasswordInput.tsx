import { EyeNoneIcon } from '@radix-ui/react-icons'
import { EyeIcon } from 'lucide-react'
import { FC, InputHTMLAttributes, useEffect, useState } from 'react'
import { Button } from './button'
import { Input } from './input'
import { Progress } from './progress'

type PasswordInputProps = InputHTMLAttributes<HTMLInputElement>

const PasswordInput: FC<PasswordInputProps> = ({ ...props }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('weak')

  const [strength, setStrength] = useState('')

  const evaluatePasswordStrength = (password: string) => {
    let strength = 0
    if (password.length >= 6) strength += 1
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

  function handleChagne(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
  }

  return (
    <div>
      <div className="relative">
        <Input
          {...props}
          onChange={handleChagne}
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
      <Progress
        className="mt-6 h-3"
        value={strength === 'weak' ? 0 : strength === 'moderate' ? 50 : 100}
      />
    </div>
  )
}

export default PasswordInput
