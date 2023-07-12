import Image from 'next/image'
import { MoonPhase } from 'astronomy-engine'
import prisma from "../../prisma/prisma"

export default async function Home() {
// Get the current date and time
const currentDate = new Date();

// Calculate the Moon's phase
const moonPhase = MoonPhase(currentDate);

// Log the result
console.log('Moon phase:', moonPhase);
let users = await prisma.user.findMany();

  return (
    <div>
      <h1>Guiding Light</h1>
      <p>Aotearoa Night Sky Discovery App</p>
      <p>{moonPhase}</p>

        {users.map((user) => (
          <div
            key={user.id}
          >
            <h3>{user.name}</h3>
          </div>
        ))}
      </div>
  )
}





