# Technical Research: Luxury Portfolio Showcase

## Decision 1: Build Tool and App Runtime

- **Decision**: Vite with React 18 and TypeScript.
- **Rationale**: Vite provides extremely fast Hot Module Replacement (HMR) and optimized rollup production bundles. TypeScript ensures data schema validation at compile time, eliminating runtime type crashes.
- **Alternatives considered**:
  - *Next.js*: Rejected. Next.js is server-first. The constitution mandates a pure static client-side runtime with zero active server dependencies.
  - *Create React App (CRA)*: Rejected. Deprecated, slow development builds, and lacks modern performance features.

## Decision 2: Styling and Theme System

- **Decision**: Tailwind CSS configured with a custom color palette extension.
- **Rationale**: The constitution mandates utility-first Tailwind CSS styling. Defining luxury theme extensions (such as obsidian, deep slate, and brushed gold) inside `tailwind.config.js` maintains design consistency.
- **Alternatives considered**:
  - *Styled Components / Emotion*: Rejected. Violates the constitution's styling rules which prohibit introducing extra CSS-in-JS libraries.
  - *Vanilla CSS*: Rejected. Slower to develop, prone to style bloat, and harder to enforce mobile-first rules uniformly.

## Decision 3: Content Storage and Data Parsing

- **Decision**: Local static JSON files imported directly via TypeScript.
- **Rationale**: JSON is natively supported by ES6 modules, allowing static bundle compilers to verify and bundle the data directly. It is fast, lightweight, and requires no external HTTP queries during initial load.
- **Alternatives considered**:
  - *Local YAML*: Rejected. Requires custom build configurations (Vite YAML plugins) which increases technical complexity.
  - *Headless CMS (e.g., Strapi, Sanity)*: Rejected. Creates an external dependency, slows page load times, and conflicts with the requirement for a completely self-contained static application.

## Decision 4: Animation and Motion

- **Decision**: Tailwind CSS native transition utilities combined with light CSS keyframe animations.
- **Rationale**: Keeps the runtime bundle size small and ensures smooth GPU-accelerated transitions. Hover scaling, card highlights, and layout fade-ins can all be achieved using simple CSS animations.
- **Alternatives considered**:
  - *Framer Motion*: Rejected. While powerful, it introduces external runtime scripts (~30KB gzipped) which goes against strict asset optimization guidelines when simple CSS animations can satisfy the showcase aesthetic.
