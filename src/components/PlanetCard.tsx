import Image from 'next/image'

export interface Planet {
    id: string,
    name: string,
    img: string,
    trajectory: boolean,
    H:number,
    sym: string,
    maori_name: string,
    description: string,
    category: string,
}

type PlanetCardProps = {
    planet: Planet
}

export default function PlanetCard({ planet }: PlanetCardProps) {
    // const getRandomDelay = () => Math.random() * 10; // Generate a random delay value between 0 and 5

    return (
        <>
            <a href="#" className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <Image src="/images/moon-01.svg" alt="Moon" width={100} height={100} />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{planet.name}</h5>
                    <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        <p>Symbol: {planet.sym}</p>
                        <p>Maori Name: {planet.maori_name}</p>
                        <p>Description: {planet.description}</p>
                    </div>
                </div>
            </a>
        </>
    )
}



