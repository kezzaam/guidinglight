export async function GET(request: Request) {
    return new Response(JSON.stringify({
        // something in here to return
        'This is a test route:': 'constellations/test/route.ts'
   }))
}

export async function POST(request: Request) {}