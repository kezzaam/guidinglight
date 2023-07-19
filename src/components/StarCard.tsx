import { ReactNode } from 'react'
import Image from 'next/image'

export interface Star {
    name: ReactNode
    desig: ReactNode
    con: ReactNode
    mag: ReactNode
    bv: ReactNode
    id: number
    properties: {
        name: string
        desig: string
        con: string
        mag: number
        bv: number
    }
    geometry: {
        type: string
        coordinates: number[]
    }
}

type StarCardProps = {
    star: Star
}

export default function StarCard({ star }: StarCardProps) {
    const getRandomDelay = () => Math.random() * 10; // Generate a random delay value between 0 and 5

    return (
        <>
            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="250px"
                    height="166px"
                    viewBox="0 0 512 512"
                    enableBackground="new 0 0 512 512"
                    xmlSpace="preserve"
                >
                    <g>
                        <path
                            className="hover:star"
                            fill="#F8F9FA"
                            d="M147, 147 c-25.5, 0-25.787, 26.359-25.787, 26.359 C121.213, 150.438, 96, 147, 96, 147 c25.787, 0, 25.213-26.359, 25.213-26.359 C121.213, 147, 147, 147, 147, 147z"
                            transform="translate(-90, -220) scale(3, 3)"
                            style={{ animationDelay: `${getRandomDelay()}s` }}
                        />
                    </g>
                </svg>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{star.name}</h5>
                    <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        <p>Designation: {star.desig}</p>
                        <p>Constellation: {star.con}</p>
                        <p>Magnitude: {star.mag}</p>
                        <p>BV Index: {star.bv}</p></div>
                </div>
            </a>
        </>
    )
}



