"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GitHubCalendar } from "react-github-calendar";

export function ContribCard() {
  return (
    <Card className="h-full bg-white">
      <CardContent className="flex-1 flex justify-center items-center text-black">
        {/* <img src="https://ghchart.rshah.org/self-sasi"/> */}
        <GitHubCalendar
          username="self-sasi"
          blockMargin={2}
          blockSize={10}
          colorScheme={"light"}
          fontSize={11}
        />
      </CardContent>
    </Card>
  );
}
