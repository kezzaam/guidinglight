import StarCard, { Star } from './StarCard'
import PlanetCard, { Planet } from './PlanetCard'
import ConstellationCard, { Constellation } from './ConstellationCard'
import AsterismCard, { Asterism } from './AsterismCard'

type DiscoveryItem = Star | Planet | Constellation | Asterism;

interface CardsProps {
  data: DiscoveryItem[]
  inputValue: string
}

export default function Cards({ data, inputValue }: CardsProps) {
  const filteredData = data.filter((item: DiscoveryItem) =>
    item.name.toLowerCase().includes(inputValue.toLowerCase())
  )

  return (
    <>
      {filteredData.map((item: DiscoveryItem) => {
        if (item.category === 'star') {
          const starItem = item as Star;
          return <StarCard key={starItem.id} star={starItem} />;
        } else if (item.category === 'planet') {
          const planetItem = item as Planet;
          return <PlanetCard key={planetItem.id} planet={planetItem} />;
        } else if (item.category === 'constellation') {
          const constellationItem = item as Constellation;
          return <ConstellationCard key={constellationItem.id} constellation={constellationItem} />;
        } else if (item.category === 'asterism') {
          const asterismItem = item as Asterism;
          return <AsterismCard key={asterismItem.id} asterism={asterismItem} />;
        }
        return null; // Add this line to handle other cases or unknown types
      })}
    </>
  )
}
