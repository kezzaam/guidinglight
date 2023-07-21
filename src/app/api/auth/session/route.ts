import { getServerSession } from 'next-auth/next'
import { NextResponse } from 'next/server'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

// get server side session 
export async function GET() {
    const session = await getServerSession(authOptions)
    console.log('Get session', session)
    return NextResponse.json({ authenticated: !!session })
}
