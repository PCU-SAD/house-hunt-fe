import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z
  .object({
    email: z
      .string({
        description: 'First name'
      })
      .email({
        message: 'Invalid email format'
      }),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long' })
      .max(20, { message: 'Password must be at most 20 characters long' })
      .regex(new RegExp(/[a-z]/), {
        message: 'Password must contain at least one lowercase letter'
      })
      .regex(new RegExp(/[A-Z]/), {
        message: 'Password must contain at least one uppercase letter'
      })
      .regex(new RegExp(/[0-9]/), {
        message: 'Password must contain at least one number'
      })
      .regex(new RegExp(/[!@#$%^&*(),.?":{}|<>]/), {
        message: 'Password must contain at least one special character'
      }),
    confirm_password: z.string()
  })
  .refine((values) => values.password === values.confirm_password, {
    message: 'Passwords do not match',
    path: ['confirm_password']
  })

export type FormType = z.infer<typeof formSchema>

export function useSignupForm() {
  return useForm<FormType>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      confirm_password: ''
    }
  })
}
