"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import Image from "next/image"
import Matariki from "@/components/Matariki"

export default function Splash() {
  const { data: session } = useSession()
  const [showMatariki, setShowMatariki] = useState(false)

  useEffect(() => {
    const timeout = 
      setTimeout(() => {
        setShowMatariki(true)
      }, 5000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
        <div
          className={`logo absolute top-0 left-0 z-10 w-full h-full flex flex-col items-center justify-center fadeinout`}
        >
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={250}
            height={250}
            className=""
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