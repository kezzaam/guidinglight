import { prisma } from '../../../../../../prisma/prisma'

// find id string for constellation by running GET request at /api/discoveries/constellations
export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const id = params.id

    const constellation = await prisma.constellation.findUnique({
      // set to id but can use different fields to find constellation
      where: {
        id: id,
      },
    })

    return new Response(JSON.stringify({ constellation }))
}

// update constellation - use id string
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
  ) {
  try {
    const id = params.id 
    const data = await request.json();
    // find the constellation by id
    const constellation = await prisma.constellation.update({ 
      where: { 
      id: id 
    }, 
    // data to update
    data 
  })
    return new Response(JSON.stringify({ constellation }));
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }));
  }
}

// delete constellation - use id string
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
  ) {
  try {
    const id = params.id
    // find the constellation by id
    const constellation = await prisma.constellation.delete({
      where: {
        id: id
    }
  })
  return new Response(JSON.stringify({ constellation }, null, 2));
}   catch (error: any) {
  return new Response(JSON.stringify({ error: error.message }));
  }
}