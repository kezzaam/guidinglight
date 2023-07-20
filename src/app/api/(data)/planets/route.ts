import planets from '../../../../data/planets.json';

interface PlanetElement {
  a: number;
  e: number;
  i: number;
  L?: number;
  W?: number;
  N?: number;
  da?: number;
  de?: number;
  di?: number;
  dL?: number;
  dW?: number;
  dN?: number;
  ep?: string;
}

interface Planet {
  name: string;
  map?: string;
  trajectory?: boolean;
  H: number | string;
  elements: PlanetElement[];
  id: string;
  desig: string;
  sym?: string;
  [key: string]: any; // Allow any additional properties
}

export async function GET(request: Request) {
  try {
    const responseData = Object.values(planets).map((planet: Planet) => {
      const {
        name,
        map,
        trajectory,
        H,
        elements,
        id,
        desig,
        sym,
      } = planet as Planet;

      return {
        id,
        name,
        map,
        trajectory,
        H,
        elements,
        desig,
        sym,
      };
    });

    return new Response(JSON.stringify(responseData));
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }));
  }
}
