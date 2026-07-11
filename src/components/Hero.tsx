import React from 'react'
import profileData from '../data/profile.json'
import type { Profile } from '../models/types'
import { Github, Linkedin, Mail, FileText } from 'lucide-react'

export const Hero: React.FC = () => {
  const profile: Profile = profileData

  return (
    <section className="relative overflow-hidden pt-24 pb-16 px-6 border-b border-slate-900 bg-obsidian">
      {/* Decorative luxury gradient background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-gold-brushed/40 to-transparent" />
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-gold-brushed/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="text-xs uppercase tracking-[0.25em] text-gold-brushed font-medium mb-4 block">
          Portfolio Showcase
        </span>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
          <span className="gold-gradient-text block font-heading">{profile.name}</span>
        </h1>
        
        <h2 className="text-xl sm:text-2xl font-light text-slate-200 tracking-wide mb-8 max-w-2xl mx-auto font-sans leading-relaxed">
          {profile.subtitle}
        </h2>
        
        <div className="h-[1px] w-24 bg-gold-brushed/40 mx-auto mb-8" />
        
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-10 font-sans font-light">
          {profile.bio}
        </p>

        {/* Buttons / Actions */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 px-6 py-3 bg-gold-brushed/10 hover:bg-gold-brushed/20 border border-gold-brushed/30 hover:border-gold-brushed/60 rounded text-gold-brushed text-sm tracking-wider uppercase font-semibold transition-all duration-300 shadow-[0_0_10px_rgba(212,175,55,0.05)]"
          >
            <Mail size={16} />
            Contact Me
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded text-slate-200 text-sm tracking-wider uppercase font-semibold transition-all duration-300"
          >
            <FileText size={16} />
            View Resume
          </a>
        </div>

        {/* Social Icons Links */}
        <div className="flex justify-center gap-6 mt-12">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-gold-brushed transition-colors duration-300"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-gold-brushed transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
