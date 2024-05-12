import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export const verificationFormSchema = z.object({
  document: z.any().refine((file) => {
    return !!file
  }, 'Document is required.')
  // .refine(
  //   (files) => files?.[0]?.size >= MAX_FILE_SIZE,
  //   `Max file size is 5MB.`
  // )
})
export type VerificationFormType = z.infer<typeof verificationFormSchema>

export function useVerificationForm() {
  return useForm({
    resolver: zodResolver(verificationFormSchema),
    mode: 'onChange',
    defaultValues: {
      document: null
    }
  })
}
