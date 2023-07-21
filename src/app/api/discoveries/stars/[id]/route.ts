import { prisma } from '../../../../../../prisma/prisma'

// get star by star_id, then can find longer id string to use for PUT and DELETE
export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const id = Number(params.id) // convert to number

    const star = await prisma.star.findUnique({
      // set to star_id but can use different fields to find star
      where: {
        star_id: id,
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