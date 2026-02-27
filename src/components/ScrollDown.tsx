import useTargetScroll from "@/hooks/useTargetScroll";
import { ArrowDown } from "lucide-react";

function ScrollDown() {
  const scrollToTarget = useTargetScroll();

  return (
    <div
      className="text-center text-default-400 font-bold uppercase  cursor-pointer absolute bottom-12 inset-x-0 "
      onClick={() => scrollToTarget("#skills", 50)}
    >
     <ArrowDown className="size-10 mx-auto animate-scroll"/>
    </div>
  );
}

export default ScrollDown;
