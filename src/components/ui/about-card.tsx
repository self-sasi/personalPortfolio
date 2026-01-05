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
import { useRouter } from "next/navigation";

export function AboutCard() {
  const router = useRouter()

  return (
    <Card className="bg-primary-yellow text-primary-yellow-foreground h-full">
      <CardHeader>
        <CardTitle>About Me</CardTitle>
        <CardAction>
          <Button variant="outline" size="icon" className="rounded-full text-primary-yellow-foreground! border-primary-yellow-foreground! hover:bg-primary-yellow-foreground/20! cursor-pointer"
          onClick={() => router.push('/about')}>
            <ArrowUpRightIcon />
          </Button>
        </CardAction>
      </CardHeader>

      <CardContent className="flex-1">
        <p>
          I’m a CS major at UCalgary, passionate about developing software and
          learning new things.
          <br/><br/>
          I also love Shawarma. 🌯 😋
        </p>
      </CardContent>
      {/* <CardFooter></CardFooter> */}
    </Card>
  );
}
