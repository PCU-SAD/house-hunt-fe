import { Container, Layout } from '@/components/common'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import AboutCarousel from '@/pages/about/components/AboutCarousel/carousel'
import OurTeam from '@/pages/about/components/OurTeam/OurTeam'
import OurValues from '@/pages/about/components/OurValues/OurValues'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

const requestFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  subject: z.enum(['COMPLAINT', 'QUESTION', 'VIEWING']),
  message: z.string().min(1, 'Message is required'),
  propertyId: z.string().optional()
})

type RequestFormType = z.infer<typeof requestFormSchema>

const About: FC = () => {
  const { register, handleSubmit } = useForm<RequestFormType>({
    resolver: zodResolver(requestFormSchema)
  })

  const { mutate, isPending } = useMutation({
    mutationFn: (data: RequestFormType) =>
      axios.post('http://localhost:8080/api/v1/user/request', data),
    onSuccess: () => {
      toast.success('Your request has been successfully submitted.')
    },
    onError: () => {
      toast.error('An error occurred while submitting the request.')
    }
  })

  const onSubmit = (data: RequestFormType) => {
    mutate(data)
  }

  return (
    <>
      <Layout>
        <Container className="mt-4">
          <AboutCarousel />
          <OurValues />
          <OurTeam />
          <section className="mt-8 w-full rounded-md bg-gray-100 py-12 md:py-24">
            <div className="container grid gap-6 px-4 md:px-6">
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Get in Touch
                </h2>
                <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a question or ready to start your real estate journey?
                  Contact us today.
                </p>
              </div>
              <div className="mx-auto w-full max-w-md space-y-4">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <Input
                    placeholder="Name"
                    {...register('name')}
                    // error={errors.name?.message}
                  />
                  <Input
                    placeholder="Email"
                    type="email"
                    {...register('email')}
                    // error={errors.email?.message}
                  />
                  <select
                    {...register('subject')}
                    className="w-full rounded-md border border-gray-300 px-3 py-2">
                    <option value="">Select a subject</option>
                    <option value="COMPLAINT">Complaint</option>
                    <option value="QUESTION">Question</option>
                    <option value="VIEWING">Viewing</option>
                  </select>
                  <Textarea
                    placeholder="Message"
                    {...register('message')}
                    // error={errors.message?.message}
                  />
                  <Button type="submit" variant="outline" loading={isPending}>
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </section>
        </Container>
      </Layout>
    </>
  )
}

export default About
