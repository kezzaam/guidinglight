import Image from 'next/image'
import { MoonPhase } from 'astronomy-engine'
import maramataka from '../data/maramataka'

export default function Maramataka({ selectedDate, onDateSelect }: { selectedDate: Date; onDateSelect: (date: Date) => void }) {
  // Calculate the Moon's phase for the selected date
  const moonPhase = MoonPhase(selectedDate);
  console.log('Moon phase:', moonPhase);

  // Determine the full range of moon phase angles
  const fullRange = 360; // Assuming the moon phase angles range from 0 to 360 degrees

  // Calculate the size of each segment
  const segmentSize = fullRange / 30;

  // Calculate the moon phase value based on the angle and subtract the offset
  let moonPhaseValue = Math.ceil((moonPhase / segmentSize) - 15);
  console.log('Moon phase value (before adjustment):', moonPhaseValue);

  // Adjust the moon phase value to stay within the range of 1 to 30
  if (moonPhaseValue < 1) {
    moonPhaseValue += 30;
  } else if (moonPhaseValue > 30) {
    moonPhaseValue -= 30;
  }
  console.log('Moon phase value (adjusted):', moonPhaseValue);

  // Find the corresponding moon phase object from maramataka
  const phase = maramataka.find((phase) => phase.moonphase_id === moonPhaseValue);
  console.log('Selected phase:', phase);

  return (
    <div>
      <h3>{phase?.name}</h3>
      <Image src={phase?.image || ''} alt={phase?.name || ''} width={500} height={500} />
      <h4>{phase?.energy} energy</h4>
      <p>{phase?.goodFor}</p>
    </div>
  );
}
