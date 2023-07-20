import ConstellationMap from "./ConstellationMap"

export interface Constellation {
    id: string,
    constellation_id: string,
    name: string,
    desig: string,
    rank: number,
    display:number[],
    geometry: JSON,
    maori_name: string,
    description: string,
    category: string,
}

type ConstellationCardProps = {
    constellation: Constellation
}

export default function ConstellationCard({ constellation }: ConstellationCardProps) {
    // const getRandomDelay = () => Math.random() * 10; // Generate a random delay value between 0 and 5

    return (
        <>
        <a href="#" className="flex flex-col items-center bg-cetaceanblue border border-outerspace rounded-lg shadow md:flex-row md:max-w-xl hover:bg-outerspace ">
        <div className="p-4">
        <h2 className="text-2xl mt-4">{constellation.name}</h2>
        <ConstellationMap constellationId={constellation.constellation_id} />
        </div>
        </a>
        </>
    )
}



