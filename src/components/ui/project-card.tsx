"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardAction,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";
import { ProjectCarousel } from "./project-carousel";
import { useRouter } from "next/navigation";
import { getMiniView, PROJECTS } from "@/constants/projects";

export function ProjectCard() {
  const router = useRouter()

  return (
    <Card className="bg-primary-tangerine text-primary-tangerine-foreground h-full gap-0">
      <CardHeader>
        <CardTitle>Projects</CardTitle>
        <CardAction>
          <Button variant="outline" size="icon" className="rounded-full text-primary-tangerine-foreground!  border-primary-tangerine-foreground! hover:bg-primary-tangerine-foreground/20! cursor-pointer"
          onClick={() => router.push("/projects")}>
            <ArrowUpRightIcon />
          </Button>
        </CardAction>
      </CardHeader>

      <CardContent className="flex-1 flex justify-center py-0 px-6">
        <ProjectCarousel projects={PROJECTS.map(project => getMiniView(project))}/>
      </CardContent>
    </Card>
  );
}
