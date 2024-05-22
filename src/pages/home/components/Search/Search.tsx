import { buttonVariants } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { districts } from '@/pages/owner/add-new-property/components/NewPropertyForm/useNewPropertyForm'
import { Link } from '@tanstack/react-router'
import { ChevronRight } from 'lucide-react'
import { FC } from 'react'

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
  return (
    <div className="mt-6">
      <div className="relative mb-4">
        <Select onValueChange={() => {}} defaultValue={'PRAGUE 1'}>
          <SelectTrigger className="rounded-full">
            <SelectValue placeholder="Select your district" />
          </SelectTrigger>

          <SelectContent className="rounded-xl">
            {districts.map((option) => (
              <SelectItem value={option} key={option}>
                {option.at(0).toUpperCase() + option.slice(1).toLowerCase()}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="text-center">
        {!isNaN(homesAround) && (
          <p className="text-md font-semibold text-gray-800">
            Properties around {homesAround}
          </p>
        )}

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
