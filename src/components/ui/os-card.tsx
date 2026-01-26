"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon, GitMerge, GitPullRequestArrow } from "lucide-react";
import { OsAccordion } from "./os-accordian";
import { ContribMiniView } from "@/types/opensource";
import { CONTRIBUTIONS, MINI_CONTRIBUTIONS } from "@/constants/opensource";
import Link from "next/link";

export function OpenSourceCard() {
  let mini_contribs : ContribMiniView[] = MINI_CONTRIBUTIONS;
  if (MINI_CONTRIBUTIONS.length > 2) {
    mini_contribs = MINI_CONTRIBUTIONS.slice(0, 2);
  }

  return <Dialog>
    {/* the card that is displayed on the page */}
    <Card className="h-full bg-primary-lavender text-primary-lavender-foreground">
      <CardHeader>
        <CardTitle>Open Source Work</CardTitle>

        <CardAction>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full text-primary-lavender-foreground! border-primary-lavender-foreground! hover:bg-primary-lavender-foreground/20! cursor-pointer"
            >
              <ArrowUpRightIcon />
            </Button>
          </DialogTrigger>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col flex-1 gap-3">
        {mini_contribs.map((contrib, i) => (
          <div key={i} className="flex items-start gap-3">
            {contrib.status === "merged" ? (
              <GitMerge className="h-5 shrink-0 w-5 mt-2 text-purple-500" />
            ) : (
              <GitPullRequestArrow className="h-5 shrink-0 w-5 mt-2 text-green-600" />
            )}

            <div className="min-w-0 leading-tight">
              <Link
                href={contrib.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline transition-colors duration-150 hover:text-blue-600"
              >
                {contrib.pullRequestTitle}
              </Link>
              <div className="text-xs opacity-70">
                {contrib.projectName} • {contrib.status === "merged" ? "Merged" : "Open"}
              </div>
            </div>
          </div>
        ))}
      </CardContent>

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
          <CardTitle>Open Source Work</CardTitle>
        </CardHeader>

        <CardContent className="px-6 py-3 m-0 grid grid-cols-12 gap-10 overflow-scroll">
          <div className="col-span-12">
            <OsAccordion projects={CONTRIBUTIONS}></OsAccordion>
          </div>

          <p className="col-span-12 text-sm text-white/80">ps: I am fairly new to this 😅</p>
        </CardContent>

      </Card>
    </DialogContent>
  </Dialog>;
}
