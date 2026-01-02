"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

type SearchCommandProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function SearchCommand({ open, onOpenChange }: SearchCommandProps) {
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 overflow-hidden">
        <DialogTitle className="sr-only">Search portfolio</DialogTitle>

        <Command>
          <CommandInput placeholder="Search portfolio..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>

            <CommandGroup heading="Pages">
              <CommandItem>About</CommandItem>
              <CommandItem>Projects</CommandItem>
              <CommandItem>Experience</CommandItem>
              <CommandItem>Skills</CommandItem>
              <CommandItem>GitHub</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
