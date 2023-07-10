import { NextResponse } from 'next/server'
 
export async function GET() {
    const applicationId = process.env.APPLICATION_ID
    const applicationSecret = process.env.APPLICATION_SECRET
  
    const authString = btoa(`${applicationId}:${applicationSecret}`)
  
    const URL = 'https://api.astronomyapi.com/api/v2/studio/moon-phase'
  
    const res = await fetch(URL, {
      headers: {
        'Content-Type': 'application/json',
        'API-Key': process.env.DATA_API_KEY,
        'Authorization': `Basic ${authString}`,
      },
    })
  
    const data = await res.json()
  
    return NextResponse.json({ data })
  }
  