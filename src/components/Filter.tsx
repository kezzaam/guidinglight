import { useState } from 'react'

export default function Filter({ onFilter }: { onFilter: (option: string) => void }) {
  const [filterOption, setFilterOption] = useState('all')

  const handleFilter = (option: string) => {
    setFilterOption(option)
    onFilter(option)
  }

  return (
    <div className="items-center flex flex-wrap justify-center gap-2 text-base lg:text-lg mt-4 lg:mt-0">
      <button
        className={filterOption === 'all' ? 'py-2 px-4 rounded-lg text-white selected' : 'py-2 px-4 rounded-lg'}
        onClick={() => handleFilter('all')}
      >
        All
      </button>

      <button
        className={filterOption === 'maori' ? 'py-2 px-4 rounded-lg text-white selected' : 'py-2 px-4 rounded-lg'}
        onClick={() => handleFilter('maori')}
      >
        Maori
      </button>

      <button
        className={filterOption === 'named' ? 'py-2 px-4 rounded-lg text-white selected' : 'py-2 px-4 rounded-lg'}
        onClick={() => handleFilter('named')}
      >
        Named Stars
      </button>

      <button
        className={filterOption === 'unnamed' ? 'py-2 px-4 rounded-lg text-white selected' : 'py-2 px-4 rounded-lg'}
        onClick={() => handleFilter('unnamed')}
      >
        Un-named Stars
      </button>

      <button
        className={filterOption === 'constellations' ? 'py-2 px-4 rounded-lg text-white selected' : 'py-2 px-4 rounded-lg'}
        onClick={() => handleFilter('constellations')}
      >
        Constellations
      </button>

      <button
        className={filterOption === 'asterisms' ? 'py-2 px-4 rounded-lg text-white selected' : 'py-2 px-4 rounded-lg'}
        onClick={() => handleFilter('asterisms')}
      >
        Asterisms
      </button>

      <button
        className={filterOption === 'planets' ? 'py-2 px-4 rounded-lg text-white selected' : 'py-2 px-4 rounded-lg'}
        onClick={() => handleFilter('planets')}
      >
        Celestial Bodies
      </button>
    </div>
  )
}
