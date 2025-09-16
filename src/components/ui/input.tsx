import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "./label";
interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
  id?: string;
  error?: string;
}
function Input({ className, type, label, id, error, ...props }: InputProps) {
  return (
    <div className="flex-1 w-full">
      {label && <Label htmlFor={id}>{label}</Label>}

      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-default-800",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...props}
        id={id}
      />
      {error && <p className="text-sm font-medium text-destructive">{error}</p>}
    </div>
  );
}

export { Input };
