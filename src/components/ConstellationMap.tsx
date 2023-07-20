import constellationLines from '../data/constellations.lines.json';

const getRandomDelay = () => Math.random() * 10; // Generate a random delay value between 0 and 5

const star = (
  <path
    className="star"
    fill="#F8F9FA"
    d="M147, 147 c-25.5, 0-25.787, 26.359-25.787, 26.359 C121.213, 150.438, 96, 147, 96, 147 c25.787, 0, 25.213-26.359, 25.213-26.359 C121.213, 147, 147, 147, 147, 147z"
    transform="translate(-120, -150) scale(1, 1)"
    style={{ animationDelay: `${getRandomDelay()}s` }}
  />
);

const ConstellationMap = ({ constellationId }: any) => {
  
  // Find the constellation that matches the provided 'constellationId'
  const matchingConstellation = constellationLines.features.find(
    (feature) => feature.id === constellationId
  );

  if (!matchingConstellation) {
    // Handle the case when the matching constellation is not found
    return null;
  }

  const geometry = matchingConstellation.geometry;
  const coordinates = geometry.coordinates;

  // Find the bounding box of the constellation's coordinates with padding
  const padding = 5; // Adjust the padding value as needed
  let [minX, minY, maxX, maxY] = coordinates.reduce(
    ([minX, minY, maxX, maxY], segment) => {
      segment.forEach(([x, y]) => {
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      });
      return [minX, minY, maxX, maxY];
    },
    [Infinity, Infinity, -Infinity, -Infinity]
  );

  // Apply padding to the bounding box
  minX -= padding;
  minY -= padding;
  maxX += padding;
  maxY += padding;

  // Calculate scaling factors to fit the constellation within the viewBox
  const viewBoxWidth = 300; // Width of the viewBox
  const viewBoxHeight = 300; // Height of the viewBox
  const scaleFactor = Math.min(viewBoxWidth / (maxX - minX), viewBoxHeight / (maxY - minY));

  // Implement the rendering logic to create SVG path elements without transformations
  const constellationPaths = coordinates.map((segment, index) => {
    const pathString = segment.map(([x, y]) => `${(x - minX) * scaleFactor},${(y - minY) * scaleFactor}`).join(' ');

    return (
      <g key={index}>
        {/* Render the line segment */}
        <path
          d={`M ${pathString}`}
          fill="none"
          stroke="white"
          opacity={0.5}
          strokeWidth={2}
        />
        {/* Render the star at each coordinate of the line segment */}
        {segment.map(([x, y], i) => (
          <g key={`${index}-${i}`} transform={`translate(${(x - minX) * scaleFactor}, ${(y - minY) * scaleFactor}) scale(0.25, 0.25)`}>
            {star}
          </g>
        ))}
      </g>
    );
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      style={{ height: 'auto', width: '100%' }}
    >
      <g>
        {/* Render the constellation paths without transformations */}
        {constellationPaths}
      </g>
    </svg>
  );
};

export default ConstellationMap;
