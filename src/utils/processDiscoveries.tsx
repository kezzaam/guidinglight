import starData from '../data/stars.6.json'
import constellationData from '../data/constellations.json'
import asterismData from '../data/asterisms.json'
import planetData from '../data/planets.json'

// Function to process the data from JSON files
export const processDiscoveries = () => {
  const starArray = starData.features.map((feature) => ({
    id: feature.id,
    name: feature.properties.name,
    desig: feature.properties.desig,
    con: feature.properties.con,
    mag: feature.properties.mag,
    bv: feature.properties.bv,
    geometry: feature.geometry,
    type: feature.geometry.type,
    coordinates: feature.geometry.coordinates,
    category: 'star',
    isNamed: Boolean(feature.properties.name),
  }))

  const constellationArray = constellationData.features.map((feature) => ({
    id: feature.id,
    name: feature.properties.name,
    desig: feature.properties.desig,
    rank: feature.properties.rank,
    display: feature.properties.display,
    geometry: feature.geometry,
    type: feature.geometry.type,
    coordinates: feature.geometry.coordinates,
    category: 'constellations',
  }))

  const asterismArray = asterismData.features.map((feature) => ({
    id: feature.id,
    name: feature.properties.n,
    location: feature.properties.loc,
    p: feature.properties.p,
    geometry: feature.geometry,
    type: feature.geometry.type,
    coordinates: feature.geometry.coordinates,
    category: 'asterisms',
  }))

  const planetArray = Object.values(planetData).map((p) => ({
    id: p.id,
    name: p.name,
    desig: p.desig,
    H: p.H,
    elements: p.elements,
    sym: p.sym,
    type: 'planet',
    coordinates: null, // Replace with the correct coordinates for planets if available
    category: 'planets',
    isNamed: true, // Modify accordingly based on the properties of planets
  }))

  const uniqueDiscoveries = new Map()

  // Add starArray to uniqueDiscoveries
  starArray.forEach((star) => {
    uniqueDiscoveries.set(star.id, star)
  })

  // Add constellationArray to uniqueDiscoveries
  constellationArray.forEach((constellation) => {
    if (!uniqueDiscoveries.has(constellation.id)) {
      uniqueDiscoveries.set(constellation.id, constellation)
    }
  })

  // Add asterismArray to uniqueDiscoveries
  asterismArray.forEach((asterism) => {
    if (!uniqueDiscoveries.has(asterism.id)) {
      uniqueDiscoveries.set(asterism.id, asterism)
    }
  })

  // Add planetArray to uniqueDiscoveries
  planetArray.forEach((planet) => {
    if (!uniqueDiscoveries.has(planet.id)) {
      uniqueDiscoveries.set(planet.id, planet)
    }
  })

  const discoveries = Array.from(uniqueDiscoveries.values())

  return discoveries
}
