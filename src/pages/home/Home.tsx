import { Container, Layout } from '@/components'
import { Link } from '@tanstack/react-router'

import { FC } from 'react'

type HomeProps = {}

const Home: FC<HomeProps> = () => {
  return (
    <Layout>
      <Container>
        <div className="flex flex-col gap-3">
          <Link to="/login" className="underline">
            See login page
          </Link>

          <Link to="/signup" className="text-blue-800 underline">
            See signup page
          </Link>
        </div>
      </Container>
    </Layout>
  )
}

export default Home
