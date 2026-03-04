interface GrainOverlayProps {
  id?: string;
}

export default function GrainOverlay({ id = 'grain' }: GrainOverlayProps) {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.06 }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <filter id={id}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves={4}
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter={`url(#${id})`} />
      </svg>
    </div>
  );
}
