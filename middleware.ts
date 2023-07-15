import { NextResponse } from "next/server"

export function middleware(request: any) {
    const origin = request.headers.get("origin")
    console.log(origin)

    const response = NextResponse.next()
    response.headers.set("Access-Control-Allow-Origin", origin)
    response.headers.set("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, DELETE, OPTIONS")
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization")
    response.headers.set("Access-Control-Max-Age", "86400")

    console.log('middleware')
    console.log(request.method)
    console.log(request.url)

    return response
}

export const config={
    matcher: '/api/:path*'
}

// without defined matcher, signin middleware will be applied to all pages
export { default } from "next-auth/middleware"