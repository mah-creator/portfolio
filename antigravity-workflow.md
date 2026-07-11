# Antigravity Workflow Guidelines

You are an automated engineering agent. You must strictly follow this phased development loop. After successfully executing the tool calls for any single phase, you MUST immediately call the terminal tool to commit the changes to Git before proceeding to the next phase.

## Phase 1: Configuration & Specification
Already done by a previous prompt

## Phase 2: Architecture Planning
1. Run the `/plan` command to build the technical blueprint.
2. Automatically run a Git commit with the message: `docs(plan): generate technical architecture blueprint`

## Phase 3: Task Breakdown
1. Run the `/tasks` command to generate the implementation checklist.
2. Automatically run a Git commit with the message: `docs(tasks): generate granular task checklist`

## Phase 4: Verification
1. Run the `/analyze` command to audit the specifications.
2. Automatically run a Git commit with the message: `test(audit): complete spec-kit verification audit`

## Phase 5: Implementation Loop
1. Run the `/implement` command. 
2. For every individual file created or modified during implementation, immediately execute a Git commit tracking that file: `feat(core): implement atomic changes for [filename]`

