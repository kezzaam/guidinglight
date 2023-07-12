import prisma from './prisma'

export async function getUsers() {
  try {
    const users = await prisma.user.findMany()
    return { users }
  } catch (error) {
    return { error }
  }
}

export async function createUser(data: any) {
  try {
    const user = await prisma.user.create({ data })
    return { user }
  } catch (error) {
    return { error }
  }
}

export async function getUserById(id: any) {
  try {
    const user = await prisma.user.findUnique({ where: { id } })
    return { user }
  } catch (error) {
    return { error }
  }
}
