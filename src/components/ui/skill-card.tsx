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
import { useRouter } from "next/navigation";

export function SkillCard() {
  const router = useRouter()

  return (
    <Card className="h-full bg-primary-turquoise text-primary-turquoise-foreground">
    <CardHeader>
        <CardTitle>Skills</CardTitle>
        <CardAction>
          <Button variant="outline" size="icon" className="rounded-full text-primary-turquoise-foreground! border-primary-turquoise-foreground! hover:bg-primary-turquoise-foreground/20! cursor-pointer"
          onClick={() => router.push('/skills')}>
            <ArrowUpRightIcon />
          </Button>
        </CardAction>
        <CardDescription className="text-primary-turquoise-foreground/70!">
            What I work with and know well
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
