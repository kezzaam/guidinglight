"use client"

import { SessionProvider } from "next-auth/react"

// client-side session management

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
 }