# Quickstart Validation Guide: Luxury Portfolio Showcase

This guide documents the procedures to set up, build, and validate the Luxury Portfolio Showcase feature.

## Prerequisites

Before starting, ensure the following are installed:
- Node.js (version 18 or above)
- npm (version 9 or above)
- Git

## Installation & Setup

1. Clone or access the workspace root directory:
   ```bash
   cd C:/Users/mahmoud/Desktop/portfolio
   ```

2. Verify project files:
   - Configuration: [init-options.json](file:///C:/Users/mahmoud/Desktop/portfolio/.specify/init-options.json)
   - Specifications: [spec.md](file:///C:/Users/mahmoud/Desktop/portfolio/specs/001-portfolio/spec.md)
   - Design schemas: [data-model.md](file:///C:/Users/mahmoud/Desktop/portfolio/specs/001-portfolio/data-model.md)

## Validation Scenarios

### Scenario 1: Dev Server & UI Aesthetics Check

Verify that the local development environment runs correctly with the designated luxury styling assets.

- **Command**:
  ```bash
  npm run dev
  ```
- **Expected Outcome**:
  - Dev server starts without warnings.
  - Visit the local URL (e.g. `http://localhost:5173`).
  - View the hero section against the deep obsidian/slate background.
  - Verify that the layout remains responsive across simulated device screens (Mobile, Tablet, Desktop) in Chrome DevTools.

### Scenario 2: Data Schema Parser Verification

Verify that all content details are dynamically read from the JSON files specified in the [Data payloads contract](file:///C:/Users/mahmoud/Desktop/portfolio/specs/001-portfolio/contracts/data-payloads.md).

- **Action**:
  - Edit [profile.json](file:///C:/Users/mahmoud/Desktop/portfolio/src/data/profile.json) to change the `name` field to `"Test User"`.
- **Expected Outcome**:
  - The hot reloading triggers, and the landing page instantly displays `"Test User"` in the hero title.

### Scenario 3: Test Suite Run

Validate unit and component test suites to verify that modular code parsing functions correctly without regressions.

- **Command**:
  ```bash
  npm run test
  ```
- **Expected Outcome**:
  - All tests in the `tests/` directory pass without warnings or errors.

### Scenario 4: Clean Production Build Check

Verify that the compiler and static builder compile without warnings.

- **Command**:
  ```bash
  npm run build
  ```
- **Expected Outcome**:
  - Static distribution assets are generated under the `dist/` folder.
  - Zero warnings or compile warnings are present in stdout.

### Scenario 5: Sliding Gallery (Carousel) Functionality Check

Verify that the project card image carousel functions correctly, changes images on click, and does not trigger the details modal opening on slide interaction.

- **Action**:
  - Hover over a project card in the grid to reveal left/right navigation arrows.
  - Click on the right navigation arrow to advance the slide, or click on a specific indicator dot.
  - Click outside the arrows/dots on the text part of the card or the main body of the card.
- **Expected Outcome**:
  - Clicking on the left/right arrows or dots transitions the image to the next/selected project snapshot.
  - The project details modal overlay does **NOT** open when arrows/dots are clicked (event propagation is successfully stopped).
  - Clicking on the body of the card opens the details modal overlay showing the project's details and a copy of the sliding gallery.
  - Verification that swipe gestures work on touch devices.
