import React from 'react'
import { Project } from '../models/types'
import { X, CheckCircle, ExternalLink } from 'lucide-react'

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/90 backdrop-blur-sm transition-opacity duration-300">
      {/* Click outside backdrop container */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-lg shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto transform scale-100 transition-transform duration-300">
        
        {/* Header Close button */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="text-xs uppercase tracking-wider text-gold-brushed font-medium font-sans block mb-1">
              {project.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-heading">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-11 h-11 text-slate-400 hover:text-white bg-slate-950/60 hover:bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-full transition-all duration-300 outline-none"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Project Image */}
        {project.imageUrl && (
          <div className="w-full h-64 overflow-hidden rounded border border-slate-800 mb-6 bg-slate-950">
            <img
              src={project.imageUrl}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}

        {/* Description */}
        <div className="mb-8">
          <h4 className="text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold mb-3 font-sans">
            Project Overview
          </h4>
          <p className="text-slate-300 font-sans font-light leading-relaxed text-sm sm:text-base">
            {project.description}
          </p>
        </div>

        {/* Deliverables checklist */}
        <div className="mb-8">
          <h4 className="text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold mb-4 font-sans">
            Key Deliverables
          </h4>
          <ul className="space-y-3">
            {project.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 font-sans font-light">
                <CheckCircle size={16} className="text-gold-brushed mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer info & Links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-slate-800 pt-6 mt-8">
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-wider font-semibold bg-slate-950 text-slate-400 border border-slate-800 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 bg-gold-brushed text-obsidian rounded hover:bg-gold-warm font-semibold text-xs tracking-wider uppercase transition-all duration-300"
            >
              <span>Visit Site</span>
              <ExternalLink size={14} />
            </a>
          )}
        </div>

      </div>
    </div>
  )
}
