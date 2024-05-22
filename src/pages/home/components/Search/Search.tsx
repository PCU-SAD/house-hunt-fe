import { buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { Link } from '@tanstack/react-router'
import { ChevronRight, SearchIcon } from 'lucide-react'
import { FC, useState } from 'react'

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
  'Prague 10'
]

type SearchProps = {
  homesAround: number
}

const Search: FC<SearchProps> = ({ homesAround }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const handlePlaceClick = (place: string) => {
    setSearchTerm(place)
    setIsFocused(false)
  }

  const filteredPlaces = places.filter((place) =>
    place.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="mt-6">
      <div className="relative mb-4">
        <Input
          placeholder="Search in Prague"
          className="w-full flex-1 rounded-full"
          icon={<SearchIcon className="h-4 w-4 text-gray-500" />}
          iconClassName="right-5"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 100)}
        />
        {isFocused && (
          <div className="absolute top-full z-10 mt-2 w-full rounded-lg border bg-white">
            <div className="p-4">
              <h2 className="text-md mb-2 font-semibold">Places in Prague</h2>
              <ul>
                {filteredPlaces.map((place) => (
                  <li
                    key={place}
                    className="cursor-pointer px-4 py-2"
                    onClick={() => handlePlaceClick(place)}>
                    {place}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      <div className="text-center">
        <p className="text-md font-semibold text-gray-800">
          Properties around {homesAround}
        </p>

        <Link
          className={cn(
            buttonVariants({
              size: 'sm'
            }),
            'mt-8'
          )}
          to="/properties">
          Browse All
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

export default Search
