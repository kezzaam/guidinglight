import Cards from './Cards';
import starData from '../data/stars.6.json';
import constellationData from '../data/constellations.json'
import asterismData from '../data/asterisms.json'
import planetData from '../data/planets.json'

export default function Discoveries() {
  // https://www.youtube.com/watch?v=R1FG54FY-18
  // pagination and infinite scroll
  // star data
  const starArray = starData.features.map((feature) => {
    const star = {
    id: feature.id,
    name: feature.properties.name,
    desig: feature.properties.desig,
    con: feature.properties.con,
    mag: feature.properties.mag,
    bv: feature.properties.bv,
    geometry: feature.geometry,
    type: feature.geometry.type,
    coordinates: feature.geometry.coordinates
  }
  return star
  })

  // constellation data
  const constellationArray = constellationData.features.map((feature) => {
    const constellation = {
    id: feature.id,
    name: feature.properties.name,
    desig: feature.properties.desig,
    rank: feature.properties.rank,
    display: feature.properties.display,
    geometry: feature.geometry,
    type: feature.geometry.type,
    coordinates: feature.geometry.coordinates
  }
  return constellation
  })

  // asterism data
  const asterismArray = asterismData.features.map((feature) => {
    const asterism = {
    id: feature.id,
    name: feature.properties.n,
    location: feature.properties.loc,
    p: feature.properties.p,
    geometry: feature.geometry,
    type: feature.geometry.type,
    coordinates: feature.geometry.coordinates
  }
  return asterism
  })

  // planet data
  const planetArray = Object.values(planetData).map((p) => {
    const planet = {
    id: p.id,
    name: p.name,
    desig: p.desig,
    H: p.H,
    elements: p.elements,
    sym: p.sym
  }
  return planet
  })

  // Combine all arrays into a single array
  const discoveriesArray = [...starArray, ...planetArray, ...constellationArray, ...asterismArray];
  

  return (
    <section>
      <Cards data={discoveriesArray} />
    </section>
  )
}
