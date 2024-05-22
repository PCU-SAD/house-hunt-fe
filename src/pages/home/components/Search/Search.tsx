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
    <section className="w-full py-12">
      <div>
        <div className="w-full max-w-4xl rounded-lg bg-white bg-opacity-80 p-6 shadow-lg">
          {' '}
          {/* Adjust the opacity of the white box */}
          <div className="mb-4 flex items-center justify-center">
            <div className="relative">
              <div className="flex space-x-4">
                {/* {tabs.map((tab, index) => (
								<button
									key={tab}
									ref={(el) => (tabRefs.current[index] = el)}
									className={`relative px-4 py-2 font-semibold ${
										selectedTab === tab
											? 'text-navy-600'
											: 'text-gray-700'
									} hover:text-gray-500 focus:outline-none`}
									onMouseEnter={() => setHoveredTab(tab)}
									onMouseLeave={() => setHoveredTab(null)}
									onClick={() => setSelectedTab(tab)}>
									{tab} */}
                {/* </button> */}
                {/* ))} */}
              </div>
              {/* <div
							className="absolute bottom-0 h-0.5 bg-black transition-all duration-300"
							style={{
								width: `${hoveredTab ? tabRefs.current[tabs.indexOf(hoveredTab)]?.offsetWidth : tabRefs.current[tabs.indexOf(selectedTab)]?.offsetWidth}px`,
								left: `${hoveredTab ? tabRefs.current[tabs.indexOf(hoveredTab)]?.offsetLeft : tabRefs.current[tabs.indexOf(selectedTab)]?.offsetLeft}px`
							}}></div> */}
            </div>
          </div>
          <div className="mb-4 text-center">
            <h1 className="text-3xl font-bold text-gray-800">
              {' '}
              {/* Adjust the text color */}
              The #1 site real estate professionals trust*
            </h1>
          </div>
          <div className="relative mb-4 flex items-center justify-center">
            <input
              type="text"
              placeholder="Search in Prague"
              className="w-full max-w-md rounded-l-full border px-4 py-2 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 100)} // Delay to allow click on list items
            />
            <button className="relative rounded-r-full bg-black px-4 py-2 text-white transition duration-300 hover:bg-gray-600">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 2a8 8 0 105.293 14.293l4.707 4.707 1.414-1.414-4.707-4.707A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z" />
              </svg>
            </button>
            {isFocused && (
              <div className="absolute top-full z-10 mt-2 w-full max-w-md rounded-lg bg-white shadow-lg">
                <div className="p-4">
                  <h2 className="mb-2 text-lg font-semibold">
                    Places in Prague
                  </h2>
                  <ul>
                    {filteredPlaces.map((place) => (
                      <li
                        key={place}
                        className="cursor-pointer px-4 py-2 hover:bg-gray-200"
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
            <p className="text-lg font-semibold text-gray-800">
              {' '}
              {/* Adjust the text color */}
              Homes around {homesAround}
            </p>
            <a href="#" className="text-blue-500 underline">
              View all in Prague, CZ
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Search
