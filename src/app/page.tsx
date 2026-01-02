import { AboutCard } from "@/components/ui/about-card";
import { ExperienceCard } from "@/components/ui/experience-card";
import { ImageCard } from "@/components/ui/image-card";
import { SkillCard } from "@/components/ui/skill-card";
import { ProjectCard } from "@/components/ui/project-card";
import { SocialCard } from "@/components/ui/social-card";
import { ThemeCard } from "@/components/ui/theme-card";
import { PhCard } from "@/components/ui/ph-card";

export default function Home() {

  return (
        <div className="grid grid-cols-12 pt-8 gap-4">

          {/* about me card */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <AboutCard />
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <ThemeCard />
          </div>

          {/* social media card  */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="grid w-full grid-cols-12 gap-4">
              <div className="col-span-12">
                <SkillCard />
              </div>
              <div className="col-span-12">
                <SocialCard />
              </div>
            </div>
            
          </div>

          <div className="col-span-12 md:col-span-2 lg:col-span-2">
            <ImageCard />
          </div>

          <div className="col-span-12 md:col-span-12 lg:col-span-8">
            <ProjectCard />
          </div>

          <div className="col-span-12 md:col-span-2 lg:col-span-2">
            <ImageCard />
          </div>

          <div className="col-span-12 md:col-span-3 lg:col-span-3">
            <PhCard />
          </div>

          <div className="col-span-12 md:col-span-3 lg:col-span-3">
            <ThemeCard />
          </div>

          <div className="col-span-12 md:col-span-12 lg:col-span-6">
            <ExperienceCard />
          </div>
        </div>
  );
}
