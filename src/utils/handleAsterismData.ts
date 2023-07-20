import asterisms from '../data/asterisms.json';
import { prisma } from '../../prisma/prisma';

interface Asterism {
  asterism_id: string;
  name: string;
  loc: number[];
  p: number;
  geometry: any;
  maori_name?: string;
  description?: string;
  category?: string;
}

function processAsterismData(asterisms: any[]): Asterism[] {
  return asterisms.map((asterism) => ({
    asterism_id: asterism.id,
    name: asterism.properties.n,
    loc: asterism.properties.loc,
    p: asterism.properties.p,
    geometry: asterism.geometry,
    maori_name: asterism.properties.maori_name || '',
    description: asterism.properties.description || '',
    category: asterism.properties.category || 'asterism',
  }));
}

async function writeAsterismData() {
  await prisma.$connect();
  try {
    // Process asterism data from the JSON data
    const processedAsterisms = processAsterismData(asterisms.features);
    console.log(processedAsterisms[1]);

    // Write the processed asterisms to the database
    await prisma.asterism.createMany({
      data: processedAsterisms,
    });

    console.log('Asterism data successfully written to the database.');
  } catch (error) {
    console.error('Error writing asterism data to the database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run this function to add asterism data from the JSON file to the database
export default async function handleAsterismData() {
  await writeAsterismData();
}
