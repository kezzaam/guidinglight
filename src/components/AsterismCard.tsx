import { useState } from 'react'
import AsterismMap from './AsterismMap'

export interface Asterism {
  id: string
  asterism_id: string
  name: string
  p: number
  loc: number[]
  geometry: any
  maori_name: string
  description: string
  category: string
}

type AsterismCardProps = {
  asterism: Asterism
}

export default function AsterismCard({ asterism }: AsterismCardProps) {
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
            <h2 className="text-2xl mt-4">{asterism.name}</h2>
            <AsterismMap asterism={asterism} />
          </div>
        </div>
        <div className="card-back bg-fuzzywuzzy border border-outerspace rounded-lg shadow md:flex-row md:max-w-xl hover:bg-outerspace">
          <div className="flex flex-col justify-between p-6 leading-normal">
            <h3 className="text-2xl mb-4 hover:text-fuzzy-wuzzy text-fawn">
              {asterism.name}
            </h3>
            <p>{asterism.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
