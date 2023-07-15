import prisma from "../../../../prisma/prisma";

export async function GET(request: Request) {
  try {
    const stars = await prisma.star.findMany();
    console.log(stars[0])
    return new Response('Success', { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }));
  }
}

export async function POST(request: Request) {
    const body = await request.json()
    console.log(body)

    return new Response('OK', { status: 200 })
}