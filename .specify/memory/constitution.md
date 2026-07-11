<!--
SYNC IMPACT REPORT:
- Version change: [Unratified Template] -> 1.0.0
- List of modified principles:
  * [PRINCIPLE_1_NAME] -> I. Static React & Tailwind Web Runtime
  * [PRINCIPLE_2_NAME] -> II. High-Fidelity Luxury Showcase Aesthetics
  * [PRINCIPLE_3_NAME] -> III. Modular Structural Code Parsing
  * [PRINCIPLE_4_NAME] -> IV. Flawless Mobile-First Responsiveness
  * [PRINCIPLE_5_NAME] -> V. Strict Performance & Asset Optimization
- Added sections:
  * Section 2: Technology Stack Constraints
  * Section 3: Development Workflow & Quality Gates
- Removed sections: None
- Templates requiring updates:
  * .specify/templates/plan-template.md (✅ updated - reviewed and verified compatible)
  * .specify/templates/spec-template.md (✅ updated - reviewed and verified compatible)
  * .specify/templates/tasks-template.md (✅ updated - reviewed and verified compatible)
  * .specify/templates/checklist-template.md (✅ updated - reviewed and verified compatible)
- Follow-up TODOs: None (All placeholders successfully resolved)
-->

# Portfolio Constitution

## Core Principles

### I. Static React & Tailwind Web Runtime
The application MUST be built as a high-performance static web application leveraging React and Tailwind CSS.
- **Pure Client-Side Runtime**: All application routing and page logic must run entirely in the browser. Server-side rendering (SSR) or server-based route handlers are prohibited.
- **Utility-First Styling**: All styling must be declared via Tailwind CSS utility classes. Custom CSS rules are disallowed unless defined inside the tailwind.config file as theme extensions or design system tokens.
- **Rationale**: Elevates build efficiency, facilitates seamless static hosting on CDNs, and guarantees styling consistency across components.

### II. High-Fidelity Luxury Showcase Aesthetics
The user interface MUST deliver a premium, immersive digital experience inspired by high-end property developers and elite design agency portfolios.
- **High-Contrast Dark Aesthetic**: Use deep background colors (slate, zinc, obsidian) paired with luxurious, high-contrast accents (e.g., brushed gold, warm bronze, or platinum) and precise 1px borders.
- **Sleek Typography & Grid**: Implement modern geometric font pairings (such as Inter, Outfit, or Playfair Display) with deliberate letter-spacing and strong asymmetrical layouts.
- **Dynamic Motion**: All interactive elements (hover states, nav links, project cards) must use smooth, fluid transition states and subtle animations to feel reactive and premium.
- **Rationale**: Visual excellence and rich, responsive design systems build immediate trust and capture user attention.

### III. Modular Structural Code Parsing
React components MUST remain highly modular and decoupled from raw content data.
- **Data-Driven Architecture**: Content data (e.g., biography, project details, resume items) must be parsed from structured local data stores (JSON, YAML, or markdown files) rather than hardcoded in React TSX/JSX nodes.
- **Modular Decomposition**: Complex layouts must be split into single-responsibility, reusable sub-components (e.g., Carousel, MetricCard, Accordion) to prevent monolithic component files.
- **Semantic Markup**: Ensure parsed content maps to correct semantic HTML5 tags (e.g., section, article, nav, header) for SEO and accessibility.
- **Rationale**: Modular separation of layout and data simplifies maintenance, enables rapid content modification, and prevents spaghetti rendering code.

### IV. Flawless Mobile-First Responsiveness
The application MUST provide a fluid, responsive user experience across all device form factors.
- **Mobile-First Breakpoints**: Utilize Tailwind CSS responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`) systematically to adapt grids, container flex directions, padding sizes, and text scales.
- **Touch & Gesture Standards**: Click targets on mobile viewports must be at least 44x44px, and scrollable lists must support native touch inertia. Horizontal overflow layout breakage is strictly prohibited.
- **Rationale**: Over 50% of web traffic originates from mobile devices; layouts must degrade gracefully without losing semantic clarity or visual fidelity.

### V. Strict Performance & Asset Optimization
High-fidelity animations and assets MUST NOT compromise website loading performance.
- **Lazy Loading**: Showcase images, dynamic components, and off-screen assets must be lazy-loaded to prevent blocking the initial paint of the DOM.
- **Vector Assets & WebP**: Use vector SVGs for iconography and logos. Raster images must be compressed and formatted in modern web formats (e.g., WebP) before check-in.
- **Rationale**: Quick page speed is vital for search engine indexing (SEO) and user retention.

## Technology Stack Constraints
The project is strictly restricted to the following static technology stack:
- **Framework**: React.js packaged with Vite for fast HMR and compilation.
- **Styling**: Tailwind CSS configured with custom theme extensions (luxurious colors, smooth transitions).
- **Iconography**: Lucide React or inline customized SVG components.
- **Hosting**: Static web server environments (GitHub Pages, Netlify, or Vercel) with no active server-side process requirement.

## Development Workflow & Quality Gates
- **Cross-Viewport Testing**: Developers must test modifications on mobile (360px), tablet (768px), and desktop (1440px) viewports before submitting code.
- **Content Parsing Check**: Verification is required to ensure all content additions are processed via modular data parsers and do not bypass data-component boundaries.
- **Zero-Error Build**: Running `npm run build` must complete without compiler, linter, or syntax warnings.

## Governance
- **Supremacy**: This Constitution represents the absolute guidelines for the design, architecture, and technology stack of the Portfolio project. No styling libraries outside of Tailwind CSS may be introduced.
- **Amendment Procedure**: Modifications to this document require a MINOR version bump if altering core guidelines, and a PATCH version bump for formatting/wording corrections. Updates must increment the version below.
- **Compliance Review**: All spec, plan, and task documents created by SpecKit must be validated against the rules defined in this Constitution.

**Version**: 1.0.0 | **Ratified**: 2026-07-12 | **Last Amended**: 2026-07-12
