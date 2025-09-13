import useTargetScroll from "@/hooks/useTargetScroll";

function ScrollDown() {
  const scrollToTarget = useTargetScroll();

  return (
    <div
      className="text-center text-default-400 font-bold uppercase  cursor-pointer absolute bottom-8 inset-x-0 "
      onClick={() => scrollToTarget("#skills", 50)}
    >
      <span className="block mb-3">Scroll to explore</span>
      <span className="mx-auto w-8 h-16 border-2 border-border/80 rounded-[30px] flex transition-all duration-300 hover:bg-primary/10  hover:shadow-[0_0_15px_rgba(59,130,246,0.7)]">
        <span className="block w-1 h-3 rounded-full m-auto animate-scroll bg-gradient-to-br from-default-300 to-primary"></span>
      </span>
    </div>
  );
}

export default ScrollDown;
