import { ExperienceCard } from "@/components/ui/experience-card";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12  pt-8">
        <div className="col-span-12">
          <ExperienceCard></ExperienceCard>
        </div>
      </div>
    </div>
  );
}
