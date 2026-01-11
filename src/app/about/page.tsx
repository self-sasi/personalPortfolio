import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ImageCard } from "@/components/ui/image-card";
import {
  BookOpenIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  HeartIcon,
  MapPinIcon,
  SparklesIcon,
  User,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="grid grid-cols-12 pt-8 gap-4">
      <div className="col-span-12 md:col-span-8 lg:col-span-6">
        <Card className="bg-primary-mint text-primary-mint-foreground h-full">
          <CardHeader>
            <CardTitle>Me</CardTitle>
            <CardAction>
              <User />
            </CardAction>
          </CardHeader>
          <CardContent className="flex-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ex. Neque doloremque unde, dolore explicabo id voluptates inventore dolores, impedit eum cumque maxime vitae odio quas cupiditate! Rem repellat deleniti consequatur voluptas id? Error ea voluptatum repellendus perspiciatis facilis qui quas? Assumenda nesciunt sapiente, voluptates libero facilis asperiores repellat numquam!
          </CardContent>
        </Card>
      </div>

      <div className="col-span-6 md:col-span-4 lg:col-span-3">
        <ImageCard imageSrc="/images/misc/mrbean.jpg"></ImageCard>
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
            <Card className="h-full p-0 bg-primary-grassy text-primary-grassy-foreground rounded-t-none">
              <div className="flex-1 h-full">
                <img className="w-full md:max-h-25" src={"/images/misc/bob-pants.png"} />
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="col-span-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui asperiores quis explicabo neque, saepe blanditiis maxime natus. Blanditiis, nulla beatae?
      </div>

      <div className="col-span-12 md:col-span-6">
        <Card className="h-full overflow-hidden p-0">
        <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/track/0umfaFH9whLN1JwyGw8ZyL?utm_source=generator" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="eager"></iframe>
        </Card>
      </div>
    </div>
  );
}
