import { cn } from "@/lib/utils";

interface IWaveTextProps {
  text: string;
  className?: string;
}
const WaveText = ({ text, className }: IWaveTextProps) => {
  return (
    <div className="wave-container">
      <h1 className="wave-text">
        {text.split("").map((char, index) => (
          <span
            key={index}
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
            className={cn(
              "inline-block text-[160px] leading-[170px] text-center uppercase animate-wave",
              className
            )}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default WaveText;
