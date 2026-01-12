import { Badge } from "@/components/ui/badge";
import { Experience } from "@/types/experience";
import { Building, Building2, Building2Icon, Calendar, MapPin, Store } from "lucide-react";

export type TimelineProps = {
  experiences: Experience[]
}

export default function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="max-w-(--breakpoint-sm) mx-auto py-3 md:py-8 px-6">
      <div className="relative ml-4">
        {/* Timeline line */}
        <div className="absolute left-0 inset-y-0 border-l-2" />

        {experiences.map(
          (
            { iconBg, icon, company, description, period, location, technologies, role },
            index
          ) => (
            <div key={index} className="relative pl-10 pb-12 last:pb-0">
              {/* Timeline Icon */}
              <div className={`absolute left-px -translate-x-1/2 h-9 w-9 flex items-center justify-center rounded-full ${iconBg} ring-8 ring-background`}>
                {/* <Building2Icon /> */}
                <i className={`pi ${icon}`}></i>
              </div>

              {/* Content */}
              <div className="pt-2 sm:pt-1 space-y-3">
                <p className="text-base font-medium">{company}</p>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.01em]">
                    {role}
                  </h3>
                  <div className="flex items-center gap-8 mt-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{period}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>{location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground text-pretty">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-full"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
