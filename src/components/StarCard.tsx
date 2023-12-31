import { useState } from 'react'
import Star from './Star'
import FavouriteButton from './FavouriteButton'

export interface Star {
  id: string
  star_id: number
  name: string
  maori_name: string | null
  designation: string
  asterism: string
  constellation: string
  maori_constellation: string
  magnitude: number
  bv_index: number
  geometry: JSON
  geometry_type: string
  geometry_coordinates: number[]
  description: string
  isNamed: boolean
  category: string
  isFavourite: boolean
}

type StarCardProps = {
  star: Star
}

export default function StarCard({ star }: StarCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleCardClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div
      className={`card ${isFlipped ? 'flipped' : ''}`}
      onClick={handleCardClick}
    >
 <div className="card-inner">
        <div className="card-front bg-cetaceanblue border border-outerspace rounded-lg shadow md:flex-row md:max-w-xl hover:bg-outerspace">
          <div className="flex flex-col items-center py-14">
            <div><Star bv_index={star.bv_index} /></div>
            
            <h2 className="text-2xl">
              {star.name ? star.name : star.designation}
            </h2>
            <h3 className="text-lg">{star.maori_name ? star.maori_name : ''}</h3>
              <p className="text-sm">{star.constellation ? `Constellation: ${star.constellation}` : ''}</p>
              <p className="text-sm">Magnitude: {star.magnitude}</p>
              <p className="text-sm">BV index: {star.bv_index}</p>

              <FavouriteButton
                  favouritedId={star.id}
                />

          </div>
        </div>
        <div className="card-back bg-fuzzywuzzy border border-outerspace rounded-lg shadow md:flex-row md:max-w-xl hover:bg-outerspace">
          <div className="flex flex-col p-6 leading-normal">
            <h3 className="text-2xl mb-4 hover:text-fuzzy-wuzzy text-fawn">
              {star.name ? star.name : star.designation}
            </h3>
            <p>{star.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
