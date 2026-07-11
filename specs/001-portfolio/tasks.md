# Tasks: Luxury Portfolio Showcase

**Input**: Design documents from `/specs/001-portfolio/`

**Prerequisites**: [plan.md](file:///C:/Users/mahmoud/Desktop/portfolio/specs/001-portfolio/plan.md) (required), [spec.md](file:///C:/Users/mahmoud/Desktop/portfolio/specs/001-portfolio/spec.md) (required for user stories), [research.md](file:///C:/Users/mahmoud/Desktop/portfolio/specs/001-portfolio/research.md), [data-model.md](file:///C:/Users/mahmoud/Desktop/portfolio/specs/001-portfolio/data-model.md), [data-payloads.md](file:///C:/Users/mahmoud/Desktop/portfolio/specs/001-portfolio/contracts/data-payloads.md)

**Tests**: Simple unit/component validation tests are configured below to verify JSON loading and interaction handlers.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Initialize Vite React app in root workspace directory
- [x] T002 Install Tailwind CSS and Lucide React UI dependencies
- [x] T003 [P] Configure Tailwind CSS luxury theme settings in `tailwind.config.js`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Create baseline Google Font CSS integrations in `src/index.css`
- [x] T005 Create data directory and save static files `src/data/profile.json`, `src/data/projects.json`, `src/data/experience.json`, and `src/data/skills.json`
- [x] T006 [P] Configure Vitest validation framework settings in `vite.config.ts`
- [x] T007 Setup baseline data validation test in `tests/unit/data-parsing.test.ts` to assert mock JSON files load and are valid type objects

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Landing Page & Showcase Grid (Priority: P1) 🎯 MVP

**Goal**: Render a dark high-contrast hero segment introducing the profile owner, and display a grid of projects loaded dynamically from JSON files.

**Independent Test**:
- Load landing page locally.
- Confirm background is slate-950/obsidian and headings use Outfit/Playfair typography.
- Confirm project card list parses and renders titles, tags, and images.

### Implementation for User Story 1

- [x] T008 [P] [US1] Declare TypeScript models and interface structures in `src/models/types.ts`
- [x] T009 [US1] Create the profile details component `src/components/Hero.tsx` using `src/data/profile.json`
- [x] T010 [P] [US1] Create individual project card component `src/components/ProjectCard.tsx` with transition animations
- [x] T011 [US1] Implement card container grid `src/components/ProjectShowcase.tsx` mapping project JSON files
- [x] T012 [US1] Integrate components in master page layout `src/App.tsx` and run visual cross-viewport testing

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Project Detail Overlay (Priority: P2)

**Goal**: Click on project cards to trigger a modal dialog showing project summaries, tags, deliverables, and actions.

**Independent Test**:
- Open the landing page, click a card, check that a detailed modal opens.
- Verify ESC key closes modal and returns visual focus.

### Implementation for User Story 2

- [x] T013 [P] [US2] Create details panel/overlay component in `src/components/ProjectModal.tsx`
- [x] T014 [US2] Add modal triggers and click event handlers in `src/components/ProjectShowcase.tsx`
- [x] T015 [US2] Implement modal toggle state handlers and backdrop click dismissals in `src/App.tsx`
- [x] T016 [US2] Add escape-key listener to window handlers for modal closure

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Interactive Resume Timeline (Priority: P3)

**Goal**: Display interactive timeline logs representing work history and visual skill progress indicators.

**Independent Test**:
- Scroll down to experience timeline and skills.
- Hover over items to verify premium highlight accents.

### Implementation for User Story 3

- [x] T017 [P] [US3] Create timeline block item in `src/components/Timeline.tsx` using experience JSON files
- [x] T018 [P] [US3] Create skill categories container in `src/components/SkillsGrid.tsx` using skills JSON files
- [x] T019 [US3] Embed Timeline and SkillsGrid in master page layout `src/App.tsx`

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T020 Optimize page speed by enabling image lazy loading attribute tags
- [x] T021 Perform TypeScript compile audits and code cleanups
- [x] T022 Compile release bundle via `npm run build` and audit for zero compiler errors
- [x] T023 Run validation check scenarios defined in [quickstart.md](file:///C:/Users/mahmoud/Desktop/portfolio/specs/001-portfolio/quickstart.md)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately.
- **Foundational (Phase 2)**: Depends on Setup (Phase 1).
- **User Story 1 (Phase 3)**: Depends on Foundational (Phase 2).
- **User Story 2 (Phase 4)**: Depends on User Story 1 (Phase 3) for the clickable cards trigger.
- **User Story 3 (Phase 5)**: Depends on Foundational (Phase 2) - can run in parallel with User Story 1 and 2 if needed.
- **Polish (Phase 6)**: Depends on completing all features.

### Parallel Opportunities

- Task [T003] can run in parallel with project setup task [T002].
- Tasks [T008] and [T010] under User Story 1 can run in parallel.
- Experience Timeline [T017] and SkillsGrid [T018] can be written in parallel.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Setup and Foundational tasks (T001 to T007).
2. Complete landing page and cards rendering (T008 to T012).
3. Confirm User Story 1 functions perfectly and has correct luxury aesthetics.
4. Integrate detail overlay and resume systems incrementally.
