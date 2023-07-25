import { prisma } from '../../../../../../prisma/prisma'

// get star by id
export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const id = params.id 

    const star = await prisma.star.findUnique({
      // look for matching id
      where: {
        id: id,
      },
    })

    return new Response(JSON.stringify({ star }))
}

// update star - use id string
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
  ) {
  try {
    const id = params.id 
    const data = await request.json();
    // find the star by id
    const star = await prisma.star.update({ 
      where: { 
      id: id 
    }, 
    // data to update
    data 
  })
    return new Response(JSON.stringify({ star }));
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }));
  }
}

// delete star - use id string
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
  ) {
  try {
    const id = params.id
    // find the star by id
    const star = await prisma.star.delete({
      where: {
        id: id
    }
  })
  return new Response(JSON.stringify({ star }, null, 2));
}   catch (error: any) {
  return new Response(JSON.stringify({ error: error.message }));
  }
}