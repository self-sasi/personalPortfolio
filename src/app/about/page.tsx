import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpenIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  HeartIcon,
  MapPinIcon,
  SparklesIcon,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="grid grid-cols-12 pt-8">
      <Card className="col-span-12 bg-primary-yellow text-primary-yellow-foreground">
        <CardHeader>
          <CardTitle className="text-2xl">About Me</CardTitle>
          <CardDescription className="text-primary-yellow-foreground/70">
            A quick, visual snapshot of who I am and what I care about.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                Hi, I’m Your Name — a computer science student and full-stack
                developer who loves designing calm, modern experiences. I enjoy
                building products that feel simple on the surface and thoughtful
                underneath.
              </p>
              <p>
                Lately I’ve been focused on product engineering, motion in UI,
                and systems that scale. I’m happiest when I’m learning fast,
                shipping often, and collaborating with kind people.
              </p>
              <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wide">
                {[
                  "Full-stack",
                  "TypeScript",
                  "Product UX",
                  "Design systems",
                  "Performance",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-primary-yellow-foreground/20 bg-primary-yellow-foreground/10 px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  label: "Location",
                  value: "Calgary, Canada",
                  icon: MapPinIcon,
                },
                {
                  label: "Role",
                  value: "CS Student",
                  icon: GraduationCapIcon,
                },
                {
                  label: "Focus",
                  value: "Web apps + UX",
                  icon: SparklesIcon,
                },
                {
                  label: "Availability",
                  value: "Open to internships",
                  icon: BriefcaseIcon,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-primary-yellow-foreground/20 bg-primary-yellow-foreground/10 p-3"
                >
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-primary-yellow-foreground/70">
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </div>
                  <p className="mt-2 text-sm font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <div className="rounded-xl border border-primary-yellow-foreground/20 bg-primary-yellow-foreground/10 p-4">
              <div className="flex items-center gap-2 text-sm font-medium">
                <BookOpenIcon className="h-4 w-4" />
                Education
              </div>
              <p className="mt-2 text-sm">
                B.Sc. Computer Science · University of Calgary
              </p>
              <p className="text-xs text-primary-yellow-foreground/70">
                2022 — 2026 · Data Structures, HCI, Systems Design
              </p>
            </div>
            <div className="rounded-xl border border-primary-yellow-foreground/20 bg-primary-yellow-foreground/10 p-4">
              <div className="flex items-center gap-2 text-sm font-medium">
                <HeartIcon className="h-4 w-4" />
                Interests
              </div>
              <p className="mt-2 text-sm">
                Design systems, developer tooling, data storytelling, and
                startup culture.
              </p>
            </div>
            <div className="rounded-xl border border-primary-yellow-foreground/20 bg-primary-yellow-foreground/10 p-4">
              <div className="flex items-center gap-2 text-sm font-medium">
                <SparklesIcon className="h-4 w-4" />
                Now
              </div>
              <p className="mt-2 text-sm">
                Building a personal analytics dashboard and refining my portfolio
                projects.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
