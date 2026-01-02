"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./button";
import { ArrowUpRightIcon } from "lucide-react";

export function PhCard() {
  return (
    <Card className="h-full bg-primary-lavender text-primary-lavender-foreground">
      <CardHeader>
        <CardTitle>PlaceHolder</CardTitle>
        <CardAction>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full text-primary-lavender-foreground! border-primary-lavender-foreground! hover:bg-primary-lavender-foreground/20! cursor-pointer"
          >
            <ArrowUpRightIcon />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex-1">
        Something to decide
      </CardContent>
    </Card>
  );
}
