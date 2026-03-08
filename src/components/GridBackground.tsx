import GridBlock from "./svg/GridBlock";

function GridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 h-screen w-full opacity-5">
      <GridBlock />
    </div>
  );
}

export default GridBackground;
