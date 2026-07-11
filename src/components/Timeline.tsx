import React from 'react'
import experienceData from '../data/experience.json'
import { Experience } from '../models/types'
import { Briefcase } from 'lucide-react'

export const Timeline: React.FC = () => {
  const experiences: Experience[] = experienceData

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto bg-obsidian">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs uppercase tracking-[0.25em] text-gold-brushed font-medium mb-2">
          Chronology
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-white font-heading">
          Professional Timeline
        </h2>
        <div className="h-[1px] w-16 bg-gold-brushed/40 mt-4" />
      </div>

      <div className="relative border-l border-slate-800 ml-4 md:ml-6 pl-8 md:pl-10 space-y-12">
        {experiences.map(exp => (
          <div key={exp.id} className="relative group">
            {/* Timeline bullet element */}
            <div className="absolute -left-[41px] md:-left-[49px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 border border-slate-800 group-hover:border-gold-brushed transition-colors duration-300">
              <Briefcase size={14} className="text-slate-500 group-hover:text-gold-brushed transition-colors duration-300" />
            </div>

            {/* Content card */}
            <div className="p-6 bg-slate-900/20 hover:bg-slate-900/40 border border-slate-900 hover:border-slate-800/80 rounded transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-100 font-heading">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-gold-brushed/80 font-medium font-sans">
                    {exp.company}
                  </span>
                </div>
                <div className="text-xs tracking-wider text-slate-500 uppercase font-sans">
                  <span>{exp.period}</span> &bull; <span>{exp.location}</span>
                </div>
              </div>

              <ul className="space-y-2.5">
                {exp.achievements.map((bullet, index) => (
                  <li
                    key={index}
                    className="text-sm text-slate-450 font-sans font-light leading-relaxed before:content-['-'] before:mr-2 before:text-gold-brushed"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
