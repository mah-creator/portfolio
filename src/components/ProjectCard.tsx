import React from 'react'
import { Project } from '../models/types'
import { ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/80 hover:border-gold-brushed/40 transition-all duration-300 p-6 flex flex-col justify-between h-80 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(212,175,55,0.08)] transform hover:-translate-y-1"
    >
      <div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs uppercase tracking-wider text-slate-500 font-medium font-sans">
            {project.category}
          </span>
          <span className="text-slate-600 group-hover:text-gold-brushed transition-colors duration-300">
            <ArrowUpRight size={18} className="transform group-hover:translate-x-[2px] group-hover:translate-y-[-2px] transition-transform duration-300" />
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-slate-100 mb-2 font-heading tracking-wide group-hover:text-white transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-sm text-slate-400 font-sans font-light leading-relaxed mb-6 line-clamp-3">
          {project.subtitle}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="text-[10px] uppercase tracking-wider font-semibold bg-slate-950/60 text-slate-400 border border-slate-850 px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
