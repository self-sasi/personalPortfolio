import { ProjectDisplayCard } from "@/components/ui/project-display-card";

const PROJECTS = [
  {
    title: "Fluid Gradient Flow",
    subtitle: "Generative gradients + motion",
    body: "I built this to explore how far you can push CSS gradients and subtle motion before it becomes distracting. The goal was a background system that feels alive but stays readable for real UI.",
    imageSrc: "https://cdn.shadcnstudio.com/ss-assets/components/card/image-1.png?height=280&format=auto",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    color: "lavender",
    href: "/projects/fluid-gradient-flow",
    horizontal: false,
    reversed: false
  },
  {
    title: "Neon Dashboard",
    subtitle: "Analytics UI with a clean data story",
    body: "The motivation here was to practice presenting dense metrics without overwhelming the user. I focused on hierarchy, whitespace, and fast navigation patterns so you can scan and act quickly.",
    imageSrc: "https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto",
    tech: ["React", "shadcn/ui", "Recharts"],
    color: "indigo-vivid",
    href: "/projects/neon-dashboard",
    horizontal: false,
    reversed: false
  },
  {
    title: "Playful Landing Page",
    subtitle: "High-conversion layout experiments",
    body: "I wanted to iterate on a landing page system where sections snap into place, CTA buttons feel responsive, and the visuals remain consistent across screen sizes. This became a mini design system.",
    imageSrc: "https://cdn.shadcnstudio.com/ss-assets/components/card/image-3.png?height=280&format=auto",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    color: "yellow",
    href: "/projects/playful-landing",
    horizontal: false,
    reversed: false
  },
  {
    title: "Playful Landing Page",
    subtitle: "High-conversion layout experiments",
    body: "I wanted to iterate on a landing page system where sections snap into place, CTA buttons feel responsive, and the visuals remain consistent across screen sizes. This became a mini design system.",
    imageSrc: "https://cdn.shadcnstudio.com/ss-assets/components/card/image-4.png?height=280&format=auto",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    color: "red",
    href: "/projects/playful-landing",
    horizontal: true,
    reversed: false
  },
  {
    title: "Playful Landing Page",
    subtitle: "High-conversion layout experiments",
    body: "I wanted to iterate on a landing page system where sections snap into place, CTA buttons feel responsive, and the visuals remain consistent across screen sizes. This became a mini design system.",
    imageSrc: "https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    color: "yellow",
    href: "/projects/playful-landing",
    horizontal: true,
    reversed: true
  },
] as const;



export default function Home() {
  return (
    <div className="pt-8">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4">
            <ProjectDisplayCard {...PROJECTS[1]} />
        </div>
        <div className="col-span-8">
            <ProjectDisplayCard {...PROJECTS[3]} />
        </div>
        <div className="col-span-8">
            <ProjectDisplayCard {...PROJECTS[4]} />
        </div>
      </div>
    </div>
  );
}
