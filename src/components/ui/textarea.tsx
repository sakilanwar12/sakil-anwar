import * as React from "react";

import { cn } from "@/lib/utils";

import { Label } from "./label";
interface InputProps extends React.ComponentProps<"textarea"> {
  label?: string;
  id?: string;
  error?: string;
}
function Textarea({ className, label, id, error, ...props }: InputProps) {
  return (
    <div className="flex-1 w-full">
      {label && <Label htmlFor={id}>{label}</Label>}
      <textarea
        data-slot="textarea"
        className={cn(
          "border-border  placeholder:text-muted-foreground focus-visible:border-default-800 focus-visible:ring-border-800 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-24 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        {...props}
        id={id}
      />
      {error && <p className="text-sm font-medium text-destructive">{error}</p>}
    </div>
  );
}

export { Textarea };
