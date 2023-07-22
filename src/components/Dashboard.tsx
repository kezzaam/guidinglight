"use client"

import { signOut, useSession } from "next-auth/react"

export default function Dashboard() {
    // use session hook - client side session ret
const { data: session, status } = useSession()
console.log(session)
    
return (
      <div>{JSON.stringify(session)}
      <button onClick={() => signOut()}>Sign Out</button>
      </div>
  )
}
