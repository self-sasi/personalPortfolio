"use client";

import {useEffect} from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  CommandDialog,
} from "@/components/ui/command";
import { Briefcase, CodeSquare, FolderGit2, Home, Moon, Smile, Sun } from "lucide-react";
import { useThemeActions } from "@/components/use-theme-actions";
import { useRouter } from "next/navigation";

type AppCommandProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function AppCommand({ open, onOpenChange }: AppCommandProps) {
  const router = useRouter();
  
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onOpenChange]);

  const run = (action: () => void) => {
    onOpenChange(false);
    action();
  }

  const routeTo = (path: string) => {
    run(() => router.push(path));
  }

  const { setDark, setLight } = useThemeActions();

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange} title="Command" description="Type a command or search...">
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => run(setLight)}>
              <Sun />
              <span>Light</span>
            </CommandItem>
            <CommandItem onSelect={() => run(setDark)}>
              <Moon />
              <span>Dark</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Pages">
            <CommandItem onSelect={() => routeTo('/')}>
              <Home />
              <span>Home</span>
              <CommandShortcut>⌘H</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => routeTo('/about')}>
              <Smile />
              <span>About Me</span>
              <CommandShortcut>⌘M</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => routeTo('/skills')}>
              <CodeSquare />
              <span>Skills</span>
              <CommandShortcut>⌘I</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => routeTo('/projects')}>
              <FolderGit2 />
              <span>Projects</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => routeTo('/experience')}>
              <Briefcase />
              <span>Experience</span>
              <CommandShortcut>⌘Y</CommandShortcut>
            </CommandItem>
          </CommandGroup>

        </CommandList>
      </Command>
    </CommandDialog>
  );
}
