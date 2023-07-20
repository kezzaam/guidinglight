import planets from '../data/planets.json'
import { prisma } from '../../prisma/prisma'

interface Planet {
  name: string
  img: string
  trajectory: boolean
  H: number
  sym: string
  maori_name?: string
  description?: string
  category?: string
}

function processPlanetData(planets: any[]): Planet[] {
  return Object.values(planets).map((planet) => ({
    name: planet.name,
    img: planet.map || '',
    trajectory: planet.trajectory || false,
    H: parseFloat(planet.H),  
    sym: planet.sym || '',
    maori_name: planet.maori_name || '',
    description: planet.description || '',
    category: planet.category,
  }))
}

async function writePlanetData() {
    await prisma.$connect();
    try {
      // Process planet data from the JSON data
      const processedPlanets = processPlanetData(Object.values(planets));
      console.log(processedPlanets);
  
      // Write the processed planets to the database
      await prisma.planet.createMany({
        data: processedPlanets,
      });
  
      console.log('Planet data successfully written to the database.');
    } catch (error) {
      console.error('Error writing planet data to the database:', error);
    } finally {
      await prisma.$disconnect();
    }
  }
  

// Run this function to add planet data from the JSON file to the database
export default async function handlePlanetData() {
  await writePlanetData()
}
