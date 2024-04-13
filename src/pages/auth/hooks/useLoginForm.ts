import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  email: z
    .string({
      description: 'First name'
    })
    .email({
      message: 'Invalid email format'
    }),
  password: z
    .string()
    .max(50, { message: 'Password must be at most 50 characters long' })
})

export type FormType = z.infer<typeof formSchema>

export function useLoginForm() {
  return useForm<FormType>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: ''
    }
  })
}
