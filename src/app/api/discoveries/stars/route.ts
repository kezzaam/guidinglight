import { prisma } from '../../../../../prisma/prisma'

// get all stars
export async function GET(request: Request) {
  try {
    const stars = await prisma.star.findMany()
    return new Response(JSON.stringify({ stars }))
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }))
  }
}

// create new star
export async function POST(request: Request) {
  try {
    const data = await request.json()
    // create star
    const star = await prisma.star.create({ data })
    return new Response(JSON.stringify({ star }))
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }))
  }
}

// CRUD JSON example
// {
//     "star_id": 1111111,
//     "name": "Keren's Cool Star",
//     "designation": "HD224865",
//     "constellation": "",
//     "magnitude": 5.6243,
//     "bv_index": 1.615,
//     "geometry": {
//       "type": "Point",
//       "coordinates": [
//         0.3338,
//         -50.3374
//       ]
//     },
//     "geometry_type": "Point",
//     "geometry_coordinates": [
//       0.3338,
//       -50.3374
//     ],
//     "isNamed": false,
//     "category": "star"
//   }