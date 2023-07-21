import { prisma } from '../../../../../../prisma/prisma'

// find id string for asterism by running GET request at /api/discoveries/asterisms
export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const id = params.id

    const asterism = await prisma.asterism.findUnique({
      // set to id but can use different fields to find asterism
      where: {
        id: id,
      },
    })

    return new Response(JSON.stringify({ asterism }))
}

// update asterism - use id string
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
  ) {
  try {
    const id = params.id 
    const data = await request.json();
    // find the asterism by id
    const asterism = await prisma.asterism.update({ 
      where: { 
      id: id 
    }, 
    // data to update
    data 
  })
    return new Response(JSON.stringify({ asterism }));
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }));
  }
}

// delete asterism - use id string
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
  ) {
  try {
    const id = params.id
    // find the asterism by id
    const asterism = await prisma.asterism.delete({
      where: {
        id: id
    }
  })
  return new Response(JSON.stringify({ asterism }, null, 2));
}   catch (error: any) {
  return new Response(JSON.stringify({ error: error.message }));
  }
}