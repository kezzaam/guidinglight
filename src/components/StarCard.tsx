
export interface Star {
    id: string
    star_id: number
    name: string
    maori_name: string | null
    designation: string
    asterism: string
    constellation: string
    maori_constellation: string
    magnitude: number
    bv_index: number
    geometry: JSON
    geometry_type: string
    geometry_coordinates: number[]
    description: string
    isNamed: boolean
    category: string
}

type StarCardProps = {
    star: Star
}

export default function StarCard({ star }: StarCardProps) {
    const getRandomDelay = () => Math.random() * 10; // Generate a random delay value between 0 and 5

    return (
        <>
            <a href="#" className="bg-cetaceanblue border border-outerspace rounded-lg shadow md:flex-row md:max-w-xl hover:bg-outerspace ">
                <div className="flex items-center">
                <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="340"
                    height="166"
                    viewBox="0 0 512 512"
                    enableBackground="new 0 0 512 512"
                    xmlSpace="preserve"
                >
                    <g>
                        <path
                            className="star"
                            fill="#F8F9FA"
                            d="M147, 147 c-25.5, 0-25.787, 26.359-25.787, 26.359 C121.213, 150.438, 96, 147, 96, 147 c25.787, 0, 25.213-26.359, 25.213-26.359 C121.213, 147, 147, 147, 147, 147z"
                            transform="translate(-90, -220) scale(3, 3)"
                            style={{ animationDelay: `${getRandomDelay()}s` }}
                        />
                    </g>
                </svg>                    
                
                </div>
                    <div className="flex flex-col py-4 leading-normal mb-3">   
                    <h2 className="mb-2 text-2xl">{star.name? star.name : star.designation}</h2>
                    <div className="text-intensewhite">
                    <p>{star.maori_name ? `Maori Name: ${star.maori_name}` : ''}</p>
                        <p>{star.constellation}</p>
                    </div>
                    </div>
            </a>
        </>
    )
}



