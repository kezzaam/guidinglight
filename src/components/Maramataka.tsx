import Image from 'next/image'
import { MoonPhase } from 'astronomy-engine'
import maramataka from '../data/maramataka'

export default function Maramataka({ selectedDate, onDateSelect }: { selectedDate: Date; onDateSelect: (date: Date) => void }) {
  // Calculate the Moon's phase for the selected date
  const moonPhase = MoonPhase(selectedDate);
  // console.log('Moon phase:', moonPhase);

  // Determine the full range of moon phase angles
  const fullRange = 360; // Assuming the moon phase angles range from 0 to 360 degrees

  // Calculate the size of each segment
  const segmentSize = fullRange / 29;

// Calculate the moon phase value based on the angle and subtract the offset
let moonPhaseValue = Math.floor((moonPhase + segmentSize / 2) / segmentSize) - 14;
// console.log('Moon phase value (before adjustment):', moonPhaseValue);
// console.log('Moon phase:', moonPhase);

// Adjust the moon phase value to stay within the range of 1 to 30
if (moonPhaseValue <= 0) {
  moonPhaseValue += 30;
} else if (moonPhaseValue > 30) {
  moonPhaseValue -= 30;
}
// console.log('Moon phase value (adjusted):', moonPhaseValue);


// Find the corresponding moon phase object from maramataka
const phase = maramataka.find((phase) => phase.moonphase_id === moonPhaseValue);
// console.log('Selected phase:', phase);


  return (
    <div className="flex flex-col items-center mx-auto lg:flex-row lg:justify-between sm:mx-[5%] lg:mx-[10%] lg:h-full lg:mt-10">
      <h3 className="lg:w-[25%] lg:text-right">{phase?.name}</h3>
      <Image src={phase?.image || ''} alt={phase?.name || ''} width={500} height={500} />
      <div className="pb-10 lg:w-[25%] lg:bg-cetaceanblue lg:bg-opacity-80 lg:px-4 lg:rounded-2xl lg:py-10">
      <h4>{phase?.energy} energy</h4>
      <p>{phase?.goodFor}</p>
      </div>
    </div>
  );
}
