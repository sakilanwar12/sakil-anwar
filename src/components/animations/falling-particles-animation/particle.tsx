import React, { useMemo } from "react";

const Particle = () => {
  const left = useMemo(() => {
    return Math.random() * window.innerWidth;
  }, []);

  return (
    <span
      className="absolute top-0 w-2 h-2 bg-white rounded-full animate-particle"
      style={{
        left: `${left}px`,
      }}
    ></span>
  );
};

export default Particle;
