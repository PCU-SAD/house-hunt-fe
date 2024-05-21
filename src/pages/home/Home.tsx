import { Container, Layout } from '@/components/common'
import { Card, CardContent } from '@/components/ui/card'
import Testimonials from '@/pages/home/components/Testimonials/Testimonials'
import { statsService } from '@/services/stats-service/stats-service'
import { StatsResponse } from '@/services/stats-service/types'
import { BadgeDollarSign, BookUser, HomeIcon, Users } from 'lucide-react'
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
      <Container>
        <div className="mt-14 flex flex-col">
          <section className="w-full flex-1 border-b py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="mx-auto grid max-w-[1300px] gap-4 px-4 sm:px-6 md:grid-cols-2 md:gap-16 md:px-10">
                <div>
                  <img
                    alt="Hero"
                    className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-contain"
                    height={550}
                    src="/placeholder.svg"
                    width={1270}
                  />
                </div>
                <div className="flex flex-col items-start space-y-4">
                  <div className="space-y-2">
                    <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter text-gray-800 sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                      Your trusted real estate partner
                    </h1>
                    <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                      Acme Realty has been helping families find their dream
                      homes for over 20 years. Our experienced team is dedicated
                      to providing exceptional service and finding the perfect
                      property for your needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

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
        </div>
      </Container>
    </Layout>
  )
}

export default Home
