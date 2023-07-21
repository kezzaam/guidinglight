import { prisma } from '../../../../../prisma/prisma'

// get all planets
export async function GET(request: Request) {
  try {
    const planets = await prisma.planet.findMany()
    return new Response(JSON.stringify({ planets }))
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }))
  }
}

// create new planet
export async function POST(request: Request) {
  try {
    const data = await request.json()
    // create planet
    const planet = await prisma.planet.create({ data })
    return new Response(JSON.stringify({ planet }))
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }))
  }
}