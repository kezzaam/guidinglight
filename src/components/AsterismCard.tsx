
export interface Asterism {
    id: string,
    asterism_id: string,
    name: string,
    p: number,
    loc: number[],
    geometry: JSON,
    maori_name: string,
    description: string,
    category: string,
}

type AsterismCardProps = {
    asterism: Asterism
}

export default function AsterismCard({ asterism }: AsterismCardProps) {
    // const getRandomDelay = () => Math.random() * 10; // Generate a random delay value between 0 and 5

    return (
        <>
            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{asterism.name}</h5>
                    <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        <p>P: {asterism.p}</p>
                        <p>Location: {asterism.loc}</p>
                        <p>Maori Name: {asterism.maori_name}</p>
                        <p>Description: {asterism.description}</p>
                    </div>
                </div>
            </a>
        </>
    )
}



