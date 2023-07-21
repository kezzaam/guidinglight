import { prisma } from '../../../../../prisma/prisma'

// get all asterisms
export async function GET(request: Request) {
  try {
    const asterisms = await prisma.asterism.findMany()
    return new Response(JSON.stringify({ asterisms }))
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }))
  }
}

// create new asterism
export async function POST(request: Request) {
  try {
    const data = await request.json()
    // create asterism
    const asterism = await prisma.asterism.create({ data })
    return new Response(JSON.stringify({ asterism }))
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }))
  }
}