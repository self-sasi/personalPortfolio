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

export function ContribCard() {
  return (
    <Card className="h-full">
        <img src="https://ghchart.rshah.org/self-sasi"/>
    </Card>
  );
}
