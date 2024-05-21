import { Container, Layout } from '@/components/common'
import Carousel from '@/components/common/Layout/Home/carousel'
import { Card, CardContent } from '@/components/ui/card'
import Testimonials from '@/pages/home/components/Testimonials/Testimonials'
import { statsService } from '@/services/stats-service/stats-service'
import { StatsResponse } from '@/services/stats-service/types'
import { BadgeDollarSign, BookUser, HomeIcon, Users } from 'lucide-react'
import { FC, useEffect, useRef, useState } from 'react'
import BannerBackgroundUrl from '/banner_bg.png'
type HomeProps = {}

const Home: FC<HomeProps> = () => {
  const [stats, setStats] = useState<StatsResponse | null>(null)
  const [selectedTab, setSelectedTab] = useState('Buy');
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const tabs = ['Buy', 'Rent', 'Sell'];

  const places = [
    'Prague 1',
    'Prague 2',
    'Prague 3',
    'Prague 4',
    'Prague 5',
    'Prague 6',
    'Prague 7',
    'Prague 8',
    'Prague 9',
    'Prague 10',
  ];

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const filteredPlaces = places.filter((place) =>
    place.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  const handlePlaceClick = (place: string) => {
    setSearchTerm(place);
    setIsFocused(false);
  };

  return (
    <Layout>
      <Container>
        <div className="mt-14 flex flex-col">
          <section className="w-full flex-1 border-b py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="mx-auto grid max-w-[1300px] gap-8 px-4 sm:px-6 md:grid-cols-2 md:gap-16 md:px-10">
                <div className="relative">
                  <Carousel />
                </div>
                <div className="flex flex-col items-start justify-center space-y-6">
                  <div className="space-y-4">
                    <h1 className="lg:leading-tighter text-4xl font-bold tracking-tighter text-gray-800 sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl">
                      Your Trusted Real Estate Partner
                    </h1>
                    <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl font-medium">
                      House Hunter has been helping families find their dream homes. Our experienced team is dedicated to providing exceptional service and finding the perfect property for your needs.
                    </p>
                  </div>
                  <button className="bg-navy-600 text-white px-8 py-4 rounded-full font-semibold tracking-wide hover:bg-navy-700 transition duration-300">
                    Explore Properties
                  </button>
                </div>
              </div>
            </div>

            <section className="w-full py-12">
              <div
                className="flex flex-col items-center justify-center min-h-screen font-sans bg-cover bg-center"
                style={{
                  backgroundImage: `url(${BannerBackgroundUrl})`,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a semi-transparent black overlay
                }}
              >
                <div className="w-full max-w-4xl p-6 bg-white bg-opacity-80 shadow-lg rounded-lg"> {/* Adjust the opacity of the white box */}
                  <div className="flex justify-center items-center mb-4">
                    <div className="relative">
                      <div className="flex space-x-4">
                        {tabs.map((tab, index) => (
                          <button
                            key={tab}
                            ref={(el) => (tabRefs.current[index] = el)}
                            className={`relative px-4 py-2 font-semibold ${selectedTab === tab ? 'text-navy-600' : 'text-gray-700'
                              } hover:text-gray-500 focus:outline-none`}
                            onMouseEnter={() => setHoveredTab(tab)}
                            onMouseLeave={() => setHoveredTab(null)}
                            onClick={() => setSelectedTab(tab)}
                          >
                            {tab}
                          </button>
                        ))}
                      </div>
                      <div
                        className="absolute bottom-0 h-0.5 bg-black transition-all duration-300"
                        style={{
                          width: `${hoveredTab ? tabRefs.current[tabs.indexOf(hoveredTab)]?.offsetWidth : tabRefs.current[tabs.indexOf(selectedTab)]?.offsetWidth}px`,
                          left: `${hoveredTab ? tabRefs.current[tabs.indexOf(hoveredTab)]?.offsetLeft : tabRefs.current[tabs.indexOf(selectedTab)]?.offsetLeft}px`,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <h1 className="text-3xl font-bold text-gray-800"> {/* Adjust the text color */}
                      The #1 site real estate professionals trust*
                    </h1>
                  </div>
                  <div className="flex items-center justify-center mb-4 relative">
                    <input
                      type="text"
                      placeholder="Search in Prague"
                      className="px-4 py-2 w-full max-w-md border rounded-l-full focus:outline-none"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setTimeout(() => setIsFocused(false), 100)} // Delay to allow click on list items
                    />
                    <button className="bg-black text-white px-4 py-2 rounded-r-full hover:bg-gray-600 transition duration-300 relative">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 2a8 8 0 105.293 14.293l4.707 4.707 1.414-1.414-4.707-4.707A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z" />
                      </svg>
                    </button>
                    {isFocused && (
                      <div className="absolute top-full mt-2 w-full max-w-md bg-white shadow-lg rounded-lg z-10">
                        <div className="p-4">
                          <h2 className="text-lg font-semibold mb-2">Places in Prague</h2>
                          <ul>
                            {filteredPlaces.map((place) => (
                              <li
                                key={place}
                                className="py-2 px-4 hover:bg-gray-200 cursor-pointer"
                                onClick={() => handlePlaceClick(place)}
                              >
                                {place}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-800"> {/* Adjust the text color */}
                      Homes around {stats?.totalRentalProperties + stats?.totalSaleProperties}
                    </p>
                    <a href="#" className="text-blue-500 underline">View all in Prague, CZ</a>
                  </div>
                </div>
              </div>
            </section>
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
