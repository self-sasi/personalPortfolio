import type { SkillGroup } from "@/types/skills";

const TypeScriptLogo = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="24"
      height="24"
      viewBox="0 0 48 48"
    >
      <rect width="36" height="36" x="6" y="6" fill="#1976d2"></rect>
      <polygon
        fill="#fff"
        points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
      ></polygon>
      <path
        fill="#fff"
        d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
      ></path>
    </svg>
);

const JavaScriptLogo = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="24"
      height="24"
      viewBox="0 0 48 48"
    >
      <path fill="#f7df1e" d="M6,42V6h36v36H6z"></path>
      <path
        fill="#000001"
        d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"
      ></path>
    </svg>
);

const ReactLogo = () => (
  <svg viewBox="0 0 256 256" className="h-4 w-4 stroke-current fill-none">
    <circle cx="128" cy="128" r="18" fill="currentColor" />
    <ellipse cx="128" cy="128" rx="90" ry="36" strokeWidth="14" />
    <ellipse
      cx="128"
      cy="128"
      rx="90"
      ry="36"
      strokeWidth="14"
      transform="rotate(60 128 128)"
    />
    <ellipse
      cx="128"
      cy="128"
      rx="90"
      ry="36"
      strokeWidth="14"
      transform="rotate(120 128 128)"
    />
  </svg>
);

const AngularLogo = () => (
  <svg viewBox="0 0 250 250" className="h-4 w-4 fill-current">
    <polygon points="125,0 0,45 19,198 125,250 231,198 250,45" />
    <path d="M125 35L45 190h32l17-42h62l17 42h32L125 35zm20 88h-40l20-50 20 50z" />
  </svg>
);

const TailwindLogo = () => (
  <svg viewBox="0 0 256 256" className="h-4 w-4 fill-current">
    <path d="M128 64c-32 0-52 16-64 48 12-16 26-22 42-18 9 2 16 8 23 15 11 11 24 24 59 24 32 0 52-16 64-48-12 16-26 22-42 18-9-2-16-8-23-15-11-11-24-24-59-24z" />
    <path d="M64 144c-32 0-52 16-64 48 12-16 26-22 42-18 9 2 16 8 23 15 11 11 24 24 59 24 32 0 52-16 64-48-12 16-26 22-42 18-9-2-16-8-23-15-11-11-24-24-59-24z" />
  </svg>
);

export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: "Languages",
    skills: [
      {
        text: "TypeScript",
        logo: <TypeScriptLogo />,
        bgClassName: "bg-blue-600",
        textClassName: "text-white",
      },
      {
        text: "JavaScript",
        logo: <JavaScriptLogo />,
        bgClassName: "bg-yellow-400",
        textClassName: "text-black",
      },
    ],
  },
  {
    name: "Frameworks",
    skills: [
      {
        text: "React",
        logo: <ReactLogo />,
        bgClassName: "bg-cyan-400",
        textClassName: "text-black",
      },
      {
        text: "Angular",
        logo: <AngularLogo />,
        bgClassName: "bg-red-500",
        textClassName: "text-white",
      },
    ],
  },
  {
    name: "Styling",
    skills: [
      {
        text: "Tailwind CSS",
        logo: <TailwindLogo />,
        bgClassName: "bg-sky-500",
        textClassName: "text-white",
      },
    ],
  },
];
