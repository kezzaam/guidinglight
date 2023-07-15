import { prisma } from '../../../../prisma/prisma'

// get all users
export async function GET(request: Request) {
  try {
    const users = await prisma.user.findMany()
    return new Response(JSON.stringify({ users }))
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }))
  }
}

// create new user
export async function POST(request: Request) {
  try {
    const data = await request.json()
    const user = await prisma.user.create({ data })
    return new Response(JSON.stringify({ user }))
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }))
  }
}

