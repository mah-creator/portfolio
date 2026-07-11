import React from 'react'
import skillsData from '../data/skills.json'
import { SkillGroup } from '../models/types'

export const SkillsGrid: React.FC = () => {
  const skillGroups: SkillGroup[] = skillsData

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto bg-obsidian">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs uppercase tracking-[0.25em] text-gold-brushed font-medium mb-2">
          Expertise
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-white font-heading">
          Technical Competencies
        </h2>
        <div className="h-[1px] w-16 bg-gold-brushed/40 mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {skillGroups.map((group, groupIdx) => (
          <div
            key={groupIdx}
            className="p-6 bg-slate-900/10 border border-slate-900/60 rounded flex flex-col justify-between"
          >
            <h3 className="text-base uppercase tracking-wider text-slate-400 font-semibold mb-6 border-b border-slate-900 pb-3 font-heading">
              {group.category}
            </h3>
            
            <div className="space-y-5">
              {group.items.map((skill, skillIdx) => (
                <div key={skillIdx}>
                  <div className="flex justify-between items-center text-sm mb-1.5 font-sans">
                    <span className="text-slate-350 font-light">{skill.name}</span>
                    <span className="text-gold-brushed text-xs font-medium tracking-wide">{skill.level}%</span>
                  </div>
                  {/* Progress track */}
                  <div className="h-1.5 bg-slate-950 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-gold-brushed to-gold-warm transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
