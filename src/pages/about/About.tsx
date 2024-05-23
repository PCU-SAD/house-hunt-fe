import { Container, Layout } from '@/components/common'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Typography } from '@/components/ui/typography'
import AboutCarousel from '@/pages/about/components/AboutCarousel/carousel'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { BriefcaseIcon, HeartIcon, HomeIcon } from 'lucide-react'
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
        <Container>
          {' '}
          <div className="mt-4">
            <div className="flex flex-col gap-8 md:flex-row">
              <AboutCarousel />

              <div className="flex flex-col items-start justify-center space-y-6">
                <h1 className="text-3xl font-black md:text-5xl">
                  Your Trusted Real Estate Partner
                </h1>

                <p className="">
                  House Hunter has been helping families find their dream homes.
                  Our experienced team is dedicated to providing exceptional
                  service and finding the perfect property for your needs.
                </p>
              </div>
            </div>
          </div>
          <section className="mt-8 w-full rounded-md bg-gray-100 py-12 md:py-24">
            <div className="container grid gap-6 px-4 md:grid-cols-2 md:px-6 lg:grid-cols-3 lg:gap-8">
              <Card>
                <CardHeader>
                  <BriefcaseIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Expertise</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our team of experienced real estate professionals has
                    in-depth knowledge of the local market, enabling us to
                    provide you with expert guidance and insights.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <HeartIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Values</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    At House Hunter, we prioritize integrity, transparency, and
                    personalized service, ensuring that your real estate journey
                    is smooth and tailored to your unique needs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <HomeIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Services</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    From property search and evaluation to negotiation and
                    transaction support, our comprehensive services cover every
                    aspect of your real estate needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
          <section className="mt-8 w-full rounded-md bg-gray-100 px-4 py-12 md:py-24">
            <div className="flex flex-col items-center gap-6">
              <div className="text-center">
                <Typography variant="h2">Meet Our Team</Typography>
                <p className="text-center text-muted-foreground">
                  Our dedicated team of real estate experts is here to guide you
                  every step of the way.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
                <div className="space-y-2 text-center">
                  <h4 className="text-md font-bold">John Doe</h4>
                  <p className="text-gray-500 dark:text-gray-400">Broker</p>
                </div>
                <div className="space-y-2 text-center">
                  <h4 className="text-md font-bold">Jane Smith</h4>
                  <p className="text-gray-500 dark:text-gray-400">Agent</p>
                </div>
                <div className="space-y-2 text-center">
                  <h4 className="text-md font-bold">Michael Johnson</h4>
                  <p className="text-gray-500 dark:text-gray-400">Agent</p>
                </div>
                <div className="space-y-2 text-center">
                  <h4 className="text-md font-bold">Emily Davis</h4>
                  <p className="text-gray-500 dark:text-gray-400">Marketing</p>
                </div>
              </div>
            </div>
          </section>
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
