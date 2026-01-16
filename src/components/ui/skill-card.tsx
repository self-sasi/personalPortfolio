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
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { SKILL_GROUPS } from "@/constants/skills";
import { SkillBadge } from "./skill-badge";

export function SkillCard() {
  return (
    <Dialog>
      {/* the card that is displayed on the page */}
      <Card className="h-full bg-primary-turquoise text-primary-turquoise-foreground">
        <CardHeader>
          <CardTitle>Skills</CardTitle>
          <CardAction>
            <DialogTrigger asChild>


              <Button variant="outline" size="icon" className="rounded-full text-primary-turquoise-foreground! border-primary-turquoise-foreground! hover:bg-primary-turquoise-foreground/20! cursor-pointer">
                <ArrowUpRightIcon />
              </Button>
            </DialogTrigger>
          </CardAction>
          <CardDescription className="text-primary-turquoise-foreground/70!">
            What I work with and know well
          </CardDescription>
        </CardHeader>
      </Card>

      {/* the dialog box content */}
      <DialogContent className="p-0 border-0 bg-transparent md:max-w-lg lg:max-w-2xl">

        <Card>

          {/* the reason why this is needed is because the dialog header component is needed for screen reading 
          purposes. next suggests to keep this hidden, which is what has been done :DD */}
          <DialogHeader className="p-6 pb-0 hidden">
            <DialogTitle>
              Open Source Work
            </DialogTitle>
            <DialogDescription>
              More details about contributions.
            </DialogDescription>
          </DialogHeader>

          <CardHeader>
            <CardTitle>Skills</CardTitle>
            <CardDescription className="text-sm!">
              What I work with and know well
            </CardDescription>
          </CardHeader>

          <CardContent className="px-6 m-0 grid grid-cols-12 gap-10 overflow-scroll">
            {SKILL_GROUPS.map((group) => (
              <div key={group.name} className="col-span-12">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-md font-semibold tracking-wide">
                    {group.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <SkillBadge
                      key={`${group.name}-${skill.text}`}
                      {...skill}
                    />
                  ))}
                </div>
              </div>
            ))}
          </CardContent>

        </Card>
      </DialogContent>
    </Dialog>
  );
}
