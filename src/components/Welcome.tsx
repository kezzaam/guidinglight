/* eslint-disable react/no-unescaped-entities */
"use client"

import Button from './Button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function Welcome() {
    const { data: session } = useSession()
    const userName = session?.user?.name || "friend"

    const router = useRouter()

    const handleGotIt = () => {
        router.push('/home')
    }

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
                    <Button onClick={handleGotIt}>Got it, thanks!</Button>
                </div>

            </div>
        </div>
    )
}
