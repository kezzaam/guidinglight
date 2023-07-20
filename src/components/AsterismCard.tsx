import AsterismMap from "./AsterismMap";

export interface Asterism {
  id: string;
  asterism_id: string;
  name: string;
  p: number;
  loc: number[];
  geometry: any;
  maori_name: string;
  description: string;
  category: string;
}

type AsterismCardProps = {
  asterism: Asterism;
};

export default function AsterismCard({ asterism }: AsterismCardProps) {
  return (
    <>
      <a
        href="#"
        className="flex flex-col items-center bg-cetaceanblue border border-outerspace rounded-lg shadow md:flex-row md:max-w-xl hover:bg-outerspace"
      >
        <div className="p-4">
          <h2 className="text-2xl mt-4">{asterism.name}</h2>
          <AsterismMap asterism={asterism} />
        </div>
      </a>
    </>
  );
}
