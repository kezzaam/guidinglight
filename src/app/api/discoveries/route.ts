import { prisma } from '../../../../prisma/prisma'

// combine all data into one array
export async function GET(request: Request) {
  try {
    const starData = await prisma.star.findMany()
    const constellationData = await prisma.constellation.findMany()
    const asterismData = await prisma.asterism.findMany()
    const planetData = await prisma.planet.findMany()

    // Create a Map to store constellation_designation and name pairs
    const constellationMap = new Map()
    constellationData.forEach((constellation) => {
      constellationMap.set(constellation.desig, constellation.name)
    })

    // Update the constellation property of each star with the corresponding name from the Map
    starData.forEach((star) => {
      const starConstellationDesignation = star.constellation
      const starConstellationName = constellationMap.get(starConstellationDesignation)
      if (starConstellationName) {
        star.constellation = starConstellationName
      }
    })

    // map to avoid duplicates
    const uniqueDiscoveries = new Map()

    // Function to add items to uniqueDiscoveries
    const addItemsToMap = (items: any) => {
      items.forEach((item: any) => {
        if (!uniqueDiscoveries.has(item.id)) {
          uniqueDiscoveries.set(item.id, item)
        }
      })
    }

    // Add items from each data array to uniqueDiscoveries
    addItemsToMap(starData)
    addItemsToMap(constellationData)
    addItemsToMap(asterismData)
    addItemsToMap(planetData)

    const discoveries = Array.from(uniqueDiscoveries.values())

    return new Response(JSON.stringify(discoveries))
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }))
  }
}
