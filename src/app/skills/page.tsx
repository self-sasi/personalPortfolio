import { SkillCard } from "@/components/ui/skill-card";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12  pt-8">
        <div className="col-span-12">
          <SkillCard></SkillCard>
        </div>
      </div>
    </div>
  );
}
