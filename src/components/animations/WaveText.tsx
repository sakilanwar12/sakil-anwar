import { useEffect, useState } from "react";

interface IWaveText{
  text: string,
  className?: string,
  delay?: number
}
const WaveText = ({ text, className, delay = 0 }: IWaveText) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="wave-container overflow-hidden">
      <h1 className="wave-text">
        {text.split("").map((char, index) => (
          <span
            key={index}
            style={{
              animationDelay: `${delay + index * 0.1}s`,
              transform: isVisible ? "translateY(0)" : "translateY(100px)",
              opacity: isVisible ? 1 : 0,
            }}
            className={`inline-block text-[clamp(4rem,12vw,10rem)] leading-[1.1] text-center uppercase transition-all duration-700 ease-out hover:scale-110 hover:text-green-400 cursor-default ${className}`}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
};
export default WaveText;
