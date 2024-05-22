import { Container, Layout } from '@/components/common'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import axios from 'axios'
import { toast } from 'sonner'

const requestFormSchema = z.object({
  name: z.string().nonempty('Name is required'),
  email: z.string().nonempty('Email is required').email('Invalid email'),
  subject: z.enum(['COMPLAINT', 'QUESTION', 'VIEWING']),
  message: z.string().nonempty('Message is required'),
  propertyId: z.string().optional(),
})

type RequestFormType = z.infer<typeof requestFormSchema>

const ContactUs: FC = () => {
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<RequestFormType>({
    resolver: zodResolver(requestFormSchema),
  })

  const onSubmit = async (data: RequestFormType) => {
    setIsLoading(true)

    try {
      await axios.post('http://localhost:8080/api/v1/user/request', data, {
        headers: {
          'Content-Type': 'application/json'
        },
      })

      toast.success("Info", {
        description: 'Your request has been successfully submitted.',
      })
    } catch (error) {
      toast.success("Error",{
        description: 'An error occurred while submitting the request.',
      })
    }

    setIsLoading(false)
  }

  return (
    <Layout>
      <Container>
        <section className="relative mt-8 w-full rounded-md py-12 md:py-24">
          <div className="absolute inset-0 bg-gray-100 opacity-40 rounded-md"></div>
          <div className="container relative z-10 grid gap-8 px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[700px] text-lg text-gray-600 dark:text-gray-400 md:text-xl">
                Have a question or ready to start your real estate journey?
                Contact us today.
              </p>
            </div>
            <div className="mx-auto w-full max-w-md">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Input
                    placeholder="Name"
                    type="text"
                    {...register('name')}
                    className="w-full"
                  />
                  {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                </div>
                <div>
                  <Input
                    placeholder="Email"
                    type="email"
                    {...register('email')}
                    className="w-full"
                  />
                  {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                </div>
                <div>
                  <select
                    {...register('subject')}
                    className="w-full rounded-md border border-gray-300 px-4 py-3"
                  >
                    <option value="">Select a subject</option>
                    <option value="COMPLAINT">Complaint</option>
                    <option value="QUESTION">Question</option>
                    <option value="VIEWING">Viewing</option>
                  </select>
                  {errors.subject && <span className="text-red-500"></span>}
                </div>
                <div>
                  <Textarea
                    placeholder="Message"
                    {...register('message')}
                    className="w-full"
                    rows={6}
                  />
                  {errors.message && <span className="text-red-500">{errors.message.message}</span>}
                </div>
                <Button
                  type="submit"
                  variant="outline"
                  className="w-full py-3 font-semibold"
                  // isLoading={isLoading}
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export default ContactUs
