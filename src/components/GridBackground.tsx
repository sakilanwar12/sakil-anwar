
import GridBlock from "./svg/GridBlock";

function GridBackground() {
  return (
    <div className="fixed inset-0 w-screen h-screen opacity-5 pointer-events-none z-0">
      <GridBlock />
    </div>
  );
}

export default GridBackground;
