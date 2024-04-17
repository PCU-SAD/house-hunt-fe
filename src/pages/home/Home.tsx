import { Container, Layout } from '@/components'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Link } from '@tanstack/react-router'
import { FC } from 'react'

type HomePageProps = {}

const HomePage: FC<HomePageProps> = () => {
  return (
    <Layout>
      <Container className="mt-6">
        <ul>
          <li>
            <Link to="/login" className="underline">
              See login page
            </Link>
          </li>
          <li>
            <Link to="/signup" className="text-blue-800 underline">
              See signup page
            </Link>
          </li>
        </ul>

        <div className="mt-6 grid grid-cols-fluid gap-4">
          {new Array(10).fill(0).map((_, index) => (
            <Card key={index}>
              <CardHeader>
                <h2>Apartment {index + 1}</h2>
              </CardHeader>
              <CardContent>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptate.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Layout>
  )
}

export default HomePage
