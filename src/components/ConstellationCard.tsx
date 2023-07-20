
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
            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{constellation.name}</h5>
                    <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        <p>Designation: {constellation.desig}</p>
                        <p>Rank: {constellation.rank}</p>
                        <p>Maori Name: {constellation.maori_name}</p>
                        <p>Description: {constellation.description}</p>
                    </div>
                </div>
            </a>
        </>
    )
}



