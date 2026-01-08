"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type SearchBarProps = {
  onOpen: () => void;
  className?: string;
  placeholder?: string;
};

export function SearchBar({
  onOpen,
  className,
  placeholder = "Search...",
}: SearchBarProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <Input
        readOnly
        onClick={onOpen}
        onFocus={onOpen}
        placeholder={placeholder}
        className="border-2 xl:text-lg light:border-gray-300 bg-secondary/70"
      />

      <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
        <kbd className="inline-flex items-center gap-1 rounded-lg border bg-background/70 px-2 py-1 text-xs text-muted-foreground">
          <span className="text-[12px]">⌘</span>
          <span>K</span>
        </kbd>
      </div>
    </div>
  );
}
