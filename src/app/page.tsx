import Image from 'next/image'
import { MoonPhase } from 'astronomy-engine'

export default function Home() {
// Get the current date and time
const currentDate = new Date();

// Calculate the Moon's phase
const moonPhase = MoonPhase(currentDate);

// Log the result
console.log('Moon phase:', moonPhase);

  return (
    <div>
      <h1>Guiding Light</h1>
      <p>Aotearoa Night Sky Discovery App</p>
      <p>{moonPhase}</p>
    </div>
  )
}
