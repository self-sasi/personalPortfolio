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
import { ArrowUpRightIcon, GitMerge, GitPullRequest } from "lucide-react";

export function PhCard() {

  const recentContribs = [
    {
      merged: true,
      project: "xyz",
      title: "add this that feature into this"
    },
      {
      merged: false,
      project: "abd",
      title: "remove this that feature from this"
    }
  ];
  return (
    <Card className="h-full bg-primary-lavender text-primary-lavender-foreground">
      <CardHeader>
        <CardTitle>Open Source Work</CardTitle>
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
<CardContent className="flex flex-col flex-1 gap-3">
  {recentContribs.map((contrib, i) => (
    <div
      key={i}
      className="flex items-start gap-3"
    >
      <GitPullRequest
        className={`h-4 w-4 mt-0.5 ${
          contrib.merged ? "text-green-600" : "text-yellow-600"
        }`}
      />

      <div className="flex flex-col leading-tight">
        <span className="font-medium">
          {contrib.project}
        </span>
        <span className="text-sm opacity-80">
          {contrib.title}
        </span>
      </div>
    </div>
  ))}
</CardContent>

    </Card>
  );
}
