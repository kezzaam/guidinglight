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
            <a href="#" className="bg-cetaceanblue border border-outerspace rounded-lg shadow md:flex-row md:max-w-xl hover:bg-outerspace ">
                <div className="flex flex-col items-center pt-8">
                <Image src="/images/moon-01.svg" alt="Moon" width={200} height={200} />
                </div>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h2 className="mb-2 text-2xl font-bold">{planet.name}</h2>
                    <div className="mb-3 font-normal text-intensewhite">
                        <p>{planet.sym}</p>
                        <h4 className="text-3xl">{planet.maori_name}</h4>
                        <p>{planet.description}</p>
                    </div>
                </div>
            </a>
        </>
    )
}



