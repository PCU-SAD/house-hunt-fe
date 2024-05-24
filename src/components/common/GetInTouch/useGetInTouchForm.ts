import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const getInTouchFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  subject: z.enum(['COMPLAINT', 'QUESTION', 'VIEWING']),
  message: z.string().min(1, 'Message is required'),
  propertyId: z.string().optional()
})

type GetInTouchFormType = z.infer<typeof getInTouchFormSchema>

export function useGetInTouchForm(defaultValues?: GetInTouchFormType) {
  return useForm({
    resolver: zodResolver(getInTouchFormSchema),
    mode: 'onChange',
    defaultValues: defaultValues
      ? defaultValues
      : {
          name: '',
          email: '',
          subject: 'COMPLAINT',
          propertyId: ''
        }
  })
}
