# Projects

## TaskMind
**AI-powered Agile productivity tool and collaborative task management planner.**
*Category: AI Productivity*
**Tech Stack:** Laravel 13, PHP 8.4, laravel/ai SDK, Alpine.js, Tailwind CSS v4, Chart.js
[View on GitHub](https://github.com/mah-creator/smart-task)

TaskMind is a high-performance productivity tool bridging traditional Agile workflows (Sprints, Story Points, checklists) with agentic AI planning. Users converse with a database-backed AI agent that generates a structured Agile roadmap (JSON schema), which can then be committed directly to the database in a single transaction. The platform calculates fractional story points based on subtask completion to render precise, staircase-free burndown charts using Chart.js.

**Key Deliverables:**
- Structured AI output validation using laravel/ai JsonSchema contracts
- Fractional story point burndown charts with Alpine.js & Chart.js integration
- Headless authentication with WebAuthn (Passkeys) and 2FA via Laravel Fortify

---

## ClientPortal Workspace
**Secure role-based workspace bridging freelancers and clients with real-time sync.**
*Category: Full-Stack Web App*
**Tech Stack:** React, TypeScript, .NET 9.0, SignalR, SQLite, Tailwind CSS, shadcn/ui
[View on GitHub](https://github.com/mah-creator/Client-Portal-Web-App)

ClientPortal is a decoupled single-page workspace for freelancers and clients to streamline project execution, task management, and asset delivery. Features role-based workspaces for Admins, Freelancers, and Customers. Integrates real-time SignalR notifications for progress tracking and task status shifts, and provides a secure file uploads registry with GUID-based filename obfuscation.

**Key Deliverables:**
- Bi-directional real-time communication via ASP.NET SignalR Hubs
- Secure GUID-hashed file upload pipeline and localized storage system
- Role-based React routing checks avoiding flash frames or flickering on reload

---

## WriteAI Co-Pilot
**Blogging platform with streaming AI editor integration and semantic search.**
*Category: AI Content Platform*
**Tech Stack:** Laravel v13.7, PHP 8.4, laravel/ai SDK, Tailwind CSS v4, Pusher, Alpine.js
[View on GitHub](https://github.com/mah-creator/elancer-write-ai-project)

WriteAI (DevLog) is a blogging and publishing engine enhanced with agentic AI writing capabilities. Features a stateful AI co-pilot streaming XML-like tags (`<title>`, `<write>`, `<rewrite>`, `<replace>`) into the Markdown editor via a JS fetch delta-parser. Implements automatic SEO metadata extraction, cross-driver hybrid vector search with relational SQL fallback, and multi-tenant Eloquent scopes for writers.

**Key Deliverables:**
- Delta-aware streaming parser supporting malformed XML chunks in the editor
- Dynamic database-independent vector search wrapper (MySQL/PostgreSQL)
- Contextual multi-tenant global scopes protecting queued console workers

---

## Shaghal Recruitment
**AI-enhanced recruitment platform and job board with dual-portal analytics.**
*Category: Job Board Platform*
**Tech Stack:** Laravel 12, PHP 8.2, MariaDB, OpenAI API, Cloudflare R2, Pest PHP
[View on GitHub](https://github.com/mah-creator/job-board)

Shaghal is a monorepo job board platform containing a client-facing portal (job-app) and a backoffice dashboard (job-backoffice) sharing a DRY Eloquent data layer packaged as a local Composer library. Features automated resume parsing and matching scores via OpenAI, stateless cloud storage integration using Cloudflare R2, and real-time dashboard analytics like job conversion rates.

**Key Deliverables:**
- Shared-package monorepo architecture loaded via local Composer path mapping
- OpenAI Suitability Score analysis and PDF file extraction services
- State-free cloud file pipeline utilizing S3-compatible R2 storage

---

## HealthcareBookings API
**High-performance medical scheduling and clinic management backend API.**
*Category: Backend API*
**Tech Stack:** C#, .NET 9.0, EF Core 9.0, CQRS, MediatR, FluentValidation, PostgreSQL
[View on GitHub](https://github.com/mah-creator/HealthcareBookings)

HealthcareBookings is a scheduling and clinic discovery API designed around Clean Architecture and CQRS principles. It implements atomic rescheduling with database savepoints (ensuring transactional safety against double-booking) and geolocation clinic search using the Haversine formula. It features stateful JWT token validation with active session revocation (immediate server-side invalidation on logout).

**Key Deliverables:**
- Clean Architecture & CQRS pattern orchestrations via MediatR handlers
- Atomic rescheduling transactions using EF Core Database Savepoints
- Stateful JWT logout middleware interceptor validating active tokens in DB

---

## Applicant Tracking System
**A Microsoft Power Platform solution matching CVs to job descriptions.**
*Category: Enterprise Automation*
**Tech Stack:** Power Apps, Power Automate, Dataverse, Microsoft Lists, Low-code
[View on GitHub](#)

An enterprise-grade Applicant Tracking System built on the Microsoft Power Platform. It matches candidate CVs against job descriptions to streamline the hiring pipeline. Power Automate flows triggered from Microsoft Lists drive the matching process and update structured candidate data directly within Dataverse.

**Key Deliverables:**
- Automated CV screening and matching workflows via Power Automate
- Custom candidate management dashboards designed with Power Apps
- Enterprise relational data modeling utilizing Microsoft Dataverse

---

## Enterprise Network Lab
**Network infrastructure and virtualization lab with VLANs, firewalls, and VMs.**
*Category: Infrastructure & Ops*
**Tech Stack:** Fortinet, Cisco, VLANs, Hyper-V, VMware, Linux, Windows Server
[View on GitHub](#)

A comprehensive network engineering and infrastructure lab involving PoE Layer 2 / Layer 3 switch configuration (VLANs, subnetting) via CLI and web interface, Fortinet firewall policies, Wi-Fi access points, structured cabling, and UPS administration. It includes a robust virtualization environment running Windows Server, Linux, and Windows client VMs across Hyper-V and VMware Workstation.

**Key Deliverables:**
- Layer 2/3 switch configuration and secure inter-VLAN routing
- Fortinet firewall policy implementation and network security administration
- Hypervisor provisioning for multi-tenant and cross-platform OS environments
