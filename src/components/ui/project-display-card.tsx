"use client";

import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardAction,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

type CardColor =
  | "yellow"
  | "turquoise"
  | "azure"
  | "tangerine"
  | "aqua"
  | "lavender"
  | "red"
  | "indigo-vivid"
  | "pink-vivid";

type ProjectDisplayCardProps = {
  title: string;
  subtitle?: string;
  body: string;
  imageSrc: string;
  imageAlt?: string;
  tech: readonly string[]; // ✅ change here
  color: CardColor;
  href?: string;
  horizontal: boolean;
  reversed: boolean;
};

const COLOR_CLASS: Record<
  CardColor,
  { bg: string; fg: string; button: string; badge: string }
> = {
  yellow: {
    bg: "bg-primary-yellow",
    fg: "text-primary-yellow-foreground",
    button:
      "text-primary-yellow-foreground! border-primary-yellow-foreground! hover:bg-primary-yellow-foreground/20!",
    badge:
      "border-primary-yellow-foreground/30 text-primary-yellow-foreground bg-transparent",
  },
  turquoise: {
    bg: "bg-primary-turquoise",
    fg: "text-primary-turquoise-foreground",
    button:
      "text-primary-turquoise-foreground! border-primary-turquoise-foreground! hover:bg-primary-turquoise-foreground/20!",
    badge:
      "border-primary-turquoise-foreground/30 text-primary-turquoise-foreground bg-transparent",
  },
  azure: {
    bg: "bg-primary-azure",
    fg: "text-primary-azure-foreground",
    button:
      "text-primary-azure-foreground! border-primary-azure-foreground! hover:bg-primary-azure-foreground/20!",
    badge:
      "border-primary-azure-foreground/30 text-primary-azure-foreground bg-transparent",
  },
  tangerine: {
    bg: "bg-primary-tangerine",
    fg: "text-primary-tangerine-foreground",
    button:
      "text-primary-tangerine-foreground! border-primary-tangerine-foreground! hover:bg-primary-tangerine-foreground/20!",
    badge:
      "border-primary-tangerine-foreground/30 text-primary-tangerine-foreground bg-transparent",
  },
  aqua: {
    bg: "bg-primary-aqua",
    fg: "text-primary-aqua-foreground",
    button:
      "text-primary-aqua-foreground! border-primary-aqua-foreground! hover:bg-primary-aqua-foreground/20!",
    badge:
      "border-primary-aqua-foreground/30 text-primary-aqua-foreground bg-transparent",
  },
  lavender: {
    bg: "bg-primary-lavender",
    fg: "text-primary-lavender-foreground",
    button:
      "text-primary-lavender-foreground! border-primary-lavender-foreground! hover:bg-primary-lavender-foreground/20!",
    badge:
      "border-primary-lavender-foreground/30 text-primary-lavender-foreground bg-transparent",
  },
  red: {
    bg: "bg-primary-red",
    fg: "text-primary-red-foreground",
    button:
      "text-primary-red-foreground! border-primary-red-foreground! hover:bg-primary-red-foreground/20!",
    badge:
      "border-primary-red-foreground/30 text-primary-red-foreground bg-transparent",
  },
  "indigo-vivid": {
    bg: "bg-primary-indigo-vivid",
    fg: "text-primary-indigo-vivid-foreground",
    button:
      "text-primary-indigo-vivid-foreground! border-primary-indigo-vivid-foreground! hover:bg-primary-indigo-vivid-foreground/20!",
    badge:
      "border-primary-indigo-vivid-foreground/30 text-primary-indigo-vivid-foreground bg-transparent",
  },
  "pink-vivid": {
    bg: "bg-primary-pink-vivid",
    fg: "text-primary-pink-vivid-foreground",
    button:
      "text-primary-pink-vivid-foreground! border-primary-pink-vivid-foreground! hover:bg-primary-pink-vivid-foreground/20!",
    badge:
      "border-primary-pink-vivid-foreground/30 text-primary-pink-vivid-foreground bg-transparent",
  },
};

export function ProjectDisplayCard({
  title,
  subtitle,
  body,
  imageSrc,
  imageAlt = "Project image",
  tech,
  color,
  href,
  horizontal,
  reversed,
}: ProjectDisplayCardProps) {
  const c = COLOR_CLASS[color];

  const verticalCard = (
    <Card className={`w-full h-full overflow-hidden ${c.bg} ${c.fg}`}>
      <CardHeader>
        <div className="space-y-1">
          <CardTitle>{title}</CardTitle>
          {subtitle ? (
            <CardDescription className={c.fg}>{subtitle}</CardDescription>
          ) : null}
        </div>

        {href ? (
          <CardAction>
            <Button
              asChild
              variant="outline"
              size="icon"
              className={`rounded-full cursor-pointer ${c.button}`}
              aria-label="Open project"
            >
              <Link href={href}>
                <Github />
              </Link>
            </Button>
          </CardAction>
        ) : null}
      </CardHeader>

      {/* Long description */}
      <CardContent className="pt-0 flex-1">
        {/* Image */}
        <div className="px-0 pb-4">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="aspect-video w-full rounded-xl object-cover"
          />
        </div>

        <p className="text-sm leading-relaxed opacity-90">{body}</p>
      </CardContent>

      {/* Tech badges */}
      <CardFooter className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <Badge key={t} variant="outline" className={c.badge}>
            {t}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );

  const horizontalCard = (
    <Card className={`w-full h-full p-0 ${reversed ? "flex-row-reverse" : "flex-row"} gap-0`}>
      <div className="w-1/2">
        <img
          src={imageSrc}
          alt="Banner"
          className="w-full aspect-5/6 overflow-hidden"
        />
      </div>
      <Card className={`w-1/2 ${reversed ? "rounded-r-none" : "rounded-l-none"} ${c.bg} ${c.fg}`}>
        <CardHeader>
          <div className="space-y-1">
            <CardTitle>{title}</CardTitle>
            {subtitle ? (
              <CardDescription className={c.fg}>{subtitle}</CardDescription>
            ) : null}
          </div>

          {href ? (
            <CardAction>
              <Button
                asChild
                variant="outline"
                size="icon"
                className={`rounded-full cursor-pointer ${c.button}`}
                aria-label="Open project"
              >
                <Link href={href}>
                  <Github />
                </Link>
              </Button>
            </CardAction>
          ) : null}
        </CardHeader>

        {/* Long description */}
        <CardContent className="pt-0 flex-1">
          <p className="text-sm leading-relaxed opacity-90">{body}</p>
        </CardContent>

        {/* Tech badges */}
        <CardFooter className={`flex flex-wrap gap-2 ${reversed ? "rounded-r-none!" : "rounded-l-none!"}`}>
          {tech.map((t) => (
            <Badge key={t} variant="outline" className={c.badge}>
              {t}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </Card>
  );

  if (horizontal) {
    return (
      <>
        <div className="size-full hidden md:block">{horizontalCard}</div>
        <div className="size-full md:hidden">{verticalCard}</div>
      </>
    );
  } else {
    return verticalCard;
  }
}
