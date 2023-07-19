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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  )
}
