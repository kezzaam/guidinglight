import Cards from './Cards'
import Search from './Search'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Filter'
import { Star, Planet, Constellation, Asterism } from '@prisma/client'

// Define a union type for the possible item types in the 'discoveries' array
type DiscoveryItem = Star | Planet | Constellation | Asterism;

export default function Discoveries() {
  const [inputValue, setInputValue] = useState('')
  const [discoveries, setDiscoveries] = useState<DiscoveryItem[]>([])
  const [filteredData, setFilteredData] = useState<DiscoveryItem[]>([])

  const handleSearch = (keyword: string) => {
    setInputValue(keyword)
  }

  const handleFilter = (option: string) => {
    switch (option) {
      case 'all':
        setFilteredData(discoveries)
        break
      case 'named':
        setFilteredData(discoveries.filter((discovery) => discovery.category === 'star' && (discovery as Star).isNamed || discovery.category === 'star' && (discovery as Star).maori_name !== null || ''));        break
      case 'unnamed':
        setFilteredData(discoveries.filter((discovery) => discovery.category === 'star' && !(discovery as Star).isNamed))
        break
      case 'constellations':
        setFilteredData(discoveries.filter((discovery) => discovery.category === 'constellation'))
        break
      case 'asterisms':
        setFilteredData(discoveries.filter((discovery) => discovery.category === 'asterism'))
        break
      case 'planets':
        setFilteredData(discoveries.filter((discovery) => discovery.category === 'planet'))
        break
      case 'maori':
        setFilteredData(discoveries.filter((discovery) => discovery.maori_name !== '' && discovery.maori_name !== null));          break;
      default:
        setFilteredData(discoveries)
        break
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/discoveries')
        response.data.sort((a: DiscoveryItem, b: DiscoveryItem) => a.name.localeCompare(b.name))
        setDiscoveries(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    handleFilter('all') // Initialize with all discoveries
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [discoveries])

  return (
    <section className="w-full pt-32 lg:pt-10">
      <div className="sticky top-10 lg:flex lg:flex-row lg:space-x-2 lg:justify-center z-10">
        <Search onSearch={handleSearch} />
        <Filter onFilter={handleFilter} />
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-4 max-w-full md:grid-cols-2 sm:grid-cols-1 my-4 xl:px-[10%] px-[5%]">
        <Cards data={filteredData} inputValue={inputValue} />
      </div>
    </section>
  )
}