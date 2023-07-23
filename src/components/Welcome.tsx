/* eslint-disable react/no-unescaped-entities */
"use client"

import { useSession } from 'next-auth/react'
import Button from './Button'
import Image from 'next/image'
import Link from 'next/link'
import { useUserContext } from '@/context/UserContext'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Welcome() {
    const { userData } = useUserContext()
    const userEmail = userData.email
    console.log(userEmail)

    const [userName, setUserName] = useState('')

    useEffect(() => {
      const getName = async () => {
        try {
          const response = await axios.get(`/api/users/${encodeURIComponent(userEmail)}`)
          const userNameFromApi = response.data.user.name
          setUserName(userNameFromApi)
        } catch (error) {
          console.error('Error fetching user data:', error)
        }
      }
  
      getName()
    }, [userEmail])

    return (

        <div className="w-screen">
            <div>
                {/* Replace with user name */}
                <h2 className="mt-4 text-3xl text-center">Welcome, {userName}!</h2>

                <div className="my-4 mx-4 p-8 flex flex-col text-left">
                    <h3 className="text-2xl text-intensewhite">Discover more about</h3>
                    {/* Replace with user goal */}
                    <h5 className="text-2xl">Aotearoa's night sky</h5>
                    <h4 className="leading-7 my-4 text-lg">
                        Build your knowledge of Māori astronomy, make discoveries and explore the guiding lights visible in your night sky.
                    </h4>
                    <div className="my-4 flex flex-row items-center space-x-6">
                        <Image
                            src="/icons/mooncalendar.svg"
                            alt="Settings"
                            width={60}
                            height={60}
                            className="bg-bluegrey rounded-lg p-2"
                        />
                        <h6>Maramataka - Māori  lunar calendar</h6>
                    </div>
                    <div className="my-4 flex flex-row items-center space-x-6">
                        <Image
                            src="/icons/bookmark.svg"
                            alt="Settings"
                            width={60}
                            height={60}
                            className="bg-bluegrey rounded-lg p-2"
                        />
                        <h6>Star, constellation & planet reference</h6>
                    </div>
                    <div className="my-4 flex flex-row items-center space-x-6">
                        <Image
                            src="/icons/maoristar.svg"
                            alt="Settings"
                            width={60}
                            height={60}
                            className="bg-bluegrey rounded-lg p-2"
                        />
                        <h6>Explore the night sky</h6>
                    </div>
                    <div className="mt-4 mb-10 flex flex-row items-center space-x-6">
                        <Image
                            src="/icons/stargears.svg"
                            alt="Settings"
                            width={60}
                            height={60}
                            className="bg-bluegrey rounded-lg p-2"
                        />
                        <h6>Customisation options</h6>
                    </div>
                    <Link href="/home">
                    <Button>Got it, thanks!</Button>
                    </Link>
                </div>

            </div>
        </div>
    )
}
