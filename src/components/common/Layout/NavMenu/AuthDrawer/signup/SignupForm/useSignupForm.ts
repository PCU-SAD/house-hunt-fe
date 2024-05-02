import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { isValidPhoneNumber } from 'react-phone-number-input'
import { z } from 'zod'

const userTypeSchema = z.enum(['TENANT', 'LANDLORD'])
export type UserType = z.infer<typeof userTypeSchema>

export const specialCharPattern = /[@#$%^&+=*!()\-[\]{};:'",.<>/?\\|_~`]/

const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters long')
  .max(50, 'Password must be at most 50 characters long')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/\d/, 'Password must contain at least one number')
  .regex(
    specialCharPattern,
    'Password must contain at least one special character'
  )
  .refine((value) => !/\s/.test(value), {
    message: 'Password cannot contain whitespace'
  })

const signupFormSchema = z
  .object({
    type: userTypeSchema,
    name: z.string().min(1, 'First name is required').max(50),
    surname: z.string().min(1, 'Last name is required').max(50),
    phoneNumber: z
      .string()
      .refine(isValidPhoneNumber, { message: 'Invalid phone number' }),
    email: z.string().email({
      message: 'Invalid email format'
    }),
    password: passwordSchema,
    confirm_password: z.string(),
    terms: z
      .boolean()
      .default(false)
      .refine((value) => value, {
        message: 'You must agree to the terms and conditions'
      }),
    consent: z
      .boolean()
      .default(false)
      .refine((value) => value, {
        message: 'You must agree to process your data'
      }),
    privacy_policy: z
      .boolean()
      .default(false)
      .refine((value) => value, {
        message: 'You must agree to the privacy policy'
      })
  })
  .refine((values) => values.password === values.confirm_password, {
    message: 'Passwords do not match',
    path: ['confirm_password']
  })

export type SignupFormType = z.infer<typeof signupFormSchema>

export type SignupPostValues = {
  name: string
  surname: string
  phoneNumber: string
  email: string
  password: string
  role: UserType
}

export function useSignupForm() {
  return useForm<SignupFormType>({
    resolver: zodResolver(signupFormSchema),
    mode: 'onChange',
    defaultValues: {
      type: 'TENANT',
      name: '',
      surname: '',
      email: '',
      phoneNumber: '+420',
      password: '',
      confirm_password: '',
      terms: false,
      consent: false,
      privacy_policy: false
    }
  })
}
