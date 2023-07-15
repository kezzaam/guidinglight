import React from 'react'
import { Star } from './StarCard'
import StarCard from './StarCard'

type CardProps = {
  data: (Star | Planet | Constellation | Asterism)[] // Adjust the types based on your data structure
}

type Planet = {
  id: string
  name: string
  desig: string
  H: string
  elements: any[] // Adjust the type based on the actual structure
  sym: string
}

type Constellation = {
  id: string
  name: string
  desig: string
  rank: string
  display: string
}

type Asterism = {
  id: string
  name: string
  location: string
  p: string
}

const Cards: React.FC<CardProps> = ({ data }) => {
  return (
    <div>
      {data.map((item) => {
        if ('mag' in item) {
          // Handle star data
          // Handle star data
          const star = item as Star;
          return <StarCard key={star.id} star={star} />
        } else if ('H' in item) {
          // Handle planet data
          const planet = item as Planet
          return (
            <div key={planet.id}>
              <h3>{planet.name}</h3>
              <p>Designation: {planet.desig}</p>
              <p>H: {planet.H}</p>
              {/* Render other properties specific to planets */}
            </div>
          )
        } else if ('rank' in item) {
          // Handle constellation data
          const constellation = item as Constellation
          return (
            <div key={constellation.id}>
              <h3>{constellation.name}</h3>
              <p>Designation: {constellation.desig}</p>
              <p>Rank: {constellation.rank}</p>
              <p>Display: {constellation.display}</p>
              {/* Render other properties specific to constellations */}
            </div>
          )
        } else if ('location' in item) {
          // Handle asterism data
          const asterism = item as Asterism
          return (
            <div key={asterism.id}>
              <h3>{asterism.name}</h3>
              <p>Location: {asterism.location}</p>
              <p>P: {asterism.p}</p>
              {/* Render other properties specific to asterisms */}
            </div>
          )
        }
        return null
      })}
    </div>
  )
}

export default Cards
