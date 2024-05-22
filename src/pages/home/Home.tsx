import { Container, Layout } from '@/components/common'
import { Card, CardContent } from '@/components/ui/card'
import Search from '@/pages/home/components/Search/Search'
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
            
            <Search
              homesAround={
                stats?.totalSaleProperties + stats?.totalRentalProperties
              }
            />
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
