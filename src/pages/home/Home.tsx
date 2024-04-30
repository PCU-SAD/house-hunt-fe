import { Container, Layout } from '@/components'

import { FC } from 'react'

type HomeProps = {}

const Home: FC<HomeProps> = () => {
  return (
    <Layout>
      <Container>
        <div className="flex flex-col gap-3"></div>
      </Container>
    </Layout>
  )
}

export default Home
