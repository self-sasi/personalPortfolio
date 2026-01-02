"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardAction,
  CardFooter,
} from "@/components/ui/card";
import { ThemeButton } from "./theme-button";

export function ThemeCard() {
  return (
    <Card className="h-full bg-white">
      <CardContent className="flex-1 flex justify-center items-center">
        <ThemeButton />
        
      </CardContent>
    </Card>
  );
}
