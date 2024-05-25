import { Container, Layout } from '@/components/common'
import GetInTouchForm from '@/components/common/GetInTouch/GetInTouchForm'
import AboutCarousel from '@/pages/about/components/AboutCarousel/carousel'
import OurTeam from '@/pages/about/components/OurTeam/OurTeam'
import OurValues from '@/pages/about/components/OurValues/OurValues'
import { FC } from 'react'

const About: FC = () => {
  return (
    <>
      <Layout>
        <Container className="mt-4">
          <AboutCarousel />
          <OurValues />
          <OurTeam />
          <section className="mt-8 w-full rounded-md bg-gray-100 py-12 md:py-24">
            <div className="mx-auto max-w-[500px]">
              <h2 className="text-center text-2xl font-bold">
                Get in touch with us
              </h2>
              <p className="mt-4 text-center text-gray-500">
                We are always ready to help you.
              </p>

              <GetInTouchForm />
            </div>
          </section>
        </Container>
      </Layout>
    </>
  )
}

export default About
