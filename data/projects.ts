
import { Project } from "@/interfaces";

export const projects: Project[] = [
  {
    id: "sgj",
    name: {
      en: "Judicial Management System",
      es: "Sistema de Gestión Judicial"
    },
    description: {
      en: "Centralized platform for managing cases, files, and hearings for the national public defense.",
      es: "Plataforma centralizada para la gestión de casos, expedientes y audiencias para la defensa pública nacional."
    },
    stack: [".NET 8", "C#", "SQL Server", "Azure", "Clean Architecture", "EF Core"],
    category: "Backend",
    featured: true,
    repoUrl: "https://github.com/im-robert/judicial-management-system"
  },
  {
    id: "lux-state",
    name: {
      en: "Property Management System",
      es: "Lux State | Sistema de gestión de propiedades en venta"
    },
    description: {
      en: "Comprehensive management system for properties for sale or rent, featuring an administrative panel, authentication, and database integration.",
      es: "Sistema completo de gestión de propiedades en venta o a la renta, con panel administrativo, autenticación, base de datos, etc."
    },
    stack: ["Next.js", "Supabase", "TypeScript", "JWT"],
    category: "Fullstack",
    featured: true,
    repoUrl: "https://github.com/im-robert/Lux-State"
  },
  {
    id: "ejercicio-integracion",
    name: {
      en: "API Project and Validations",
      es: "Proyecto API y validaciones con C#"
    },
    description: {
      en: "Development of a RESTful API in .NET with custom rule engines for data transformation and validation.",
      es: "Desarrollo de una API RESTful en .NET con motores de reglas personalizados para la transformación y validación de datos."
    },
    stack: [".NET"],
    category: "Backend",
    featured: true,
    repoUrl: "https://github.com/im-robert/Ejercicio-Integracion"
  },
  {
    id: "crud-csharp",
    name: {
      en: "C# CRUD with MVC",
      es: "Proyecto CRUD en C# con MVC"
    },
    description: {
      en: ".NET ecosystem project focused on implementing the MVC pattern and software architecture.",
      es: "Proyecto en el ecosistema de .NET para trabajar el patrón MVC y arquitectura"
    },
    stack: [".NET 8", "HTML/CSS"],
    category: "Backend",
    repoUrl: "https://github.com/im-robert/CRUD_Csharp"
  },
];
