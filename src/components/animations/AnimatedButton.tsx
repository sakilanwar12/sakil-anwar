export interface IAnimatedButton{
    children: React.ReactNode;
    onClick?: () => void;   
    className?: string;
    props?: React.ComponentProps<"button">
}
const AnimatedButton = ({ children, onClick, className = "", ...props }: IAnimatedButton) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative group overflow-hidden rounded-full px-8 py-4 text-lg font-semibold
        bg-transparent border-2 border-green-400 text-green-400
        transition-all duration-300 ease-out
        hover:bg-green-400 hover:text-black hover:scale-105 hover:shadow-lg hover:shadow-green-400/25
        active:scale-95
        ${className}
      `}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/5 to-green-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
    </button>
  );
};

export default AnimatedButton;