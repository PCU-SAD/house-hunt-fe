import { Container } from '@/components'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { FC } from 'react'
import { Link } from 'react-router-dom'

type HomePageProps = {}

const HomePage: FC<HomePageProps> = () => {
  return (
    <Container className="mt-6">
      <ul>
        <li>
          <Link to="/login" className="text-blue-800 underline">
            See login page
          </Link>
        </li>
        <li>
          <Link to="/signup" className="text-blue-800 underline">
            See signup page
          </Link>
        </li>
      </ul>
      <div className="grid-cols-fluid mt-6 grid gap-4">
        {new Array(10).fill(0).map((_, index) => (
          <Card>
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
  )
}

export default HomePage
