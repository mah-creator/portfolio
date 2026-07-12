# Feature Specification: Luxury Portfolio Showcase

**Feature Branch**: `001-portfolio`

**Created**: 2026-07-12

**Status**: Approved

**Input**: User description: "Build a luxury portfolio website using static React and Tailwind CSS"

## Clarifications

### Session 2026-07-12
- **Q**: Should the sliding gallery support touch-swipe gestures on mobile, or are manual navigation buttons sufficient? → **A**: Touch-swipe gesture support + manual left/right buttons.
- **Q**: What image display should be shown inside the project details modal overlay? → **A**: An independent sliding gallery (carousel) showing all snapshots inside the modal.
- **Q**: When opening the details modal, should the gallery start at index 0 or sync with the card's active slide index? → **A**: Sync the slide index so the modal opens on the same active snapshot index from the card.
- **Q**: How should the sliding gallery controls behave if a project has only one snapshot? → **A**: Hide arrows and indicator dots if a project has only one snapshot.
- **Q**: When should snapshots in the sliding gallery be loaded to optimize performance? → **A**: Eagerly load the first snapshot of all projects; lazy-load subsequent snapshots in the background or upon hover/interaction.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Luxury Portfolio Landing Page (Hero & Project Showcase Grid) (Priority: P1)

A visitor lands on the site and is welcomed by a premium, high-contrast dark hero section that establishes the professional brand. Beneath the hero, they explore a grid of showcase cards representing key projects.

**Why this priority**: It is the foundational landing page. It delivers the core portfolio value of introducing the creator and displaying projects.

**Independent Test**:
- Open the application in the browser.
- Verify the landing page shows a slate/obsidian theme with warm gold accents.
- Hover over project cards to confirm smooth visual scale-up and subtle gradient shifts.

**Acceptance Scenarios**:
1. **Given** the user lands on the homepage, **When** the page loads, **Then** a prominent hero headline with Outfit/Playfair typography is displayed against a deep dark background.
2. **Given** the user is viewing the project showcase grid, **When** they hover over a project card, **Then** a 1px border transitions to brushed gold and a subtle micro-animation highlights the card.

---

### User Story 2 - Project Detail Overlay (Priority: P2)

A visitor clicks on a project card to view more detailed content (description, deliverables, tech tags, and a sliding gallery of snapshots) in a smooth, high-fidelity overlay modal.

**Why this priority**: It allows deep-dive content consumption without page reloads, keeping the user in a fluid, single-page application context.

**Independent Test**:
- Click on any project card in the grid.
- Verify that a modal overlay slides or fades in smoothly.
- Interact with the sliding gallery inside the modal (arrows, dots, swipe gestures) to cycle snapshots.
- Close the modal and verify the user is returned to the project grid without losing scroll position.

**Acceptance Scenarios**:
1. **Given** the user is looking at the project showcase grid, **When** they click on a project card, **Then** a modal opens displaying the project's full description, deliverables, role, and an independent sliding gallery showing all snapshots initialized to the same active slide index as the card's gallery.
2. **Given** the project details modal is open, **When** the user clicks the close button or outside the modal, **Then** the modal closes and returns focus to the project card.

---

### User Story 3 - Interactive Resume and Professional Timeline (Priority: P3)

A potential client or employer navigates to the professional background section to view work history and structured skills.

**Why this priority**: Vital for credibility, showing credentials and expertise in a highly readable, interactive layout.

**Independent Test**:
- Scroll to or select the timeline section.
- Hover over skill categories or timeline nodes to trigger subtle status highlighting.

**Acceptance Scenarios**:
1. **Given** the user is in the resume/experience section, **When** they read the timeline, **Then** experience items are organized chronologically with clear tags for role, company, and dates.
2. **Given** the skills section, **When** the user views the categories, **Then** skills are clearly grouped and presented in a clean grid.

---

## Edge Cases

- **Missing Data Source**: How does the UI handle cases where a project or timeline entry is missing optional fields in the JSON source? The parser MUST fallback gracefully to default strings or omit empty sections without throwing rendering errors.
- **Single Snapshot Projects**: Projects with only one image snapshot (e.g., Booking) MUST NOT show left/right navigation arrows or indicator dots on the card or in the details modal.
- **Large Screen and Ultra-wide Viewports**: Ensure layouts are capped at a maximum width (e.g., `max-w-7xl`) and centered on larger viewports to prevent massive horizontal stretches.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST render all dynamic content (hero bio, projects list, resume timeline, skill items) parsed from local static JSON data files.
- **FR-002**: The styling MUST use Tailwind CSS with slate/obsidian backgrounds, brushed gold or warm bronze accent colors, and precise 1px borders.
- **FR-003**: The typography MUST use Inter for body text and Outfit or Playfair Display for headings.
- **FR-004**: The project showcase grid MUST display cards containing project title, a short subtitle, tags, and a sliding gallery (carousel) of project snapshots.
- **FR-005**: The system MUST implement mobile-responsive layouts that stack columns vertically on screens smaller than 768px.
- **FR-006**: All interactive components (cards, links, buttons) MUST feature transition effects with a duration of at least 200ms for hover states.
- **FR-007**: The sliding gallery inside the project card MUST support manual navigation controls (left/right buttons), pagination indicators (dots), and touch-swipe gestures (swipe left/right) on mobile/touch screens. All card-level slide interaction controls MUST stop event propagation to avoid triggering card details overlay modals.

### Key Entities *(include if feature involves data)*

- **Profile**: Contains personal details (name, title, bio, contact email, social links, resume download URL).
- **Project**: Represents a portfolio project containing id, title, subtitle, category, tags (array of strings), description, deliverables (array of strings), images (array of snapshot paths), and link.
- **Experience**: Represents a job or project in the work timeline, containing company, role, location, period (start and end dates), and bullet points (array of strings).
- **Skill**: Represents a professional skill grouping, containing category title and list of skill items.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Homepage loads and becomes interactive in under 1.5 seconds under simulated 3G networks.
- **SC-002**: No console errors are thrown during static build (`npm run build`) or runtime execution.
- **SC-003**: Lighthouse accessibility and SEO scores are 90 or above.
- **SC-004**: Initial landing page requests less than 1.5MB total bandwidth by lazy-loading all secondary gallery snapshots until card interaction or hover.

## Assumptions

- **A-001**: The application is a static site with no backend databases or authentication requirements.
- **A-002**: All assets (images, icons) are stored locally in the public folder or referenced via static relative paths.
- **A-003**: Mobile responsiveness works down to a minimum screen width of 320px.
