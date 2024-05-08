import { Container, Layout } from '@/components/common'
import { Card, CardTitle } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { welcomeCards } from '@/pages/home/welcomeCards'
import { FC } from 'react'
import RoofImg from '/roof.svg'

type HomeProps = {}

const Home: FC<HomeProps> = () => {
  return (
    <Layout>
      <Container>
        <img
          src={RoofImg}
          alt="background"
          className="absolute left-1/2 top-[160px] w-[400px] -translate-x-1/2"></img>

        <div className="">
          <div>
            <Typography variant="h2" className="text-center">
              House Hunter — Your Ultimate Property Marketplace
            </Typography>
          </div>

          <div className="mt-[220px] flex flex-col items-stretch gap-8 sm:justify-center md:flex-row">
            {welcomeCards.map((card) => {
              return (
                <Card className="p-4 md:max-w-[300px]" key={card.key}>
                  <CardTitle>{card.title}</CardTitle>
                  <p className="mt-2 text-sm">{card.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Home
