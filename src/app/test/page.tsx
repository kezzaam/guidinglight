// test page for fetching data from 3rd party APIs

import Image from "next/image"

const getRickAndMortyData = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character')
    return await res.json()
}

const getDogData = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/image/random', {
        // Set this so a new image is fetched on page reload
        cache: "no-store",
    },
)
    return res.json()
}

export default async function RickAndMorty() {
    const rickAndMorty = await getRickAndMortyData()
    const dog = await getDogData()
    return (
        <div>
            <Image src={dog.message} alt="dog" width={500} height={500} />
            {rickAndMorty.results.map((character) => {
                return (
                    <div key={character.id}>
                        <h1>{character.name}</h1>
                        <img src={character.image} alt={character.name} />
                    </div>
            )}
    )
}
</div>
)
}

// Use a client component when:
// You use react hooks with event listeners such as onClick()
// You need to useState() or useEffect() etc
// There are custom hooks that depend on state or effects 

// Use a server component when:
// Sensitive information needs to be stored (tokens, api keys etc)
// You need to access backend resources directly
// There are large dependencies
// fetching data