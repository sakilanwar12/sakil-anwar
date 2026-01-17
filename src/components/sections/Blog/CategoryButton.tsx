"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface CategoryButtonProps {
  onClick: () => void;
  icon: ReactNode;
  name: string;
  selectedCategory: string;
  activeCategory: string;
}

function CategoryButton({
  onClick,
  icon,
  name,
  selectedCategory,
  activeCategory,
}: CategoryButtonProps) {
  const isActive = selectedCategory === activeCategory;

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        "flex items-center rounded-lg border-2 px-6 py-3 font-semibold transition-all duration-300",
        {
          "border-primary bg-primary shadow-primary/30 text-white shadow-lg":
            isActive,
          "border-border bg-default text-default-400 hover:border-primary/50 hover:text-primary":
            !isActive,
        },
      )}
    >
      {icon}
      {name}
    </motion.button>
  );
}

export default CategoryButton;
