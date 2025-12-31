import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Label } from "./label";

const inputVariants = cva(
  "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-10 w-full min-w-0 bg-transparent text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "border-input dark:bg-input/30 border rounded-md px-3 py-1 shadow-xs focus-visible:border-default-800",
        underline:
          "border-input rounded-none border-0 border-b px-0 focus-visible:border-primary focus-visible:ring-0 shadow-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface InputProps
  extends
    React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
}

function Input({
  className,
  type,
  label,
  id,
  error,
  variant,
  ...props
}: InputProps) {
  return (
    <div className="w-full flex-1">
      {label && <Label htmlFor={id}>{label}</Label>}

      <input
        type={type}
        data-slot="input"
        className={cn(inputVariants({ variant, className }))}
        {...props}
        id={id}
      />
      {error && <p className="text-destructive text-sm font-medium">{error}</p>}
    </div>
  );
}

export { Input, inputVariants };
