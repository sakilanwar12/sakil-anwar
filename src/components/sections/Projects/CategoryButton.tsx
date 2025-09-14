import { cn } from "@/lib/utils";

interface ICategoryButtonProps {
  onClick: () => void;
  icon?: React.ReactNode;
  name?: string;
  selectedCategory: string;
  activeCategory: string;
}
function CategoryButton({
  onClick,
  icon,
  name,
  selectedCategory,
  activeCategory,
}: ICategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center  cursor-pointer px-6 py-2.5 rounded-full transition-all duration-300 bg-background text-default-400 hover:bg-default-600/50 border border-border",
        {
          "bg-blue-600 text-default-50 shadow-lg shadow-blue-600/30":
            selectedCategory === activeCategory,
        }
      )}
    >
      {icon}
      {name}
    </button>
  );
}

export default CategoryButton;
