import { Container, Layout } from '@/components/common'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import Testimonials from '@/pages/home/components/Testimonials/Testimonials'
import { statsService } from '@/services/stats-service/stats-service'
import { StatsResponse } from '@/services/stats-service/types'
import { Link } from '@tanstack/react-router'
import {
  BadgeDollarSign,
  BookUser,
  ChevronRight,
  HomeIcon,
  Users
} from 'lucide-react'
import { FC, useEffect, useState } from 'react'

type HomeProps = {}

const Home: FC<HomeProps> = () => {
  const [stats, setStats] = useState<StatsResponse | null>(null)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await statsService.getStats()
        setStats(data)
      } catch (error) {
        console.error('Error fetching stats:', error)
      }
    }

    fetchStats()
  }, [])

  return (
    <Layout>
      <div className="mt-14 flex flex-col">
        <section className="relative min-h-[600px] w-full py-12 shadow-xl">
          <div className="absolute inset-0 -left-[200px] -right-[200px] -top-[200px] -z-10 rounded-md bg-[url('/images/hero.jpg')] bg-cover bg-[bottom_center] bg-no-repeat opacity-30"></div>

          <div className="p-6 text-center">
            <div className="mx-auto max-w-[600px]">
              <h1 className="text-2xl font-extrabold text-slate-700 md:text-3xl lg:text-5xl">
                Your trusted real estate partner
              </h1>
              <p className="mt-4 font-semibold text-slate-900">
                Discover a seamless and rewarding experience in buying, selling,
                or renting your next home. With our expert guidance and
                comprehensive resources, we turn your real estate dreams into
                reality. Trust us to navigate the market with you, providing
                personalized support every step of the way.
              </p>

              <Link className={cn(buttonVariants(), 'mt-8')} to="/properties">
                Browse properties
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <Container>
          <section className="w-full py-12">
            <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
              <Card className="transition-shadow hover:shadow-lg">
                <CardContent className="flex flex-col items-center justify-center space-y-2 p-6">
                  <HomeIcon className="h-8 w-8 text-gray-500" />
                  <div className="text-3xl font-bold">
                    {stats?.totalRentalProperties || 0}
                  </div>
                  <p className="text-gray-500">Rental Properties</p>
                </CardContent>
              </Card>
              <Card className="transition-shadow hover:shadow-lg">
                <CardContent className="flex flex-col items-center justify-center space-y-2 p-6">
                  <BadgeDollarSign className="h-8 w-8 text-gray-500" />
                  <div className="text-3xl font-bold">
                    {stats?.totalSaleProperties || 0}
                  </div>
                  <p className="text-gray-500">Sale Properties</p>
                </CardContent>
              </Card>
              <Card className="transition-shadow hover:shadow-lg">
                <CardContent className="flex flex-col items-center justify-center space-y-2 p-6">
                  <BookUser className="h-8 w-8 text-gray-500" />
                  <div className="text-3xl font-bold">
                    {stats?.totalLandlords || 0}
                  </div>
                  <p className="text-gray-500">Total Landlords</p>
                </CardContent>
              </Card>
              <Card className="transition-shadow hover:shadow-lg">
                <CardContent className="flex flex-col items-center justify-center space-y-2 p-6">
                  <Users className="h-8 w-8 text-gray-500" />
                  <div className="text-3xl font-bold">
                    {stats?.totalTenants || 0}
                  </div>
                  <p className="text-gray-500">Total Tenants</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <Testimonials />
        </Container>
      </div>
    </Layout>
  )
}

export default Home
