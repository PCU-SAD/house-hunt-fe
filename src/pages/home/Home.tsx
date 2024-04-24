import { Container, Layout } from '@/components'
import { Typography } from '@/components/ui/typography'
import { FC } from 'react'

type HomeProps = {}

const Home: FC<HomeProps> = () => {
  return (
    <Layout>
      <Container>
        <Typography variant="h2">HomePage</Typography>
      </Container>
    </Layout>
  )
}

export default Home
