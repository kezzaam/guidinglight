import { ReactNode } from 'react'
import starData from '../../../data/stars.6.json'

export interface Star {
  name: ReactNode
  desig: ReactNode
  con: ReactNode
  mag: ReactNode
  bv: ReactNode
  id: number
  properties: {
      name: string
  desig: string
  con: string
  mag: number
  bv: number
  }
  geometry: {
    type: string
    coordinates: number[]
  }
}

export async function GET(request: Request) {
  const stars = (starData.features)
  try {
    const responseData = Object.values(stars).map((star) => {
      const {
        id,
        properties: { name, desig, con, mag, bv },
        geometry
      } = star as unknown as Star

      return {
        id,
        name,
        desig,
        con,
        mag,
        bv,
        geometry,
      }
    })

    return new Response(JSON.stringify(responseData))
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }))
  }
}

// should return 4560 stars
// covers stars up to magnitude 6 which should cover most of the naked eye and named stars
// note: the Bright Star Catalog has 9110 stars 
