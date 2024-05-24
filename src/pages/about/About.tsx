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
            <GetInTouchForm />
          </section>
        </Container>
      </Layout>
    </>
  )
}

export default About
