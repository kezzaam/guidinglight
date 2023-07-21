import { prisma } from '../../../../../prisma/prisma'

// get all constellations
export async function GET(request: Request) {
  try {
    const constellations = await prisma.constellation.findMany()
    return new Response(JSON.stringify({ constellations }))
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }))
  }
}

// create new constellation
export async function POST(request: Request) {
  try {
    const data = await request.json()
    // create constellation
    const constellation = await prisma.constellation.create({ data })
    return new Response(JSON.stringify({ constellation }))
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }))
  }
}