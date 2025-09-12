function GridBlock() {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path
            d="M 50 0 L 100 10 L 0 0 L 0 0 0 10"
            fill="none"
            stroke="#475569"
            strokeWidth="0.2"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

export default GridBlock;
