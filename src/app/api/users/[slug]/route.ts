import { prisma } from '../../../../../prisma/prisma'

// get user by param in slug - in this case it is set to email
export async function GET(
    request: Request,
    // slug is [slug] from the file name 
    // if it's a different name define it here
    { params }: { params: { slug: string } }
  ) {
    const slug = params.slug 

    const user = await prisma.user.findUnique({
      // set to email but can use different fields to find user by ie id, name - just change email field
      where: {
        email: slug,
      },
    })

    return new Response(JSON.stringify({ user }))
}

// update user
export async function PUT(
  request: Request,
  { params }: { params: { slug: string } }
  ) {
  try {
    const slug = params.slug 
    const data = await request.json();
    // find the user by email
    const user = await prisma.user.update({ 
      where: { 
      email: slug 
    }, 
    // data to update
    data 
  })
    return new Response(JSON.stringify({ user }));
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }));
  }
}

// delete user
export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } }
  ) {
  try {
    const slug = params.slug
    // find the user by email
    const user = await prisma.user.delete({
      where: {
        email: slug
    }
  })
  return new Response(JSON.stringify({ user }));
}   catch (error: any) {
  return new Response(JSON.stringify({ error: error.message }));
  }
}