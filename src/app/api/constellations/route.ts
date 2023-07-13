import constellations from './constellations.json';

export async function GET(request: Request) {
  try {
    const responseData = constellations.features.map((feature) => {
      const {
        id,
        properties: { name, desig, gen, rank, en, display },
      } = feature;

      return {
        id,
        name,
        desig,
        gen,
        rank,
        en,
        display,
      };
    });

    return new Response(JSON.stringify(responseData));
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }));
  }
}
