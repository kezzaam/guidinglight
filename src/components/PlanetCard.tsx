import Image from 'next/image'
import { useState } from 'react'
import FavouriteButton from './FavouriteButton'

export interface Planet {
    id: string
    name: string
    img: string
    trajectory: boolean
    H:number
    sym: string
    maori_name: string
    description: string
    category: string
    isFavourite: boolean
}

type PlanetCardProps = {
    planet: Planet
}

export default function PlanetCard({ planet }: PlanetCardProps) {
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
            <div className="flex flex-col items-center pt-8">
              <Image
                src={`/images/${encodeURIComponent(planet.img)}`}
                alt={planet.name}
                width={200}
                height={200}
              />
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h2 className="mb-2 text-2xl font-bold">{planet.name}</h2>
              <div className="mb-3 text-intensewhite">
                <p>{planet.sym}</p>
                <h4 className="text-3xl">{planet.maori_name}</h4>

                <FavouriteButton
                  favouritedId={planet.id}
                />
          
              </div>
            </div>
          </div>
          <div className="card-back bg-fuzzywuzzy border border-outerspace rounded-lg shadow md:flex-row md:max-w-xl hover:bg-outerspace">
            <div className="flex flex-col justify-between p-6 leading-normal">
              <h3 className="text-4xl mb-4 hover:text-fuzzy-wuzzy text-fawn">{planet.sym}</h3>
              <p>{planet.description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }



