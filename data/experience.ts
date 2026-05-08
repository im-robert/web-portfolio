
import { Experience } from "@/interfaces";

export const experiences: Experience[] = [
  {
    id: "ondp",
    company: "Oficina Nacional de Defensa Pública",
    role: {
      en: "Software Developer",
      es: "Desarrollador de software"
    },
    period: {
      en: "Dec 2025 — Present",
      es: "Dic 2025 — Presente"
    },
    startYear: 2025,
    endYear: null,
    description: {
      en: "Development of the ONDP case management system for secretaries, coordinators, and public defenders, serving approximately 500 users nationwide.",
      es: "Desarrollo del sistema de gestión de casos de la ONDP para uso de secretarias, coordinadores y defensores públicos para uso nacional de un aproximado de 500 usuarios."
    },
    achievements: {
      en: [
        "Developed and implemented a pilot test for the case management system across Santo Domingo offices.",
        "Implemented performance testing (soak, stress, spike, load) using K6.",
        "Implemented an N-tier architecture (Data, Domain, Services, Testing, Presentation).",
      ],
      es: [
        "Desarrollo e implementación de piloto de pruebas del sistema de gestión de casos para oficinas en Santo Domingo.",
        "Implementación de pruebas de rendimiento (soak, strees, spike, load) con K6 en el sistema.",
        "Implementación de arquitectura en capas (Data, Domain, Services, Testing, Presentación).",
      ]
    },
    technologies: [".NET Framework 4.8", "C#", "SQL Server", "K6", "Entity Framework"],
  },
  {
    id: "bpd",
    company: "Banco Popular Dominicano via NEORIS",
    role: {
      en: "Software QA Tester",
      es: "Software QA Tester"
    },
    period: {
      en: "Feb 2025 — Nov 2025",
      es: "Feb 2025 — Nov 2025"
    },
    startYear: 2025,
    endYear: 2025,
    description: {
      en: "ETL testing, data integrity validation, creation of test cases and plans, and automated testing.",
      es: "Pruebas de ETL, integridad de data, creación de test cases y test plans, pruebas automatizadas"
    },
    achievements: {
      en: [
        "ETL Datamarts in production for the new core migration (Loan migration phase).",
        "Creation of test cases with management and tracking via Jira - Zephyr.",
        "Creation of test plans for the certificate migration phase.",
      ],
      es: [
        "Datamarts de ETLs en producción para migración al nuevo core (Fase de migración de préstamos)",
        "Creación de casos de prueba y administración y seguimiento a través de Jira",
        "Creación de planes de prueba para la fase de migración de certificados",
      ]
    },
    technologies: ["SAS Enterprise", "Cypress", "Oracle", "Jira - Zephyr", "Test Cases"],
  },
  {
    id: "bhd",
    company: "Banco BHD",
    role: {
      en: "Programming Intern",
      es: "Pasante programador"
    },
    period: {
      en: "Sep 2024 — Dec 2024",
      es: "Sep 2024 — Dic 2024"
    },
    startYear: 2024,
    endYear: 2024,
    description: {
      en: "Initial professional role as an intern for the BAW unit at Banco BHD, working on the PEGA system.",
      es: "Primer rol profesional como pasante para la célula de BAW en el banco BHD, trabajando en el sistema de PEGA"
    },
    achievements: {
      en: [
        "Delivered user stories for the BAW unit.",
        "Obtained Pega Certified Systems Architect certification."
      ],
      es: [
        "Entrega de historias de usuario para la célula de BAW",
        "Certificado de Pega Certified Systems Architect"
      ]
    },
    technologies: ["Pega Systems", "Azure DevOps", "Pega Dev Studio"],
  },
];
