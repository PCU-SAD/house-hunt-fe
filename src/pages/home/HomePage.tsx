import { Container } from '@/components'
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
      <div className="mt-6 flex flex-col gap-12">
        <div className="h-32 rounded-md border border-pink-400"></div>
        <div className="h-32 rounded-md border border-pink-400"></div>
        <div className="h-32 rounded-md border border-pink-400"></div>
        <div className="h-32 rounded-md border border-pink-400"></div>
        <div className="h-32 rounded-md border border-pink-400"></div>
      </div>
    </Container>
  )
}

export default HomePage
