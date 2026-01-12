export type Experience = {
    role: string
    company: string,
    location: string,
    period: string
    description: string
    technologies: string[],
    icon: string,
    iconBg: string
}

export type ExerienceMiniVeiw = {
    role: string, // minified version of the actual role, for example, "Software Dev Engineer" -> "SDE"
    company: string, // the company name as-is
    period: string // period as-is
    icon: string,
    iconBg: string,
    ringBg?: string; // tailwind class for the ring color per node (optional)
}