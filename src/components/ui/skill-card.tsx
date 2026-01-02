"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./button";
import { ArrowUpRightIcon } from "lucide-react";

export function SkillCard() {
  return (
    <Card className="h-full bg-primary-turquoise text-primary-turquoise-foreground">
    <CardHeader>
        <CardTitle>Skills</CardTitle>
        <CardAction>
          <Button variant="outline" size="icon" className="rounded-full text-primary-turquoise-foreground! border-primary-turquoise-foreground! hover:bg-primary-turquoise-foreground/20! cursor-pointer">
            <ArrowUpRightIcon />
          </Button>
        </CardAction>
        <CardDescription className="text-primary-turquoise-foreground/70!">
            Stuff I know and I'm proficient in
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
