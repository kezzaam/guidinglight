// fix for hot reloading / prevent heaps of clients being created

import { PrismaClient } from "@prisma/client"

// Create a global variable to hold the PrismaClient instance
const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined
}

// Initialize the PrismaClient instance and assign it to the global variable
export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  log: ["query", "info", "warn"],
})

// Set the PrismaClient instance to the global variable when not in production
if (process.env.NODE_ENV !== "production") {
  //instantiate a singleton
  globalForPrisma.prisma = prisma
}
