import { ProjectCard } from "@/components/ui/project-card";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12  pt-8">
        <div className="col-span-12">
          <ProjectCard></ProjectCard>
        </div>
      </div>
    </div>
  );
}
