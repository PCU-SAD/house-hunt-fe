import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

const resetPasswordSearchSchema = z.object({
  token: z.string().min(1)
})

export const Route = createFileRoute('/reset-password')({
  validateSearch: (value) => resetPasswordSearchSchema.parse(value),
  component: () => <div>Hello /forgot-password!</div>
})
