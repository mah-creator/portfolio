# Data Payloads Contract

This contract defines the schema and file names for the static JSON content that drives the luxury portfolio UI.

## Profile Payload Structure (`src/data/profile.json`)

```json
{
  "name": "Alex Mercer",
  "title": "Lead UI Architect",
  "subtitle": "Engineering luxury digital experiences and high-performance web systems.",
  "bio": "I design and build elite front-end systems focusing on modular rendering, micro-animations, and clean structural architectures. With over 8 years of experience, I bridge the gap between creative visual designs and pixel-perfect technical code.",
  "email": "alex.mercer@example.com",
  "githubUrl": "https://github.com/alex-mercer",
  "linkedinUrl": "https://linkedin.com/in/alex-mercer",
  "resumeUrl": "/assets/resume.pdf"
}
```

---

## Projects Payload Structure (`src/data/projects.json`)

```json
[
  {
    "id": "luxury-real-estate",
    "title": "Aurelia Residences Showcase",
    "subtitle": "High-end luxury real estate presentation portal",
    "category": "Architectural UI",
    "tags": ["React", "Tailwind CSS", "Vite"],
    "imageUrl": "/assets/projects/aurelia.webp",
    "description": "An interactive digital showroom built for a top-tier luxury property developer. The project highlights architectural renderings using high-contrast slate layouts and brushed gold borders.",
    "deliverables": [
      "Sub-2s page load speed via lazy loading off-screen assets",
      "Interactive 3D model viewport integrations",
      "Perfect Lighthouse responsiveness score"
    ],
    "projectUrl": "https://example.com/aurelia"
  }
]
```

---

## Experience Payload Structure (`src/data/experience.json`)

```json
[
  {
    "id": "exp-1",
    "company": "Horizon Luxury Group",
    "role": "Principal Frontend Engineer",
    "location": "Remote",
    "period": "Jan 2024 - Present",
    "achievements": [
      "Spearheaded design system unification reducing UI bug tickets by 45%",
      "Architected optimized static web assets saving 30% bandwidth overhead",
      "Developed fully responsive client portal supporting 50k+ active users"
    ]
  }
]
```

---

## Skills Payload Structure (`src/data/skills.json`)

```json
[
  {
    "category": "Frontend Engineering",
    "items": [
      { "name": "React.js", "level": 95 },
      { "name": "TypeScript", "level": 90 },
      { "name": "Tailwind CSS", "level": 95 }
    ]
  },
  {
    "category": "Design & Systems",
    "items": [
      { "name": "Figma Integration", "level": 85 },
      { "name": "Design Tokens", "level": 90 }
    ]
  }
]
```
