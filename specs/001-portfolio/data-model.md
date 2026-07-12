# Data Model Specification: Luxury Portfolio Showcase

This document specifies the structured schemas for the local data stores. All content is stored in static JSON files located in `src/data/` and loaded dynamically.

## TypeScript Interfaces

### 1. Profile Data Schema (`src/data/profile.json`)

Represents the personal and professional profile details.

```typescript
interface Profile {
  name: string;          // Full name (e.g., "Alexander Mercer")
  title: string;         // Professional title (e.g., "Lead Interface Architect")
  subtitle: string;      // Hero subheader line
  bio: string;           // Multi-paragraph biography
  email: string;         // Contact email address
  githubUrl: string;     // Link to GitHub profile
  linkedinUrl: string;   // Link to LinkedIn profile
  resumeUrl: string;     // Relative or absolute link to PDF resume file
}
```

**Validation Rules**:
- `email` must be a valid email format if defined.
- `githubUrl`, `linkedinUrl`, and `resumeUrl` must be valid URL formats or valid relative file paths.

---

### 2. Project Data Schema (`src/data/projects.json`)

Represents individual portfolio showcase items.

```typescript
interface Project {
  id: string;            // Unique alphanumeric identifier (e.g., "project-001")
  title: string;         // Project name
  subtitle: string;      // Brief, high-level summary
  category: string;      // Categorization (e.g., "AI Productivity", "Backend API")
  tags: string[];        // Array of technical tags (e.g., ["Laravel", "React", "TypeScript"])
  images: string[];      // Array of local paths to project snapshots (stored in public/projects/)
  description: string;   // Full multi-paragraph project description
  deliverables: string[];// List of concrete deliverables (e.g., ["AI resume parsing logic", "SignalR Hub push notifications"])
  projectUrl?: string;   // Optional link to live project or source code repository
}
```

**Validation Rules**:
- `id` must be unique across all projects.
- `tags` array must contain at least 1 and no more than 8 elements.
- `images` array must contain at least 1 image and all paths must resolve to valid paths under the `/public/projects` directory.

---

### 3. Experience Data Schema (`src/data/experience.json`)

Represents chronological work history timeline items.

```typescript
interface Experience {
  id: string;            // Unique identifier (e.g., "exp-001")
  company: string;       // Company name
  role: string;          // Job title/position
  location: string;      // Physical location or "Remote"
  period: string;        // Date range string (e.g., "Oct 2024 - Present")
  achievements: string[];// Bullet points detailing key metrics and outcomes
}
```

**Validation Rules**:
- `achievements` array must contain between 1 and 5 descriptive bullet points.

---

### 4. Skills Data Schema (`src/data/skills.json`)

Represents professional skills categorized for the visual grid layout.

```typescript
interface SkillGroup {
  category: string;      // Category name (e.g., "Engineering", "Design System")
  items: SkillItem[];    // List of skill details
}

interface SkillItem {
  name: string;          // Name of the skill (e.g., "TypeScript")
  level: number;         // Visual proficiency scale 1-100 for bar/pie graphs (optional)
}
```

**Validation Rules**:
- `level` must be an integer between 1 and 100 inclusive (if provided).
