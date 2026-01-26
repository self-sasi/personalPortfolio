"use client";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { GitHubCalendar } from "react-github-calendar";

export function ContribCard() {
  return (
    <Card className="h-full bg-white">
      <CardContent className="flex-1 flex justify-center items-center text-black [&_div]:text-sm [&_div]:lg:text-base">
        <GitHubCalendar
          username="self-sasi"
          blockMargin={2}
          blockSize={10}
          colorScheme={"light"}
        />
      </CardContent>
    </Card>
  );
}
