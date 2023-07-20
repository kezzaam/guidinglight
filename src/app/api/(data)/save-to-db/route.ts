import { prisma } from "../../../../../prisma/prisma"
import handleStarData from "@/utils/handleStarData"
import handlePlanetData from "@/utils/handlePlanetData"
import handleConstellationData from "@/utils/handleConstellationData"
import handleAsterismData from "@/utils/handleAsterismData"

export async function GET(request: Request) {
  try {
    // const stars = await prisma.star.findMany()
    // console.log(stars[0])
    // return new Response('Success', { status: 200 })
    // await handleStarData()
    // await handleConstellationData()
    // await handlePlanetData()
    // await handleAsterismData()
    return new Response('Success', { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }))
  }
}