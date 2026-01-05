import { ProjectDisplayCard } from "@/components/ui/project-display-card";
import { PROJECTS } from "@/constants/projects";

export default function Home() {
  return (
    <div className="pt-8">
      <div className="grid grid-cols-12 gap-6">
        {PROJECTS.map((project, index) => {
          const colSpan =
            project.horizontal && project.xl
              ? "md:col-span-12"
              : project.horizontal
              ? "md:col-span-8"
              : "md:col-span-4";

          return (
            <div key={index} className={`${colSpan} col-span-12 animate-in ${index % 2 ? 'slide-in-from-right-4' : 'slide-in-from-left-4'} duration-500`}>
              <ProjectDisplayCard {...project} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
