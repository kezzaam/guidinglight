"use client"

import axios from 'axios'
import { useUserContext } from '@/context/UserContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useMemo } from 'react'
import { toast } from 'react-hot-toast'

interface FavouriteButtonProps {
  favouritedId: string // The ID of the item (e.g., star ID, constellation ID, etc.)
}

export default function FavouriteButton({ favouritedId }: FavouriteButtonProps) {
  const { userData } = useUserContext()
  const userId = userData?.id
  const favourites: string[] = useMemo(() => userData?.favourites || [], [userData?.favourites]);
  const [isFavourite, setIsFavourite] = useState(false)

  useEffect(() => {
    // Check if userData and favouritedId are available before setting isFavourite
    // This ensures previously favourited items are still marked as favourites
    if (favourites && favouritedId && userId) {
      setIsFavourite(favourites.includes(favouritedId))
    }
  }, [favourites, favouritedId, userId])

  const handleFavouriteClick = async () => {
    try {
      if (!userId) {
        // User not authenticated, handle the case based on your app's requirements
        toast.error('You must be logged in to favorite items.')
        return
      }

      if (isFavourite) {
        // Remove item from favorites
        const updatedFavourites = favourites.filter((favId: string) => favId !== favouritedId)
        await axios.put(`/api/users/${userId}`, { favourites: updatedFavourites })
      } else {
        // Add item to favorites
        const updatedFavourites = [...favourites, favouritedId]
        await axios.put(`/api/users/${userId}`, { favourites: updatedFavourites })
      }

      // Toggle the favourite state after successful update
      setIsFavourite((prevIsFavourite) => !prevIsFavourite)

      // Show success toast
      const toastMessage = isFavourite ? 'Removed from favorites' : 'Added to favorites'
      toast.success(toastMessage)
    } catch (error) {
      console.error('Error updating favorites:', error)
      // Handle error, such as toast or log it
      toast.error('Failed to update favorites.')
    }
  }

  return (
    <button
      onClick={handleFavouriteClick}
      className="bg-none hover:bg-none absolute top-0 right-0 px-8 py-6 hover:shadow-none"
    >
      <FontAwesomeIcon
        icon={faHeart}
        className={`text-3xl hover:text-fawn hover:opacity-100 stroke-intensewhite stroke-2xl ${
          isFavourite ? 'text-fuzzywuzzy' : 'text-intensewhite opacity-20 text-shadow'
        }`}
      />
    </button>
  )
}
