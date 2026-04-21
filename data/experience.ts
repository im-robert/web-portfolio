import { Experience } from "@/interfaces";

export const experiences: Experience[] = [
  {
    id: "ondp",
    company: "Oficina Nacional de Defensa Pública",
    role: "Senior Full Stack Developer",
    period: "Jan 2022 — Present",
    startYear: 2022,
    endYear: null,
    description:
      "Design and development of high-availability judicial management systems, serving more than 200 public defenders nationwide.",
    achievements: [
      "Successful migration of legacy system to .NET 8, reducing API response times by 60%.",
      "Design and implementation of a decoupled microservices architecture using Azure Service Bus.",
      "Development of an automated reporting engine that reduced manual team workload by 40%.",
    ],
    technologies: [".NET 8", "C#", "SQL Server", "Azure", "Docker"],
  },
  {
    id: "techcorp",
    company: "TechCorp Solutions",
    role: "Backend Developer",
    period: "Mar 2020 — Dec 2021",
    startYear: 2020,
    endYear: 2021,
    description:
      "Development of RESTful APIs and integration services for B2B e-commerce platforms.",
    achievements: [
      "Built an integration layer with 15+ external payment providers using the Adapter pattern.",
      "Optimized critical SQL queries, improving system performance by 35% under load.",
      "Implemented a CI/CD pipeline with Azure DevOps that reduced deployment time from 2 hours to 15 minutes.",
    ],
    technologies: [".NET 6", "C#", "PostgreSQL", "Azure DevOps", "Redis"],
  },
  {
    id: "datasoft",
    company: "DataSoft S.R.L.",
    role: "Junior .NET Developer",
    period: "Jun 2018 — Feb 2020",
    startYear: 2018,
    endYear: 2020,
    description:
      "First professional role focused on developing internal web applications and reporting modules for the financial sector.",
    achievements: [
      "Developed an audit module that recorded all critical system operations with full traceability.",
      "Created internal dashboards with ASP.NET MVC and Entity Framework for the finance team.",
      "Participated in the design of a normalized database schema that supported system growth.",
    ],
    technologies: ["ASP.NET MVC", "C#", "SQL Server", "Entity Framework", "jQuery"],
  },
];
