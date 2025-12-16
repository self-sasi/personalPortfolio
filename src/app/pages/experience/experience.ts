import { Component } from '@angular/core';
import { Card } from "../../components/card/card";

@Component({
  selector: 'app-experience',
  imports: [Card],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  readonly timeline = [
    {
      id: 'aws-intern',
      period: '2024 — Present',
      title: 'Cloud Engineering Intern',
      company: 'Amazon Web Services',
      summary:
        'Building deployment pipelines and observability dashboards for customer-facing workloads. Focused on trimming latency, automating rollbacks, and tightening IaC practices across teams.',
      tags: ['AWS CDK', 'Terraform', 'Grafana'],
      logo: '☁️',
    },
    {
      id: 'campus-dev',
      period: '2023 — 2024',
      title: 'Full-Stack Developer',
      company: 'Campus Innovation Lab',
      summary:
        'Led a team of three to ship a scheduling app for student orgs. Implemented role-based access, built a timeline view, and introduced CI checks that cut regressions by 40%.',
      tags: ['Angular', 'Node', 'PostgreSQL'],
      logo: '🧭',
    },
    {
      id: 'ta',
      period: '2022 — 2023',
      title: 'Teaching Assistant',
      company: 'Data Structures',
      summary:
        'Hosted weekly review sessions, created debugging guides, and built a suite of unit tests that students used to validate assignments before submission.',
      tags: ['Java', 'JUnit', 'Mentoring'],
      logo: '🎓',
    },
    {
      id: 'oss',
      period: '2021 — 2022',
      title: 'Open Source Contributor',
      company: 'Community Projects',
      summary:
        'Contributed bug fixes and docs to UI libraries, improved accessibility for form components, and collaborated asynchronously with maintainers around the world.',
      tags: ['TypeScript', 'Accessibility', 'Docs'],
      logo: '🌐',
    },
  ];
}
