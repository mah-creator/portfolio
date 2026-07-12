# Project Context: HealthcareBookings (Backend API)

HealthcareBookings is a professional, high-performance scheduling and clinic management backend API built using **.NET 9.0 Core Web API** and **Entity Framework Core**. It is designed using **Clean Architecture** and **CQRS (Command Query Responsibility Segregation)** principles to provide a scalable and robust foundation for medical clinic scheduling, patient bookings, and geolocation-based clinic discovery.

---

## 1. Project Overview & Value Proposition
In modern healthcare, matching patients with doctors and managing schedules across various clinics is highly complex. **HealthcareBookings** simplifies this coordination by providing a centralized scheduling system.

### Core Value Proposition
- **Seamless Scheduling:** Empowers patients to find available time slots, book appointments, and dynamically reschedule using transactional safety rules.
- **Geolocation Discovery:** Enables patients to locate and sort nearby clinics using actual geographical distance (Haversine formula).
- **Multi-tenant Role Control:** Provides distinct access controls for **Patients** (booking and favorites), **Doctors** (schedule viewing and session reviews), and **Clinic Admins** (creating schedules and managing clinic staff profiles).
- **Session Security & Invalidation:** Integrates stateful JWT token validation to permit instantaneous, server-side session revocation (logout) on typically stateless JWTs.

---

## 2. Core Tech Stack & Architecture

The application is structured following **Clean Architecture (Domain-Driven Design aligned)** to ensure high testability, separation of concerns, and ease of maintainability.

```
HealthcareBookings.sln
 │
 ├── HealthcareBookings.Domain (Core entities, constants, exceptions, contracts)
 ├── HealthcareBookings.Application (Commands, queries, validators, middleware, business logic)
 ├── HealthcareBookings.Infrastructure (EF Core DbContext, migrations, seeders, third-party extensions)
 └── HealthcareBookings.API (Presentation layer: HTTP controllers, routing, Swagger, program configurations)
```

### Tech Stack Details
*   **Language & Runtime:** C# on .NET 9.0
*   **API Presentation:** ASP.NET Core Web API with Attribute Routing
*   **Database ORM:** Entity Framework Core 9.0 (with SQLite provider for development and PostgreSQL support via Npgsql)
*   **CQRS Orchestration:** MediatR 13.0
*   **Request Validation:** FluentValidation 12.0
*   **Identity & Authentication:** ASP.NET Core Identity with custom JWT-based bearer authentication and active token tracking.
*   **Advanced EF Extensions:** `Z.EntityFramework.Extensions.EFCore` for bulk database operations.

---

## 3. Key Features & Functionality

### 📅 Advanced Scheduling & Appointment Management
*   **Atomic Rescheduling with Database Savepoints:** Rescheduling an appointment requires removing the existing slot assignment and acquiring a new one. To prevent data loss or double-booking, the system executes this inside a database transaction using **Savepoints** (`BeforeRescheduling`). If booking the new time slot fails, the transaction rolls back to the savepoint, leaving the patient's original appointment untouched.
*   **Overlap & Double-Booking Prevention:** Custom verification logic (`IsOverlap`) ensures that patients cannot book overlapping schedules, and database unique constraints block duplicate time slots (`ScheduleID`, `StartTime`, `EndTime`) or multiple bookings for the same doctor.

### 📍 Geolocation Search & Clinic Discovery
*   **Haversine Formula Implementation:** The application implements the great-circle distance algorithm (`GeoUtils.DistanceKm`) in C# to calculate patient-to-clinic distance using latitude and longitude coordinates.
*   **Nearby Filters:** Exposes a dedicated `nearby` endpoint (`api/clinics/nearby`) returning clinics within a strict 3.0 km range, complete with calculated travel times (e.g., walking/driving estimates).

### 🔒 Stateful JWT Token Revocation
*   **Token Verification Middleware:** While standard JWTs are stateless, the backend implements `PersistedTokenValidatorMiddleware`. On every authorized request, the middleware extracts the token identifier (`token_name` claim) and verifies it against the active tokens stored in the Identity database.
*   **Instant Logout:** When a user calls the `logout` endpoint, the server invalidates the security stamp and deletes the token association in the database, immediately invalidating the JWT for any future API requests.

### 🛠️ CQRS Pattern Implementation
*   All business logic is isolated into MediatR **Commands** (writes) and **Queries** (reads), separating request handling from controllers. For example:
    *   `GetClinicsQuery` & `GetDoctorsQuery` retrieve lists of resources with query parsing and dynamic sorting.
    *   `CreatePatientProfileCommand` & `RegisterDoctorCommand` manage write operations, fully validated by FluentValidation validators before execution.

---

## 4. Database & Data Models

The database schema is mapped using Fluent API inside `AppDbContext.cs`. It defines a complex relational tree of patients, doctors, schedules, and clinics.

```
+--------------------------------------------------------------------+
|                         DATABASE ENTITIES                          |
+--------------------------------------------------------------------+
  [User (IdentityUser)]
         │
         ├─── ProfileInformation (Profile details)
         ├─── ClinicAdmin (Clinic administrator role association)
         ├─── Doctor (Doctor profile details, clinic ID, category ID)
         └─── Patient (Patient profile details, locations list)

  [Clinic]
         ├─── Location (Owned properties: Latitude, Longitude, Address)
         ├─── ClinicAdmin (1-to-1 management link)
         └─── Doctors (1-to-N roster)

  [Doctor]
         ├─── Category (1-to-N specialization description)
         ├─── Schedules (1-to-N doctor date availability configuration)
         └─── Appointments (1-to-N booking records)

  [Schedule]
         └─── TimeSlots (1-to-N available chunks: StartTime, EndTime, IsFree)

  [Patient]
         ├─── FavoriteDoctors (N-to-N joins)
         ├─── FavoriteClinics (N-to-N joins)
         ├─── Locations (1-to-N saved address locations)
         └─── Appointments (1-to-N bookings)

  [Appointment]
         ├─── TimeSlot (1-to-1 active scheduled slot reservation)
         └─── AppointmentReview (1-to-1 feedback text and rating score)
```

### Main Entities
1.  **User (`IdentityUser`):** The core security entity. Extends ASP.NET Identity with navigation properties to specialized role records and `ProfileInformation` (storing name, gender, DOB, and image paths).
2.  **Patient:** Repositories for patient records. Collects saved physical locations, favorite lists, and history of booked appointments.
3.  **Doctor:** Profile detail including biography, experience years, aggregated ratings, clinic mapping, and categories.
4.  **Clinic:** Represents a physical facility with geographical coordinates (latitude and longitude), physical address, category, and an associated administrator.
5.  **Schedule & TimeSlot:** Represents calendar configuration. A `Schedule` is bound to a single date and doctor. It contains multiple individual `TimeSlots` representing 10+ minute appointment periods (`IsFree` boolean tracks availability).
6.  **Appointment & AppointmentReview:** Connects a patient, doctor, and a specific time slot. Stores state (`Upcoming`, `Completed`, `Canceled`) and review scores.

---

## 5. Key Technical Challenges Overcome

### 🚀 Cartesian Product Mitigation (SQL Join Explosion)
**Challenge:** Loading a patient's dashboard profile requires loading their details, favorite clinics (with locations), favorite doctors (with profile, clinic, and categories), active appointments, and coordinates. Eagerly loading this entity graph using standard Entity Framework `.Include()` chains would generate SQL statements with multiple nested JOINs. This leads to a massive Cartesian product, degrading query performance and bloating application memory.
**Solution:** Configured `QuerySplittingBehavior.SplitQuery` inside the DbContext initialization in `ServiceCollectionExtension.cs`. This instructs Entity Framework Core to retrieve related lists using multiple distinct SELECT queries instead of a single mammoth join query, significantly decreasing latency and memory consumption.

### 🌐 InMemory Geolocation Filtering for SQLite Compatibility
**Challenge:** The geolocation lookup (`api/clinics/nearby`) requires filtering databases based on computed distances (using trigonometric Haversine math). Since SQLite and some SQL databases do not natively support complex math functions (like `Acos` and `Sin`) without registering custom SQL functions, querying these items directly at the database level is highly provider-dependent and complex to maintain.
**Solution:** Structured the query by leveraging deferred execution. The query filters clinics by basic search criteria, pulls them into application memory using `.AsEnumerable()` and `.AsNoTracking()`, and applies the Haversine distance limit in-memory. Because the number of clinics is reasonable, this approach balances database independence with optimal performance.

### 🔐 Implementing Stateful JWT Logout
**Challenge:** JSON Web Tokens (JWT) are stateless by design, making it difficult to force a logout or session invalidation on the server before the token naturally expires.
**Solution:** Developed a custom hybrid session check. During login, a unique `token_name` GUID is attached to the JWT claims and also stored in the `AspNetUserTokens` table. A custom `PersistedTokenValidatorMiddleware` interceptor checks every request; if the token is not present in the database (or has been deleted during logout), the request is rejected immediately with a `401 Unauthorized` status.
