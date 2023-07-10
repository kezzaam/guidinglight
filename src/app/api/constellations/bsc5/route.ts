export async function GET(request: Request) {
    return new Response(JSON.stringify({
        "name": "Binance Smart Chain",
   }))
}

export async function POST(request: Request) {}