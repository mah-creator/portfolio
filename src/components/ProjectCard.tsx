import React, { useState, useRef } from 'react'
import type { Project } from '../models/types'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'

interface ProjectCardProps {
  project: Project;
  onClick: (initialSlideIndex: number) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation()
    }
    setActiveIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
  }

  const handleNext = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation()
    }
    setActiveIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
  }

  const handleDotClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation()
    setActiveIndex(index)
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
    <div
      onClick={() => onClick(activeIndex)}
      className="group relative cursor-pointer overflow-hidden rounded bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/80 hover:border-gold-brushed/40 transition-all duration-300 flex flex-col h-[400px] shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(212,175,55,0.08)] transform hover:-translate-y-1"
    >
      {/* Sliding Gallery (Carousel) Container */}
      <div 
        className="relative w-full h-48 bg-slate-950 overflow-hidden select-none"
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
                alt={`${project.title} screenshot ${idx + 1}`}
                loading={idx === 0 ? "eager" : "lazy"}
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
          ))}
        </div>

        {/* Carousel controls - left/right arrows */}
        {hasMultipleImages && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-slate-900/70 border border-slate-800 text-slate-300 hover:text-white hover:border-gold-brushed/40 md:opacity-0 md:group-hover:opacity-100 transition-all duration-200 z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-slate-900/70 border border-slate-800 text-slate-300 hover:text-white hover:border-gold-brushed/40 md:opacity-0 md:group-hover:opacity-100 transition-all duration-200 z-10"
              aria-label="Next slide"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}

        {/* Indicator dots */}
        {hasMultipleImages && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {project.images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => handleDotClick(e, idx)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                  idx === activeIndex 
                    ? "bg-gold-brushed w-3" 
                    : "bg-slate-500/60 hover:bg-slate-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Text Context Container */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-medium font-sans">
              {project.category}
            </span>
            <span className="text-slate-600 group-hover:text-gold-brushed transition-colors duration-300">
              <ArrowUpRight size={16} className="transform group-hover:translate-x-[2px] group-hover:translate-y-[-2px] transition-transform duration-300" />
            </span>
          </div>

          <h3 className="text-base font-semibold text-slate-100 mb-2 font-heading tracking-wide group-hover:text-white transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-xs text-slate-400 font-sans font-light leading-relaxed mb-4 line-clamp-3">
            {project.subtitle}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {project.tags.slice(0, 4).map(tag => (
            <span
              key={tag}
              className="text-[9px] uppercase tracking-wider font-semibold bg-slate-950/60 text-slate-400 border border-slate-800/80 px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-[9px] uppercase tracking-wider font-semibold bg-slate-950/30 text-slate-500 border border-slate-850 px-1.5 py-0.5 rounded">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
