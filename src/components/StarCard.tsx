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

export default function StarCard({ star }: StarCardProps){
    return (
        <>
<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/images/nightsky.jpg" alt="" width={200} height={200} />
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



