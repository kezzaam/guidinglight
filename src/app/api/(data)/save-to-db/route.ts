import { prisma } from "../../../../../prisma/prisma"
import handleStarData from "@/utils/handleStarData"
import handlePlanetData from "@/utils/handlePlanetData"
import handleConstellationData from "@/utils/handleConstellationData"
import handleAsterismData from "@/utils/handleAsterismData"

// use this to add data from json files to the database
export async function GET(request: Request) {
  try {
    // await handleStarData()
    // await handleConstellationData()
    // await handlePlanetData()
    // await handleAsterismData()
    return new Response('Success', { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }))
  }
}