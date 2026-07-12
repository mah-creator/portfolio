import React, { useState, useEffect, useRef } from 'react'
import type { Project } from '../models/types'
import { X, CheckCircle, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'

interface ProjectModalProps {
  project: Project | null;
  initialSlideIndex: number;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, initialSlideIndex, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  // Sync index when project or initialSlideIndex changes
  useEffect(() => {
    if (project) {
      setActiveIndex(initialSlideIndex)
    }
  }, [project, initialSlideIndex])

  if (!project) return null

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const diffX = touchStartX.current - touchEndX.current
    const swipeThreshold = 50
    if (diffX > swipeThreshold) {
      handleNext()
    } else if (diffX < -swipeThreshold) {
      handlePrev()
    }
    touchStartX.current = null
    touchEndX.current = null
  }

  const hasMultipleImages = project.images.length > 1

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/90 backdrop-blur-sm transition-opacity duration-300">
      {/* Click outside backdrop container */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-lg shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto transform scale-100 transition-transform duration-300">
        
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

        {/* Sliding Gallery (Carousel) Container */}
        {project.images.length > 0 && (
          <div 
            className="relative w-full h-72 sm:h-96 overflow-hidden rounded border border-slate-800 mb-6 bg-slate-950 select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Images wrapper */}
            <div 
              className="flex h-full w-full transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {project.images.map((img, idx) => (
                <div key={idx} className="w-full h-full shrink-0">
                  <img
                    src={img}
                    alt={`${project.title} snapshot ${idx + 1}`}
                    loading={idx === activeIndex ? "eager" : "lazy"}
                    className="w-full h-full object-cover sm:object-contain bg-slate-950 pointer-events-none"
                  />
                </div>
              ))}
            </div>

            {/* Carousel navigation arrows */}
            {hasMultipleImages && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-white hover:border-gold-brushed/40 transition-all duration-200 z-10 shadow-lg"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-white hover:border-gold-brushed/40 transition-all duration-200 z-10 shadow-lg"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* Indicator dots */}
            {hasMultipleImages && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      idx === activeIndex 
                        ? "bg-gold-brushed w-4" 
                        : "bg-slate-500/60 hover:bg-slate-300"
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            )}
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
            Key Deliverables & Implementations
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
              <span>Visit Repository</span>
              <ExternalLink size={14} />
            </a>
          )}
        </div>

      </div>
    </div>
  )
}
