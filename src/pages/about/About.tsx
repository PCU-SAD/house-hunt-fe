import { Container, Layout } from '@/components/common'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Typography } from '@/components/ui/typography'
import AboutCarousel from '@/pages/about/components/AboutCarousel/carousel'
import { BriefcaseIcon, HeartIcon, HomeIcon } from 'lucide-react'
import { FC } from 'react'

type AboutProps = {}

const About: FC<AboutProps> = () => {
  return (
    <Layout>
      <Container>
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
                  Our team of experienced real estate professionals has in-depth
                  knowledge of the local market, enabling us to provide you with
                  expert guidance and insights.
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
                {/* <img
                  alt="Team Member"
                  className="mx-auto aspect-square rounded-full object-cover"
                  height={120}
                  src={''}
                  width={120}
                /> */}
                <h4 className="text-md font-bold">John Doe</h4>
                <p className="text-gray-500 dark:text-gray-400">Broker</p>
              </div>
              <div className="space-y-2 text-center">
                {/* <img
                  alt="Team Member"
                  className="mx-auto aspect-square rounded-full object-cover"
                  height={120}
                  src="/placeholder.svg"
                  width={120}
                /> */}
                <h4 className="text-md font-bold">Jane Smith</h4>
                <p className="text-gray-500 dark:text-gray-400">Agent</p>
              </div>
              <div className="space-y-2 text-center">
                {/* <img
                  alt="Team Member"
                  className="mx-auto aspect-square rounded-full object-cover"
                  height={120}
                  src="/placeholder.svg"
                  width={120}
                /> */}
                <h4 className="text-md font-bold">Michael Johnson</h4>
                <p className="text-gray-500 dark:text-gray-400">Agent</p>
              </div>
              <div className="space-y-2 text-center">
                {/* <img
                  alt="Team Member"
                  className="mx-auto aspect-square rounded-full object-cover"
                  height={120}
                  src="/placeholder.svg"
                  width={120}
                /> */}
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
              <form className="space-y-2">
                <Input placeholder="Name" type="text" />
                <Input placeholder="Email" type="email" />
                <Textarea placeholder="Message" />
                <div className="flex justify-between">
                  <Button variant="outline">Email</Button>
                  <Button variant="outline">Phone</Button>
                  <Button variant="outline">Chat</Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export default About
