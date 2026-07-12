import React from 'react'
import projectsData from '../data/projects.json'
import type { Project } from '../models/types'
import { ProjectCard } from './ProjectCard'

interface ProjectShowcaseProps {
  onSelectProject: (project: Project, initialSlideIndex: number) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onSelectProject }) => {
  const projects: Project[] = projectsData

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto bg-obsidian">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-900 pb-6">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-gold-brushed font-medium mb-2 block">
            Showcase
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white font-heading">
            Selected Creations
          </h2>
        </div>
        <p className="text-sm text-slate-500 font-sans font-light mt-4 md:mt-0 max-w-xs leading-relaxed">
          A selection of projects crafted under strict performance, accessibility, and architectural standards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={(activeIndex) => onSelectProject(project, activeIndex)}
          />
        ))}
      </div>
    </section>
  )
}
