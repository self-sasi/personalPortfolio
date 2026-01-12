"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardAction,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Timeline from "@/components/ui/timeline";
import { EXPERIENCES, MINI_EXPERIENCES } from "@/constants/experience";
import HorizontalTimeline from "./horizontal-timeline";

export function ExperienceCard() {
  return (
    <Dialog>
      {/* the card that is displayed on the page */}
      <Card className="bg-primary-aqua text-primary-aqua-foreground h-full gap-0">
        <CardHeader>
          <CardTitle>Experience</CardTitle>
          <CardAction>
            <DialogTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full text-primary-aqua-foreground!  border-primary-aqua-foreground! hover:bg-primary-aqua-foreground/20! cursor-pointer">
                <ArrowUpRightIcon />
              </Button>
            </DialogTrigger>
          </CardAction>
        </CardHeader>

        <CardContent className="flex-1 p-0">
          <HorizontalTimeline experiences={MINI_EXPERIENCES} />
        </CardContent>

      </Card>

      {/* the dialog box content */}
      <DialogContent className="p-0 border-0 bg-transparent md:max-w-xl lg:max-w-3xl h-[80vh]">

        <Card>

          {/* the reason why this is needed is because the dialog header component is needed for screen reading 
          purposes. next suggests to keep this hidden, which is what has been done :DD */}
          <DialogHeader className="p-6 pb-0 hidden">
            <DialogTitle>
              Experience
            </DialogTitle>
            <DialogDescription>
              More details about my professional experience.
            </DialogDescription>
          </DialogHeader>

          <CardHeader>
            <CardTitle>Experience</CardTitle>
            <CardDescription className="text-sm!">Professional roles and organizations</CardDescription>
          </CardHeader>

          <CardContent className="px-6 w-full py-3 m-0 grid grid-cols-12 gap-10 overflow-y-auto p-0">
            <div className="col-span-12 min-w-0 p-0">
              <Timeline experiences={EXPERIENCES}/>
            </div>

          </CardContent>
        </Card>

      </DialogContent>
    </Dialog>
  );
}
