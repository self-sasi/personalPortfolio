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
import { Project } from "@/types/project";
import { COLOR_CLASS } from "@/constants/decor";

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
  xl
}: Project) {
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

        <p className="text-sm xl:text-base leading-relaxed whitespace-pre-line">{body}</p>
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
<div className="w-1/2 relative overflow-hidden">
  <img
    src={imageSrc}
    alt="Banner"
    className="absolute inset-0 h-full w-full object-cover"
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
          <p className="text-sm xl:text-base leading-relaxed whitespace-pre-line">{body}</p>
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
