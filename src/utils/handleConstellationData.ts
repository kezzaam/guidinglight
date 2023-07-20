import constellations from '../data/constellations.json';
import { prisma } from '../../prisma/prisma';

interface Coordinate {
  type: string;
  coordinates: number[];
}

interface Constellation {
  constellation_id: string;
  name: string;
  desig: string;
  rank: number;
  display: number[];
  geometry: Coordinate;
  maori_name?: string;
  description?: string;
  category?: string;
}

function processConstellationData(constellations: any[]): Constellation[] {
  return constellations.map((constellation) => ({
    constellation_id: constellation.id,
    name: constellation.properties.name,
    desig: constellation.properties.desig,
    rank: parseInt(constellation.properties.rank),
    display: constellation.properties.display,
    geometry: constellation.geometry,
    maori_name: constellation.properties.maori_name || '',
    description: constellation.properties.description || '',
    category: constellation.category,
  }));
}

async function writeConstellationData() {
  await prisma.$connect();
  try {
    // Process constellation data from the JSON data
    const processedConstellations = processConstellationData(constellations.features);
    console.log(processedConstellations[1]);

    // Write the processed constellations to the database
    await prisma.constellation.createMany({
      data: processedConstellations,
    });

    console.log('Constellation data successfully written to the database.');
  } catch (error) {
    console.error('Error writing constellation data to the database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run this function to add constellation data from the JSON file to the database
export default async function handleConstellationData() {
  await writeConstellationData();
}
