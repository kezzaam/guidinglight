"use client"

import { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

const UserContext = createContext({
  userData: {
    email: '',
    name: '',
    id: '',
    favourites: null, // Initialize favourites as null
  },
  setUserData: (userData: any) => {},
})

export const useUserContext = () => useContext(UserContext)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userData, setUserData] = useState({
    email: '',
    name: '',
    id: '',
    favourites: null, // Initialize favourites as null
  })

  // Fetch user data on component mount
  useEffect(() => {
    const getUserData = async () => {
      try {
        if (!userData.email) return // Check if email exists

        const response = await axios.get(`/api/users/${encodeURIComponent(userData.email)}`)
        const { name, id, favourites } = response.data?.user || {}

        // If data is available, update the context
        if (name && id) {
          setUserData((prevUserData) => ({
            ...prevUserData,
            name,
            id,
            favourites, // Set the favourites data
          }))
        }
      } catch (error) {
        console.error('Error fetching user data:', error)
        throw new Error('User data not found')
      }
    }

    getUserData()
  }, [userData.email])

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  )
}
