
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Container, Layout } from '@/components/common'
import { FC } from 'react'

type AboutProps = {}

const About: FC<AboutProps> = () => {

  return (
    <Layout>
      <Container>About</Container>
    </Layout>
    <main className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
          <img
            alt="Hero Image"
            className="mx-auto aspect-[4/3] w-full overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            height="550"
            src="/placeholder.svg"
            width="800"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Discover Your Dream Home with House Hunter
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Our experienced team of real estate experts is dedicated to helping you find the perfect property that
                fits your lifestyle and budget.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container grid gap-6 px-4 md:px-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <Card>
            <CardHeader>
              <BriefcaseIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-bold">Expertise</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our team of experienced real estate professionals has in-depth knowledge of the local market, enabling
                us to provide you with expert guidance and insights.
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
                At House Hunter, we prioritize integrity, transparency, and personalized service, ensuring that your
                real estate journey is smooth and tailored to your unique needs.
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
                From property search and evaluation to negotiation and transaction support, our comprehensive services
                cover every aspect of your real estate needs.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-6 px-4 md:px-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Team</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our dedicated team of real estate experts is here to guide you every step of the way.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="space-y-2 text-center">
              <img
                alt="Team Member"
                className="mx-auto aspect-square rounded-full object-cover"
                height={120}
                src="/placeholder.svg"
                width={120}
              />
              <h4 className="text-lg font-bold">John Doe</h4>
              <p className="text-gray-500 dark:text-gray-400">Broker</p>
            </div>
            <div className="space-y-2 text-center">
              <img
                alt="Team Member"
                className="mx-auto aspect-square rounded-full object-cover"
                height={120}
                src="/placeholder.svg"
                width={120}
              />
              <h4 className="text-lg font-bold">Jane Smith</h4>
              <p className="text-gray-500 dark:text-gray-400">Agent</p>
            </div>
            <div className="space-y-2 text-center">
              <img
                alt="Team Member"
                className="mx-auto aspect-square rounded-full object-cover"
                height={120}
                src="/placeholder.svg"
                width={120}
              />
              <h4 className="text-lg font-bold">Michael Johnson</h4>
              <p className="text-gray-500 dark:text-gray-400">Agent</p>
            </div>
            <div className="space-y-2 text-center">
              <img
                alt="Team Member"
                className="mx-auto aspect-square rounded-full object-cover"
                height={120}
                src="/placeholder.svg"
                width={120}
              />
              <h4 className="text-lg font-bold">Emily Davis</h4>
              <p className="text-gray-500 dark:text-gray-400">Marketing</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container grid gap-6 px-4 md:px-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Have a question or ready to start your real estate journey? Contact us today.
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
    </main>
  )
}

export default About

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}