import stars from './BSC.json';

export async function GET(request: Request) {
  try {
    const responseData = stars.map((star) => {
      const {
        ["harvard_ref_#"]: harvardRef,
        RA,
        DEC,
        "RA PM": RAPM,
        Epoch,
        "DEC PM": DECPM,
        MAG,
        "Title HD": titleHD,
      } = star;

      return {
        harvardRef,
        RA,
        DEC,
        RAPM,
        Epoch,
        DECPM,
        MAG,
        titleHD,
      };
    });

    return new Response(JSON.stringify(responseData));
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }));
  }
}
