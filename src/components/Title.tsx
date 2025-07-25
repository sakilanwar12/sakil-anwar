import FlowerIcon from "@/components/svg/FlowerIcon";
import React from "react";

interface ITitleProps {
  title?: string;
}
const Title = ({ title = "My Stack" }: ITitleProps) => {
  return (
    <div className="flex items-center gap-2">
      <FlowerIcon />
      <h2 className="text-xl uppercase font-mono"> {title}</h2>
    </div>
  );
};

export default Title;
