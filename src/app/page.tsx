import { AboutCard } from "@/components/ui/about-card";
import { ExperienceCard } from "@/components/ui/experience-card";
import { ImageCard } from "@/components/ui/image-card";
import { SkillCard } from "@/components/ui/skill-card";
import { ProjectCard } from "@/components/ui/project-card";
import { SocialCard } from "@/components/ui/social-card";
import { ThemeCard } from "@/components/ui/theme-card";
import { OpenSourceCard } from "@/components/ui/os-card";
import { ContribCard } from "@/components/ui/contrib-card";

export default function Home() {

  return (
        <div className="grid grid-cols-12 pt-8 gap-4">

          {/* about me card */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 animate-in slide-in-from-left-5 duration-500">
            <AboutCard />
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <ContribCard />
          </div>

          {/* social media card  */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="grid w-full grid-cols-12 gap-4">
              <div className="col-span-12 animate-in slide-in-from-right-5 duration-300">
                <SkillCard />
              </div>
              <div className="col-span-12 animate-in slide-in-from-right-5 duration-500">
                <SocialCard />
              </div>
            </div>
            
          </div>

          <div className="col-span-6 md:col-span-2 lg:col-span-2 animate-in slide-in-from-left-5 duration-700">
            <ImageCard imageSrc="/images/misc/mrbean.jpg"/>
          </div>

          <div className="col-span-6 md:hidden">
            <ImageCard imageSrc="/images/misc/wow.gif"/>
          </div>

          <div className="col-span-12 md:col-span-12 lg:col-span-8">
            <ProjectCard />
          </div>

          <div className="hidden md:block md:col-span-2 lg:col-span-2 animate-in slide-in-from-right-5 duration-700">
            <ImageCard imageSrc="/images/misc/wow.gif"/>
          </div>

          {/* /images/misc/wow.gif */}

          <div className="col-span-12 md:col-span-3 lg:col-span-3 animate-in slide-in-from-left-5 duration-900">
            <OpenSourceCard />
          </div>

          <div className="col-span-12 md:col-span-3 lg:col-span-3 animate-in slide-in-from-bottom-5 duration-500">
            <ThemeCard />
          </div>

          <div className="col-span-12 md:col-span-12 lg:col-span-6 animate-in slide-in-from-right-5 duration-900">
            <ExperienceCard />
          </div>
        </div>
  );
}
