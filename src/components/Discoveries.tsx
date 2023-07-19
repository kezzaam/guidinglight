"use client"

import Cards from './Cards'
import { processDiscoveries } from '../utils/processDiscoveries'
import Search from './Search'
import { useState, useCallback, useEffect } from 'react'
import { useInfiniteQuery } from 'react-query'

export default function Discoveries() {
  // call data handling function
  const discoveries = processDiscoveries()
  // states for search and filter
  const [inputValue, setInputValue] = useState('')
  const [allDiscoveries] = useState(discoveries)
  const [filteredDiscoveries, setFilteredDiscoveries] = useState(allDiscoveries)

  // for infinite scroll from react query, so we don't have to load all the data at once
  const fetchDiscoveries = async (page: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return allDiscoveries.slice((page - 1) * 10, page * 10)
  }

  const {
    data,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ['query'],
    async ({ pageParam = 1 }) => {
      const response = await fetchDiscoveries(pageParam)
      return response
    },
    {
      getNextPageParam: (_, pages) => {
        return pages.length + 1
      },
      initialData: {
        pages: [filteredDiscoveries.slice(0, 12)], // first 12 items
        pageParams: [1],
      },
    }
  )

  const handleSearch = (inputValue: string) => {
    const filteredDiscoveries = allDiscoveries.filter((discovery) => {
      return discovery.name.toLowerCase().includes(inputValue.toLowerCase());
    });
    setFilteredDiscoveries(filteredDiscoveries);
  };
  


  return (
    <section className="w-full p-[10%] flex flex-col items-center">
      <div className="search sticky top-0">
        <Search onSearch={handleSearch} />
        <div>
          <button
          >
            All
          </button>
          <button
          >
            Named Stars
          </button>
          <button
          >
            Un-named Stars
          </button>
          <button
          >
            Constellations
          </button>
          <button
          >
            Planets
          </button>
          <button
          >
            Asterisms
          </button>
        </div>
        {/* pagination */}
        <div>
          {data?.pages.map((page) =>
            page.map((data) => <div key={data.id}>{data.name}</div>)
          )}
          <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            {isFetchingNextPage
              ? 'Loading more...'
              : (data?.pages.length ?? 0) < 12
                ? 'Load More'
                : 'Nothing more to load'}
          </button>
        </div>
      </div>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-4 max-w-full md:grid-cols-2 sm:grid-cols-1">
        <Cards data={filteredDiscoveries} />
      </div>
    </section>
  )
}
