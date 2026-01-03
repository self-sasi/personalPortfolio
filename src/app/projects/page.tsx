import { ProjectDisplayCard } from "@/components/ui/project-display-card";

const PROJECTS = [
  {
    title: "Monkey Interpretter",
    subtitle: "An interpreter for a toy programming language called monkey",
    body: "An interpreter for a toy programming language, implemented from the ground up in Go. I started it after I couldn’t get into my university’s compilers course, which is why I decided to learn the subject independently through this project.",
    imageSrc: "/mi-cover.png",
    tech: ["Go"],
    color: "aqua",
    href: "https://github.com/self-sasi/monkey-interpreter",
    horizontal: false,
    reversed: false
  },
  {
    title: "TaleThread",
    subtitle: "Analytics UI with a clean data story",
    body: "A social media platform that allows users to collaboratively write stories and poems. \n\nUsers can start new threads, contribute to existing ones, rate contributions, and make friends with fellow writers. The platform encourages creativity and community engagement among writers of all levels. \n\nAdditional features include personalized writing prompts, genre-specific communities, and integration with AI tools for inspiration.",
    imageSrc: "/tt-logo.png",
    tech: ["React", "shadcn/ui", "Recharts"],
    color: "indigo-vivid",
    href: "/projects/neon-dashboard",
    horizontal: true,
    reversed: false
  },
  {
    title: "Loda Page",
    subtitle: "ma ka loda",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, quam ducimus odio eveniet expedita minus sapiente harum voluptatem repellat modi.",
    imageSrc: "https://picsum.photos/id/250/200/300",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    color: "red",
    href: "/projects/playful-landing",
    horizontal: true,
    reversed: true
  },
  // {
  //   title: "Playful Landing Page",
  //   subtitle: "High-conversion layout experiments",
  //   body: "I wanted to iterate on a landing page system where sections snap into place, CTA buttons feel responsive, and the visuals remain consistent across screen sizes. This became a mini design system.",
  //   imageSrc: "https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto",
  //   tech: ["Next.js", "TypeScript", "Tailwind"],
  //   color: "yellow",
  //   href: "/projects/playful-landing",
  //   horizontal: false,
  //   reversed: false
  // },
    {
    title: "Hee Hee Hee Haw",
    subtitle: "ok",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, quam ducimus odio eveniet expedita minus sapiente harum voluptatem repellat modi.",
    imageSrc: "https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    color: "mint",
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
