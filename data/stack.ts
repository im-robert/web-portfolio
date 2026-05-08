
import { TechItem, TechCategory } from "@/interfaces";

export const techCategories: TechCategory[] = [
  "Language",
  "Framework",
  "Database",
  "Architecture",
  "Tools"
];

export const techStack: TechItem[] = [
  // Languages
  { name: "C#", category: "Language", level: 95 },
  { name: "SQL", category: "Language", level: 90 },
  { name: "JavaScript", category: "Language", level: 85 },

  // Frameworks
  { name: ".NET Framework 4.8", category: "Framework", level: 95 },
  { name: "ASP.NET Core", category: "Framework", level: 95 },
  { name: "Entity Framework", category: "Framework", level: 90 },
  { name: "Cypress", category: "Framework", level: 80 },
  { name: "K6", category: "Framework", level: 85 },

  // Databases
  { name: "SQL Server", category: "Database", level: 90 },
  { name: "Oracle", category: "Database", level: 85 },
  { name: "Supabase", category: "Database", level: 80 },


  // Architecture
  { name: "Clean Architecture", category: "Architecture", level: 90 },
  { name: "Page Object Model (POM)", category: "Architecture", level: 95 },
  { name: "MVC", category: "Architecture", level: 80 },


  // Tools
  { name: "Jira - Zephyr", category: "Tools", level: 85 },
  { name: "Azure DevOps", category: "Tools", level: 85 },
  { name: "Git", category: "Tools", level: 90 },
];
