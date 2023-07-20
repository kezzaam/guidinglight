"use client"

import { useState, ChangeEvent, FormEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

interface SearchProps {
  onSearch: (keyword: string) => void
}

export default function Search({ onSearch }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value.trim().toLowerCase()
    setSearchTerm(keyword)
    onSearch(keyword)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-row items-center justify-center">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
          className="rounded-l-lg py-2 px-4 bg-bluegrey text-intensewhite text-lg placeholder-intensewhite placeholder-opacity-50"
        />
        <button type="submit" className="rounded-r-lg bg-bluegrey text-lg py-2 px-4">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </>
  )
}
