"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardAction,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";

export function ExperienceCard() {
  return (
    <Card className="bg-primary-aqua text-primary-aqua-foreground h-full">
      <CardHeader>
        <CardTitle>Experience</CardTitle>
        <CardAction>
          <Button variant="outline" size="icon" className="rounded-full text-primary-aqua-foreground!  border-primary-aqua-foreground! hover:bg-primary-aqua-foreground/20! cursor-pointer">
            <ArrowUpRightIcon />
          </Button>
        </CardAction>
      </CardHeader>

      <CardContent className="flex-1">
        <p>
          I’m a CS major at UCalgary, passionate about developing software and
          solving problems!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit autem at, hic veritatis, veniam accusamus optio sed nesciunt aliquid corporis voluptas expedita eveniet quam exercitationem fugiat consectetur perspiciatis minima. Animi amet doloribus recusandae corporis tempore quos dolore, nesciunt possimus pariatur non ipsum, quibusdam expedita fugiat dolor corrupti sequi impedit nulla!
        </p>
      </CardContent>

      {/* <CardFooter></CardFooter> */}
    </Card>
  );
}
