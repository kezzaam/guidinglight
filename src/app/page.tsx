"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import Image from "next/image"
import Matariki from "@/components/Matariki"
import { useRouter } from "next/navigation"

export default function Splash() {
  const { data: session, status } = useSession()
  const [showMatariki, setShowMatariki] = useState(false)
  
  const router = useRouter()

  // loading animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMatariki(true);
    }, 5000)

    return () => clearTimeout(timeout)
  }, [])

  // redirects to home page if authenticated, signin page if unauthenticated
  useEffect(() => {
    console.log(session)
    console.log(status)
    const redirectTimeout = setTimeout(() => {
      if ({authenticated: true}) {
        router.push("/home")
       }
    
      if ({authenticated: false}) { 
        router.push("/signin")
      }
    }, 10000)

    return () => clearTimeout(redirectTimeout)
  }, [router, session, status])

  
  return (
    <>
      <div
        className={`logo absolute top-0 left-0 z-10 w-full h-full flex flex-col items-center justify-center fadeinout`}
      >
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={250}
          height={166}
          priority={true}
        />
      </div>
      {showMatariki && (
        <div className="matariki-stars absolute top-0 left-0 z-10 w-full h-full flex flex-col items-center justify-center">
          <Matariki />
        </div>
      )}
      <div>{JSON.stringify(session)}</div>
    </>
  )
}
