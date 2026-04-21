import { TechItem } from "@/interfaces";

export const techStack: TechItem[] = [
  // Languages
  { name: "C#", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "SQL", category: "Language" },

  // Frameworks
  { name: ".NET 8 / 9", category: "Framework" },
  { name: "ASP.NET Core", category: "Framework" },
  { name: "Entity Framework", category: "Framework" },
  { name: "Next.js", category: "Framework" },

  // Databases
  { name: "SQL Server", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Redis", category: "Database" },

  // Cloud
  { name: "Microsoft Azure", category: "Cloud" },
  { name: "Azure Service Bus", category: "Cloud" },
  { name: "Azure DevOps", category: "Cloud" },

  // Architecture
  { name: "Microservicios", category: "Architecture" },
  { name: "Clean Architecture", category: "Architecture" },
  { name: "Domain-Driven Design", category: "Architecture" },
  { name: "CQRS", category: "Architecture" },

  // DevOps
  { name: "Docker", category: "DevOps" },
  { name: "CI/CD Pipelines", category: "DevOps" },
  { name: "Git", category: "DevOps" },
];

export const techCategories: TechItem["category"][] = [
  "Language",
  "Framework",
  "Database",
  "Cloud",
  "Architecture",
  "DevOps",
];
