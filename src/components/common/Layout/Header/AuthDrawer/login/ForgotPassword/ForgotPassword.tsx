import { userService } from '@/services/user-service/user-service'
import { useMutation } from '@tanstack/react-query'
import { FC } from 'react'

type ForgotPasswordProps = {}

const ForgotPassword: FC<ForgotPasswordProps> = () => {
  const forgotPasswordMutation = useMutation({
    mutationKey: ['forgot-password'],
    mutationFn: userService.forgotPassword
  })

  return <div>ForgotPassword</div>
}

export default ForgotPassword
