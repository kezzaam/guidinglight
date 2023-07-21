import { prisma } from '../../../../../prisma/prisma'

// get all users
export async function GET(request: Request) {
  try {
    const users = await prisma.favourites.findMany()
    return new Response(JSON.stringify({ users }))
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }))
  }
}