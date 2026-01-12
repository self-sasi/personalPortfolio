import { Experience } from "@/types/experience";

export const EXPERIENCES : Experience[] = [
    {
        role: "Software Development Engineer Intern",
        company: "Amazon",
        location: "Vancouver",
        period: "May 2025 - Sept 2025",
        description: "Engineered an integration of Amazon’s service instrumentation framework (Disco) with OpenTelemetry (open-source observability tool), reducing onboarding time for new application frameworks (e.g., Spring, OkHttp) from 4 weeks to 3 days.",
        technologies: ["Java", "OpenTelemetry", "awslabs/disco", "RxJava", "Netty"],
        icon: "zon"
    },
    {
        role: "Software Engineer Intern",
        company: "Ontario Power Generation",
        location: "Toronto",
        period: "May 2024 - Jan 2025",
        description: "Built a web application leveraging LLM models saving the company $250,000 per year by enhancing data insights and analysis efficiency through advanced AI techniques to interpret and display key office data.",
        technologies: ["Angular", "PrimeNg", "ASP .NET", "Azure", "Docker", "Kafka"],
        icon: "zon"
    },
    {
        role: "Research Assistant",
        company: "University of Calgary",
        location: "Calgary",
        period: "May 2023 - Sept 2023",
        description: "i really enjoyed",
        technologies: ["react", "npm"],
        icon: "zon"
    },
]