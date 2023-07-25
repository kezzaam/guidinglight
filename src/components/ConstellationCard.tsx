import { useState } from 'react'
import ConstellationMap from './ConstellationMap'
import FavouriteButton from './FavouriteButton'

export interface Constellation {
  id: string
  constellation_id: string
  name: string
  desig: string
  rank: number
  display: number[]
  geometry: JSON
  maori_name: string
  description: string
  category: string
  isFavourite: boolean
}

type ConstellationCardProps = {
  constellation: Constellation
}

export default function ConstellationCard({
  constellation,
}: ConstellationCardProps) {
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
          <div className="p-4">
            <h2 className="text-2xl mt-4">{constellation.name}</h2>
            <ConstellationMap
              constellationId={constellation.constellation_id}
            />

            <FavouriteButton
              favouritedId={constellation.id}
            />

          </div>
        </div>
        <div className="card-back bg-fuzzywuzzy border border-outerspace rounded-lg shadow md:flex-row md:max-w-xl hover:bg-outerspace">
          <div className="flex flex-col justify-between p-6 leading-normal">
            <h3 className="text-2xl mb-4 hover:text-fuzzy-wuzzy text-fawn">
              {constellation.name}
            </h3>
            <p>{constellation.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
