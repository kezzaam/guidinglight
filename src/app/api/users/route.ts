import bcrypt from 'bcryptjs'
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
    const body = await request.json()
    const { name, email, password } = body

    // check if all fields are present
    if (!name || !email || !password) {
      return new Response('Please fill out all fields', { status: 400 })
    }

    // check if email exists
    const userExists = await prisma.user.findUnique({ where: { email } })

    if (userExists) {
      return new Response('User already exists', { status: 400 })
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // create user
    const user = await prisma.user.create({ data: { name, email, password:hashedPassword } })
    return new Response(JSON.stringify({ user }))
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message, status: 500 }))
  }
}

