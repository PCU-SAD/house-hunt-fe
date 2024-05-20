import { Layout } from '@/components/common'
import { FC, useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Card, CardContent } from '@/components/ui/card'
import { BadgeDollarSign, BookUser, HomeIcon, Users } from 'lucide-react'
import { StatsResponse } from '@/services/stats-service/types'
import { statsService } from '@/services/stats-service/stats-service'
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
      <div className="flex flex-col min-h-[100dvh]">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link className="flex items-center justify-center" to="#">
            <HomeIcon className="h-6 w-6" />
            <span className="text-xl font-bold">House Hunter</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
              Properties
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
              About
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
              Contact
            </Link>
          </nav>
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 border-b">
            <div className="container px-4 md:px-6">
              <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                <div>
                  <img
                    alt="Hero"
                    className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
                    height={550}
                    src="/placeholder.svg"
                    width={1270}
                  />
                </div>
                <div className="flex flex-col items-start space-y-4">
                  <div className="space-y-2">
                    <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                      Your trusted real estate partner
                    </h1>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                      Acme Realty has been helping families find their dream homes for over 20 years. Our experienced team
                      is dedicated to providing exceptional service and finding the perfect property for your needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:grid-cols-4 lg:gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center justify-center space-y-2 p-6">
                  <HomeIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                  <div className="text-3xl font-bold">{stats?.totalRentalProperties || 0}</div>
                  <p className="text-gray-500 dark:text-gray-400">Rental Properties</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center justify-center space-y-2 p-6">
                  <BadgeDollarSign className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                  <div className="text-3xl font-bold">{stats?.totalSaleProperties || 0}</div>
                  <p className="text-gray-500 dark:text-gray-400">Sale Properties</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center justify-center space-y-2 p-6">
                  <BookUser className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                  <div className="text-3xl font-bold">{stats?.totalLandlords || 0}</div>
                  <p className="text-gray-500 dark:text-gray-400">Total Landlords</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center justify-center space-y-2 p-6">
                  <Users className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                  <div className="text-3xl font-bold">{stats?.totalTenants || 0}</div>
                  <p className="text-gray-500 dark:text-gray-400">Total Tenants</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Realty. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" to="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" to="#">
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
    </Layout>
  )
}

export default Home