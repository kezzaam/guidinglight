import { prisma } from '../../prisma/prisma'

export const processDiscoveries = async () => {
  const starData = await prisma.star.findMany()
  const constellationData = await prisma.constellation.findMany()
  const asterismData = await prisma.asterism.findMany()
  const planetData = await prisma.planet.findMany()

  const uniqueDiscoveries = new Map()

  // Add starArray to uniqueDiscoveries
  starData.forEach((star) => {
    uniqueDiscoveries.set(star.id, star)
  })

  // Add constellationArray to uniqueDiscoveries
  constellationData.forEach((constellation) => {
    if (!uniqueDiscoveries.has(constellation.id)) {
      uniqueDiscoveries.set(constellation.id, constellation)
    }
  })

  // Add asterismArray to uniqueDiscoveries
  asterismData.forEach((asterism) => {
    if (!uniqueDiscoveries.has(asterism.id)) {
      uniqueDiscoveries.set(asterism.id, asterism)
    }
  })

  // Add planetArray to uniqueDiscoveries
  planetData.forEach((planet) => {
    if (!uniqueDiscoveries.has(planet.id)) {
      uniqueDiscoveries.set(planet.id, planet)
    }
  })

  const discoveries = Array.from(uniqueDiscoveries.values())

  return discoveries
}
