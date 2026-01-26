"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { GitMerge, GitPullRequestArrow } from "lucide-react";
import { OpenSourceProject } from "@/types/opensource";
import Link from "next/link";

type OsAccordionProps = {
    projects: OpenSourceProject[];
    defaultOpenProjectName?: string;
};

export function OsAccordion({
    projects,
    defaultOpenProjectName,
}: OsAccordionProps) {
    return (
        <Accordion
            type="single"
            collapsible
            defaultValue="project-0"
            className="w-full"
        >
            {projects.map((project, idx) => (
                <AccordionItem
                    key={`${project.name}-${idx}`}
                    value={`project-${idx}`}
                    className="border-b"
                >
                    <AccordionTrigger className="py-3 text-left hover:no-underline">
                        <div className="flex w-full items-center justify-between gap-3">
                            <span className="font-medium">{project.name}</span>
                            <span className="text-xs opacity-70">
                                {project.numContribs} contrib{project.numContribs === 1 ? "" : "s"}
                            </span>
                        </div>
                    </AccordionTrigger>

                    <AccordionContent className="pb-3">
                        <div className="flex flex-col gap-3">
                            {project.pullRequests?.length ? (
                                project.pullRequests.map((pr, prIdx) => (
                                    <div key={prIdx} className="flex items-start gap-3">
                                        {pr.status === "merged" ? (
                                            <GitMerge className="h-5 w-5 mt-0.5 text-purple-500" />
                                        ) : (
                                            <GitPullRequestArrow className="h-5 w-5 mt-0.5 text-green-600" />
                                        )}

                                        <div className="min-w-0 leading-tight">
                                            <Link
                                                href={pr.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm underline transition-colors! duration-150! hover:text-blue-400!"
                                            >
                                                {pr.title}
                                            </Link>
                                            <div className="text-xs opacity-70">
                                                {pr.status === "merged" ? "Merged" : "Open"}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-sm opacity-80">No PRs listed.</div>
                            )}

                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
