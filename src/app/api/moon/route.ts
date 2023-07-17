import maramataka from '../../../data/maramataka'

export async function GET(request: Request) {
  try {
    const responseData = maramataka.map((marama) => {
      const { id, name, goodFor, energy, image, moonphase_id } = marama

      return {
        id,
        name,
        goodFor,
        energy,
        image,
        moonphase_id,
      }
    })

    return new Response(JSON.stringify(responseData))
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }))
  }
}
