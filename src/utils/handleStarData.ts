import stars from '../data/stars.6.json';
import { prisma } from '../../prisma/prisma';

export interface Star {
  star_id?: number;
  name: string;
  maori_name?: string;
  designation?: string;
  asterism?: string;
  constellation?: string;
  maori_constellation?: string;
  magnitude: number;
  bv_index: number;
  geometry: {
    type: string;
    coordinates: number[];
  };
  geometry_type: string;
  geometry_coordinates: number[];
  description?: string;
  isNamed?: boolean;
  category?: string;
}

function processStarData(stars: any[]) {
  const processedStars = stars.map((star) => {
    const isNamed = star.properties.name !== '';

    return {
      star_id: star.id,
      name: star.properties.name,
      maori_name: star.properties.maori_name,
      designation: star.properties.desig,
      asterism: star.properties.asterism,
      constellation: star.properties.con,
      maori_constellation: star.properties.maori_constellation,
      magnitude: parseFloat(star.properties.mag),
      bv_index: parseFloat(star.properties.bv),
      geometry: star.geometry,
      geometry_type: star.geometry.type,
      geometry_coordinates: star.geometry.coordinates,
      description: star.properties.description,
      isNamed: isNamed,
      category: star.properties.category,
    };
  });

  return processedStars;
}

async function writeStarData() {
  await prisma.$connect();
  try {
    // Process star data from the json data
    const processedStars = processStarData(stars.features);
    console.log(processedStars[1]);

    // Write the processed stars to the database
    await prisma.star.createMany({
      data: processedStars.map((star) => ({
        star_id: star.star_id,
        name: star.name,
        maori_name: star.maori_name,
        designation: star.designation,
        asterism: star.asterism,
        constellation: star.constellation,
        maori_constellation: star.maori_constellation,
        magnitude: star.magnitude,
        bv_index: isNaN(star.bv_index) ? 0 : star.bv_index,
        geometry: star.geometry,
        geometry_type: star.geometry_type,
        geometry_coordinates: star.geometry_coordinates,
        description: star.description,
        isNamed: star.isNamed,
        category: star.category,
      })),
    });

    console.log('Star data successfully written to the database.');
  } catch (error) {
    console.error('Error writing star data to the database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run this function to add star data from the JSON file to the database
// It should return 4560 stars
// Note: The Bright Star Catalog has 9110 stars.
// This data covers stars up to magnitude 6, which should cover most of the naked eye and named stars.
export default async function handleStarData() {
  await writeStarData();
}
