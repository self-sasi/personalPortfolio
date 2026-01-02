import { AboutCard } from "@/components/ui/about-card";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12  pt-8">
        <div className="col-span-12">
          <AboutCard></AboutCard>
        </div>
      </div>
    </div>
  );
}
