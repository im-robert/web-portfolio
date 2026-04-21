import { Project } from "@/interfaces";

export const projects: Project[] = [
  {
    id: "sgj",
    name: "Judicial Management System",
    description:
      "Centralized platform for managing cases, files, and hearings for the national public defense.",
    challenge:
      "Modernize a 10+ year legacy system with zero downtime, maintaining the integrity of millions of judicial records.",
    solution:
      "Incremental migration strategy using the Strangler Fig pattern, encapsulating the legacy system and gradually replacing modules with a hexagonal architecture in .NET 8.",
    stack: [".NET 8", "C#", "SQL Server", "Azure", "Clean Architecture", "EF Core"],
    category: "Backend",
    featured: true,
  },
  {
    id: "api-gateway",
    name: "Microservices API Gateway",
    description:
      "Centralized gateway for routing, authentication, and orchestration of 12+ internal microservices.",
    challenge:
      "Unify communication between heterogeneous services with different API contracts, ensuring security and observability.",
    solution:
      "Implementation of Ocelot as API Gateway with Circuit Breaker policies (Polly), centralized JWT authentication, and distributed logging with Azure Application Insights.",
    stack: [".NET 8", "Ocelot", "Polly", "Azure Service Bus", "Docker", "JWT"],
    category: "Backend",
    featured: true,
  },
  {
    id: "portal-integracion",
    name: "Data Integration Portal",
    description:
      "Full stack application for visualizing and managing data flows between government systems.",
    challenge:
      "Create an administrative interface that allowed non-technical users to monitor and resolve failures in integration pipelines.",
    solution:
      "Development of a SPA with Next.js as the frontend and a RESTful API in .NET as the backend, with a custom rules engine for data transformation.",
    stack: ["Next.js", "TypeScript", ".NET 8", "SQL Server", "Tailwind CSS", "Hangfire"],
    category: "Fullstack",
    featured: true,
  },
  {
    id: "etl-tributario",
    name: "Tax Reporting ETL",
    description:
      "Extraction, transformation, and load pipeline for automatic generation of monthly tax reports.",
    challenge:
      "Process and reconcile 500,000+ monthly financial records from 5 different sources with incompatible formats.",
    solution:
      "Design of a robust ETL pipeline with Hangfire for background tasks, layered data validation, and automatic email notifications in case of failures.",
    stack: [".NET 8", "Hangfire", "Dapper", "SQL Server", "Azure Blob Storage"],
    category: "Integrations",
  },
  {
    id: "notificaciones",
    name: "Push Notification Service",
    description:
      "High-availability microservice for sending multi-channel notifications (email, SMS, push).",
    challenge:
      "Ensure delivery of critical judicial notifications with a 99.9% SLA, even under unexpected load peaks.",
    solution:
      "Event-driven architecture with RabbitMQ, Outbox pattern to guarantee delivery, and exponential backoff retry strategy with circuit breaker.",
    stack: ["C#", ".NET 8", "RabbitMQ", "MassTransit", "SendGrid", "Twilio"],
    category: "Integrations",
  },
  {
    id: "auth-service",
    name: "Central Authentication Service",
    description:
      "Centralized identity server with SSO support and Active Directory integration.",
    challenge:
      "Unify authentication for 8 independent systems with different login mechanisms, without interrupting access for active users.",
    solution:
      "Implementation of IdentityServer with identity federation, support for OAuth 2.0 / OpenID Connect, and gradual migration of each system to the new provider.",
    stack: ["IdentityServer", ".NET 8", "Active Directory", "OAuth 2.0", "OpenID Connect"],
    category: "Backend",
  },
];
