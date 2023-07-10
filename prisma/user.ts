import { PrismaClient, User } from '@prisma/client'

// Create an instance of PrismaClient
const prisma = new PrismaClient()

// Function to create a new user
export const createUser = async (username: string, email: string, password: string): Promise<User> => {
  
    const user = await prisma.user.create({
    data: {
      username,
      email,
      password,
    },
  })

  return user

}

// Function to get all users
export const getAllUsers = async (): Promise<User[]> => {
  
    const users = await prisma.user.findMany()
  // You can put orderBy clause here to specify the sorting order

  return users

}

// Function to get a user by their ID
export const getUserById = async (id: string): Promise<User | null> => {
  
    const user = await prisma.user.findUnique({
    where: {
      id,
    },
  })

  return user

}

// Function to update a user's information
export const updateUser = async (id: string, username: string, email: string, password: string): Promise<User | null> => {
  
    const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      username,
      email,
      password,
    },
  })

  return user

}

// Function to delete a user by their ID
export const deleteUser = async (id: string): Promise<User | null> => {
  
  const user = await prisma.user.delete({
    where: {
      id,
    },
  })
  
  return user
  
}
