import { ExerienceMiniVeiw } from "@/types/experience";
import React from "react";

export type HorizontalTimelineProps = {
    experiences: ExerienceMiniVeiw[];
};

export default function HorizontalTimeline({
    experiences,
}: HorizontalTimelineProps) {
    if (!experiences?.length) return null;

    return (
        <div className="max-w-(--breakpoint-lg) mx-auto px-6">
            <div className="overflow-x-auto">
                <div className="min-w-max">
                    <div className="relative pt-7 pb-4">
                        <div className="absolute left-0 right-0 top-[calc(1.75rem+22px)] sm:top-[calc(1.75rem+24px)]">
                            <div className="h-[3px] rounded-full bg-gradient-to-r from-transparent via-slate-900/55 to-transparent dark:via-white/65" />
                        </div>

                        <div className="flex items-start gap-4 md:gap-6">
                            {experiences.map(
                                (
                                    { iconBg, icon, company, role, period, ringBg },
                                    index
                                ) => (
                                    <div
                                        key={index}
                                        className="relative flex flex-col items-center"
                                    >
                                        {/* node */}
                                        <div
                                            className={[
                                                "z-10 rounded-full",
                                                "h-11 w-11 sm:h-12 sm:w-12",
                                                "ring-[10px]",
                                                ringBg ?? "ring-slate-950/15 dark:ring-white/20",
                                                "shadow-[0_10px_22px_rgba(0,0,0,0.22)]",
                                                "outline outline-1 outline-white/10",
                                                // hover target
                                                "group",
                                            ].join(" ")}
                                        >
                                            {/* inner node will largen, ring does not */}
                                            <div
                                                className={[
                                                    "h-full w-full rounded-full",
                                                    "flex items-center justify-center",
                                                    iconBg,
                                                    "transition-transform duration-300 ease-out",
                                                    "group-hover:scale-110",
                                                    "will-change-transform cursor-pointer",
                                                ].join(" ")}
                                                aria-hidden="true"
                                            >
                                                <i className={`pi ${icon} text-lg sm:text-xl`} />
                                            </div>
                                        </div>


                                        {/* text */}
                                        <div className="mt-4 w-40 text-center space-y-1">
                                            <p className="text-sm font-medium leading-tight">
                                                {company}
                                            </p>
                                            <p className="text-xs text-gray-600 leading-tight">
                                                {role}
                                            </p>
                                            <p className="text-[11px] text-gray-600">
                                                {period}
                                            </p>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    <div className="md:hidden text-xs text-gray-500 mt-1">
                        Swipe to view timeline →
                    </div>
                </div>
            </div>
        </div>
    );
}
