// import Timeline from "@/components/timeline";
import { SkillCard } from "@/components/ui/skill-card";
import Timeline from "@/components/ui/timeline";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12  pt-8">
        <div className="col-span-12">
          {/* <Timeline></Timeline> */}
          <Timeline />
        </div>
      </div>
    </div>
  );
}
