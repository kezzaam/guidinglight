import { prisma } from '../../../../../../prisma/prisma'

// find id string for planet by running GET request at /api/discoveries/planets
export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const id = params.id

    const planet = await prisma.planet.findUnique({
      // set to id but can use different fields to find planet
      where: {
        id: id,
      },
    })

    return new Response(JSON.stringify({ planet }))
}

// update planet - use id string
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
  ) {
  try {
    const id = params.id 
    const data = await request.json();
    // find the planet by id
    const planet = await prisma.planet.update({ 
      where: { 
      id: id 
    }, 
    // data to update
    data 
  })
    return new Response(JSON.stringify({ planet }));
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }));
  }
}

// delete planet - use id string
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
  ) {
  try {
    const id = params.id
    // find the planet by id
    const planet = await prisma.planet.delete({
      where: {
        id: id
    }
  })
  return new Response(JSON.stringify({ planet }, null, 2));
}   catch (error: any) {
  return new Response(JSON.stringify({ error: error.message }));
  }
}