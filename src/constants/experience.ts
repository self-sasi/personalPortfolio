import { ExerienceMiniVeiw, Experience } from "@/types/experience";

export const EXPERIENCES: Experience[] = [
    {
        role: "Software Development Engineer Intern",
        company: "Amazon",
        location: "Vancouver",
        period: "May 2025 - Sept 2025",
        description: "Engineered an integration of Amazon’s service instrumentation framework (Disco) with OpenTelemetry (open-source observability tool), reducing onboarding time for new application frameworks (e.g., Spring, OkHttp) from 4 weeks to 3 days.",
        technologies: ["Java", "OpenTelemetry", "awslabs/disco", "RxJava", "Netty", "okhttp5"],
        icon: "pi-amazon text-white",
        iconBg: "bg-primary-tangerine"
    },
    {
        role: "Software Engineer Intern",
        company: "Ontario Power Generation",
        location: "Toronto",
        period: "May 2024 - Jan 2025",
        description: "Built a web application leveraging LLM models saving the company $250,000 per year by enhancing data insights and analysis efficiency through advanced AI techniques to interpret and display key office data.",
        technologies: ["Angular", "PrimeNg", "ASP .NET", "Azure", "Docker", "Kafka"],
        icon: "pi-bolt text-white",
        iconBg: "bg-green-600"
    },
    {
        role: "Research Assistant",
        company: "University of Calgary",
        location: "Calgary",
        period: "May 2023 - Sept 2023",
        description: "Developed an application to simulate qubits and used it to study the conditional min-entropy of qubits, leading to the derivation of a closed-form result based on computational analysis of quantum physics models.",
        technologies: ["Vue", "Flask", "Qiskit", "CVXPY", "SymPy", "SciPy"],
        icon: "pi-graduation-cap text-yellow-400",
        iconBg: "bg-red-600"
    },
]

export const MINI_EXPERIENCES: ExerienceMiniVeiw[] = [
    {
        role: "RA",
        company: "UofC",
        period: "Summer '23",
        icon: "pi-graduation-cap text-yellow-400",
        iconBg: "bg-red-600",
        ringBg: "ring-red-300/40"
    },
    {
        role: "SWE Intern",
        company: "OPG",
        period: "Summer & Fall '24",
        icon: "pi-bolt text-white",
        iconBg: "bg-green-600",
        ringBg: "ring-green-300/40"
    },
    {
        role: "SDE Intern",
        company: "Amazon",
        period: "Summer '25",
        icon: "pi-amazon text-white",
        iconBg: "bg-primary-tangerine",
        ringBg: "ring-orange-300/40"
    },
]