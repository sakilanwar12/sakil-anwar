"use client";

import { type LucideIcon } from "lucide-react";

interface CategoryButtonProps {
  category: {
    id: string;
    name: string;
    icon: LucideIcon;
  };
  isActive: boolean;
  onClick: () => void;
}

function CategoryButton({ category, isActive, onClick }: CategoryButtonProps) {
  const Icon = category.icon;

  return (
    <button
      onClick={onClick}
      className={`flex cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
        isActive
          ? "bg-gradient-to-r from-[#00d4ff] to-[#7b2ff7] text-white shadow-[0_0_20px_rgba(0,212,255,0.2)]"
          : "glass text-[#8888aa] hover:border-[rgba(0,212,255,0.2)] hover:text-white"
      }`}
    >
      <Icon className="size-4" />
      {category.name}
    </button>
  );
}

export default CategoryButton;
