import { Project, ProjectMiniView } from "@/types/project";

export const PROJECTS : Project[] = [
  {
    title: "Monkey Interpretter",
    subtitle: "An interpreter for a toy programming language called monkey",
    body: "An interpreter for a toy programming language, implemented from the ground up in Go. I started it after I couldn’t get into my university’s compilers course, which is why I decided to learn the subject independently through this project.",
    imageSrc: "/images/mi/mi-cover.png",
    tech: ["Go"],
    color: "aqua",
    href: "https://github.com/self-sasi/monkey-interpreter",
    horizontal: false,
    reversed: false,
    xl: false,
  },
  {
    title: "Mnemosyne",
    subtitle: "A database backup utility that can backup and restore any DB",
    body: "A command-line tool for backing up and restoring databases, currently under active development.\n\nIt aims to make saving database data simple, reliable, and automated across different database types.\n\nThe focus is on ease of use, clear feedback, and safe handling of large amounts of data.",
    imageSrc: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D",
    tech: ["Go", "Cobra", "Viper"],
    color: "grassy",
    href: "https://github.com/self-sasi/mnemosyne",
    horizontal: true,
    reversed: true,
    xl: false,
  },
  {
    title: "Orbit",
    subtitle: "A web app for meaningfully connecting with people you meet in real life",
    body: "Orbit is a mobile-first web app designed to help people connect more easily in real-life social settings, such as events, campuses, or meetups. It allows users to share a personal profile through a QR code, so meeting someone new is as simple as scanning and viewing each other’s profiles.\n\nAfter connecting, Orbit highlights shared interests and experiences between both people, making it easier to start and continue meaningful conversations.\n\nThe app includes built-in moderation that flags inappropriate language, and offers AI-assisted onboarding where users can chat or speak with an AI to set up their profile effortlessly.",
    imageSrc: "/images/orbit/landpage.png",
    tech: ["Next.js", "TypeScript", "tRPC", "Docker", "Tailwind", "AWS S3", "Clerk", "Gemini", "PostgreSQL", "Prisma"],
    color: "indigo-vivid",
    href: "/projects/playful-landing",
    horizontal: true,
    reversed: true,
    xl: true,
  },
  {
    title: "TaleThread",
    subtitle: `"Finish the story" party game as a social media concept`,
    body: "A social media platform that allows users to collaboratively write stories and poems. \n\nUsers can start new threads, contribute to existing ones, rate contributions, and make friends with fellow writers. The platform encourages creativity and community engagement among writers of all levels. \n\nAdditional features include personalized writing prompts, genre-specific communities, and integration with AI tools for inspiration.",
    imageSrc: "/images/talethread/tt-logo.png",
    tech: ["Angular", "Django", "SQLite", "PrimeNg", "OpenAI", "Primeflex", "Tailwind"],
    color: "default",
    href: "/projects/neon-dashboard",
    horizontal: true,
    reversed: false,
    xl: false,
  },
  {
    title: "Melodebug",
    subtitle: "A java agent that instruments application performance and sonifies it in real time",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, quam ducimus odio eveniet expedita minus sapiente harum voluptatem repellat modi.",
    imageSrc:
      "https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto",
    tech: ["Java", "OpenTelmetry"],
    color: "red",
    href: "/projects/playful-landing",
    horizontal: false,
    reversed: false,
    xl: false,
  },
  {
    title: "ClubSync",
    subtitle: "Platform for university club operations",
    body: "A web application designed for university clubs and student organizations to manage activities, organize events, and engage members in one place.\n\nIt allows clubs to create and manage their space, assign roles to members, and share updates with their community.\n\nAlso supports event creation, RSVPs, and attendance tracking, and includes discussion chats with built-in moderation to keep interactions organized and respectful.",
    imageSrc: "/images/cs/disc.jpg",
    tech: ["Angular", "Node.js", "Express", "PrimeNg", "Primeflex", "MySQL"],
    color: "mint",
    href: "/projects/playful-landing",
    horizontal: true,
    reversed: false,
    xl: true,
  },
  {
    title: "Root Node",
    subtitle: "A student mentorship and networking platform",
    body: "Root Node is a platform designed for students at the University of Calgary to create profiles, find mentors or mentees, advertise their skills, and connect with others in similar fields.\n\nThe idea is to allow users to showcase their portfolios on a common hub, facilitating collaboration and networking among students and professionals.",
    imageSrc:
      "/images/rn/main-page.png",
    tech: ["Angular", "Express", "MongoDB", "PrimeNg"],
    color: "lavender",
    href: "/projects/playful-landing",
    horizontal: false,
    reversed: false,
    xl: false,
  },
]

export function getMiniView(project: Project) : ProjectMiniView {
    return {
        imageSrc: project.imageSrc,
        imageAlt: project.imageAlt,
        title: project.title
    }
}