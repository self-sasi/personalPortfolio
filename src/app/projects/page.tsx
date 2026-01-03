import { ProjectDisplayCard } from "@/components/ui/project-display-card";

const PROJECTS = [
  {
    title: "Monkey Interpretter",
    subtitle: "Generative gradients + motion",
    body: "I built this to explore how far you can push CSS gradients and subtle motion before it becomes distracting. The goal was a background system that feels alive but stays readable for real UI.",
    imageSrc: "https://picsum.photos/200/300",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    color: "aqua",
    href: "/projects/fluid-gradient-flow",
    horizontal: false,
    reversed: false
  },
  {
    title: "Neon Dashboard",
    subtitle: "Analytics UI with a clean data story",
    body: "The motivation here was to practice presenting dense metrics without overwhelming the user. I focused on hierarchy, whitespace, and fast navigation patterns so you can scan and act quickly.",
    imageSrc: "https://picsum.photos/id/237/200/300",
    tech: ["React", "shadcn/ui", "Recharts"],
    color: "lavender",
    href: "/projects/neon-dashboard",
    horizontal: true,
    reversed: false
  },
  {
    title: "Playful Landing Page",
    subtitle: "High-conversion layout experiments",
    body: "I wanted to iterate on a landing page system where sections snap into place, CTA buttons feel responsive, and the visuals remain consistent across screen sizes. This became a mini design system.",
    imageSrc: "https://picsum.photos/id/250/200/300",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    color: "red",
    href: "/projects/playful-landing",
    horizontal: true,
    reversed: true
  },
  {
    title: "Playful Landing Page",
    subtitle: "High-conversion layout experiments",
    body: "I wanted to iterate on a landing page system where sections snap into place, CTA buttons feel responsive, and the visuals remain consistent across screen sizes. This became a mini design system.",
    imageSrc: "https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    color: "yellow",
    href: "/projects/playful-landing",
    horizontal: false,
    reversed: false
  },
] as const;

export default function Home() {
  return (
    <div className="pt-8">
      <div className="grid grid-cols-12 gap-6">
        {PROJECTS.map((project, index) => (        
          <div key={index} className={`${project.horizontal ? "md:col-span-8" : "md:col-span-4"} col-span-12`}>
            <ProjectDisplayCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}
