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
    const { name } = userData

    // Carousel state and configuration
    const [currentIndex, setCurrentIndex] = useState(0)
    const carouselInterval = 3000 // Time in milliseconds to show each item
    const carouselData = [
        {
            title: "Maramataka - Māori lunar calendar",
            imgSrc: "/icons/mooncalendar.svg",
        },
        {
            title: "Star, constellation & planet reference",
            imgSrc: "/icons/bookmark.svg",
        },
        {
            title: "Explore the night sky",
            imgSrc: "/icons/maoristar.svg",
        },
        {
            title: "Customisation options",
            imgSrc: "/icons/stargears.svg",
        },
    ]

    useEffect(() => {
        // Autoplay carousel logic
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length)
        }, carouselInterval)

        // Clear the interval when component unmounts
        return () => clearInterval(interval)
    }, [carouselData.length])

    return (
        <div className="w-screen">
            <div>
                <h2 className="text-3xl  lg:text-4xl text-center pt-32">Welcome, {name}!</h2>

                <div className="my-4 mx-4 p-8 flex flex-col text-left md:mx-auto lg:text-center lg:mx-auto md:max-w-lg lg:max-w-2xl lg:items-center">
                    <div>
                        <div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl text-intensewhite">Discover more about</h3>
                            <h5 className="text-2xl md:text-3xl lg:text-4xl">Aotearoa's night sky</h5>
                        </div>

                        <h4 className="leading-8 my-4 text-lg lg:text-2xl">
                            Build your knowledge of Māori astronomy, make discoveries and explore the guiding lights visible in your night sky.
                        </h4>
                    </div>

                    <div className="space-y-8 mb-10">
                        <div className="my-4 flex flex-row items-center space-x-6 transition duration-100 ease-in">
                            <Image
                                src={carouselData[currentIndex].imgSrc}
                                alt={carouselData[currentIndex].title}
                                width={60}
                                height={60}
                                className="bg-bluegrey rounded-lg p-2"
                            />
                            <h6>{carouselData[currentIndex].title}</h6>
                        </div>
                    </div>
                    <Link href="/home" >
                    <Button>Got it, thanks!</Button>
                </Link>
                </div>

            </div>
        </div>
    )
}
