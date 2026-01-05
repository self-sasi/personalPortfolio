import { Color } from "@/types/decor";

export const COLOR_CLASS: Record<
  Color,
  { bg: string; fg: string; button: string; badge: string }
> = {
  default: {
    bg: "dark",
    fg: "",
    button:
      "",
    badge:
      "",
  },
  yellow: {
    bg: "bg-primary-yellow",
    fg: "text-primary-yellow-foreground",
    button:
      "text-primary-yellow-foreground! bg-primary-yellow bg-muted/50 hover:bg-primary-yellow-foreground/20!",
    badge:
      "border-primary-yellow-foreground/30 text-primary-yellow-foreground bg-transparent",
  },
  turquoise: {
    bg: "bg-primary-turquoise",
    fg: "text-primary-turquoise-foreground",
    button:
      "text-primary-turquoise-foreground! bg-primary-turquoise bg-muted/50 hover:bg-primary-turquoise-foreground/20!",
    badge:
      "border-primary-turquoise-foreground/30 text-primary-turquoise-foreground bg-transparent",
  },
  azure: {
    bg: "bg-primary-azure",
    fg: "text-primary-azure-foreground",
    button:
      "text-primary-azure-foreground! bg-primary-azure bg-muted/50 hover:bg-primary-azure-foreground/20!",
    badge:
      "border-primary-azure-foreground/30 text-primary-azure-foreground bg-transparent",
  },
  tangerine: {
    bg: "bg-primary-tangerine",
    fg: "text-primary-tangerine-foreground",
    button:
      "text-primary-tangerine-foreground! bg-primary-tangerine bg-muted/50 hover:bg-primary-tangerine-foreground/20!",
    badge:
      "border-primary-tangerine-foreground/30 text-primary-tangerine-foreground bg-transparent",
  },
  aqua: {
    bg: "bg-primary-aqua",
    fg: "text-primary-aqua-foreground",
    button:
      "text-primary-aqua-foreground! bg-primary-aqua bg-muted/50 hover:bg-primary-aqua-foreground/20!",
    badge:
      "border-primary-aqua-foreground/30 text-primary-aqua-foreground bg-transparent",
  },
  lavender: {
    bg: "bg-primary-lavender",
    fg: "text-primary-lavender-foreground",
    button:
      "text-primary-lavender-foreground! bg-primary-lavender bg-muted/50 hover:bg-primary-lavender-foreground/20!",
    badge:
      "border-primary-lavender-foreground/30 text-primary-lavender-foreground bg-transparent",
  },
  red: {
    bg: "bg-primary-red",
    fg: "text-primary-red-foreground",
    button:
      "text-primary-red-foreground! bg-primary-red bg-muted/50 hover:bg-primary-red-foreground/20!",
    badge:
      "border-primary-red-foreground/30 text-primary-red-foreground bg-transparent",
  },
  "indigo-vivid": {
    bg: "bg-primary-indigo-vivid",
    fg: "text-primary-indigo-vivid-foreground",
    button:
      "text-primary-indigo-vivid-foreground! bg-primary-indigo-vivid bg-muted/50 hover:bg-primary-indigo-vivid-foreground/20!",
    badge:
      "border-primary-indigo-vivid-foreground/30 text-primary-indigo-vivid-foreground bg-transparent",
  },
  "pink-vivid": {
    bg: "bg-primary-pink-vivid",
    fg: "text-primary-pink-vivid-foreground",
    button:
      "text-primary-pink-vivid-foreground! bg-primary-pink-vivid bg-muted/50 hover:bg-primary-pink-vivid-foreground/20!",
    badge:
      "border-primary-pink-vivid-foreground/30 text-primary-pink-vivid-foreground bg-transparent",
  },
  mint: {
    bg: "bg-primary-mint",
    fg: "text-primary-mint-foreground",
    button:
      "text-primary-mint-foreground! bg-primary-mint bg-muted/50 hover:bg-primary-mint-foreground/20!",
    badge:
      "border-primary-mint-foreground/30 text-primary-mint-foreground bg-transparent",
  },
  grassy: {
    bg: "bg-primary-grassy",
    fg: "text-primary-grassy-foreground",
    button:
      "text-primary-grassy-foreground! bg-primary-grassy bg-muted/50 hover:bg-primary-grassy-foreground/20!",
    badge:
      "border-primary-grassy-foreground/30 text-primary-grassy-foreground bg-transparent",
  }
};