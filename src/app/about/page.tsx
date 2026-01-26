import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ImageCard } from "@/components/ui/image-card";
import {
  Glasses,
  GraduationCapIcon,
  User,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="grid grid-cols-12 pt-8 gap-4">
      <div className="col-span-12 md:col-span-8 lg:col-span-6">
        <Card className="bg-primary-mint text-primary-mint-foreground h-full">
          <CardHeader>
            <CardTitle className="text-base!">Me</CardTitle>
            <CardAction>
              <User />
            </CardAction>
          </CardHeader>
          <CardContent className="flex-1 text-sm!">
            I am a fourth-year Computer Science student at the University of Calgary.
            <br /><br />
            I enjoy building things, especially products that have real impact, which is why I often work on personal projects. I have also recently started contributing to open-source projects.
            <br /><br />
            I also like building collaboratively; I believe there is a lot people can learn in group settings, so feel free to reach out for collaborations (I consider myself friendly).
            <br /><br />
            Outside of school and work, I enjoy eating and playing <a target="_blank" rel="noopener noreferrer" href="https://royaleapi.com/player/8GLGVL988" className="underline text-blue-800 transition-colors duration-150 hover:text-blue-500">Clash Royale</a>.
          </CardContent>
        </Card>
      </div>

      <div className="col-span-6 md:col-span-4 lg:col-span-3 [&_div]:h-full">
        <ImageCard imageSrc="/images/misc/luffy-smiling.gif"></ImageCard>
      </div>

      <div className="col-span-6 md:col-span-4 lg:col-span-3">
        <div className="grid h-full w-full grid-cols-12 gap-4">
          <div className="col-span-12 animate-in slide-in-from-top-5 duration-500">
            <Card className="gap-0 bg-primary-yellow text-black rounded-b-none h-full">
              <CardHeader>
                <CardTitle>Education</CardTitle>
                <CardAction>
                  <GraduationCapIcon />
                </CardAction>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mt-2 text-sm">
                  B.Sc. Computer Science · University of Calgary
                </p>
                <p className="text-xs">2022 — 2027</p>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-12 animate-in slide-in-from-top-5 duration-300">
            <Card className="h-full p-0 rounded-t-none">
              <div className="flex-1 relative h-full">
                <img
                  src="/images/misc/bob-pants.png"
                  className="h-full w-full object-cover"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-8 lg:col-span-6" >
        <Card className="bg-primary-tangerine text-primary-tangerine-foreground h-full">
          <CardHeader>
            <CardTitle className="text-base!">Current Focus</CardTitle>
            <CardAction>
              <Glasses />
            </CardAction>
          </CardHeader>
          <CardContent className="flex-1 text-sm!">
            These days I am taking a particular interest in Cloud Computing related topics like Container Orchestration (and more). By this I do not mean that I am interested in learning how to use such technology; rather, I am interested in learning how it does what it does.
          </CardContent>
        </Card>
      </div>

      <div className="col-span-12 md:col-span-6">
        <Card className="h-full overflow-hidden p-0">
          <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/track/0umfaFH9whLN1JwyGw8ZyL?utm_source=generator" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="eager"></iframe>
        </Card>
      </div>
    </div>
  );
}
