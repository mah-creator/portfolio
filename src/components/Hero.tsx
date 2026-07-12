import React from 'react'
import profileData from '../data/profile.json'
import type { Profile } from '../models/types'
import { Github, Linkedin, Mail, FileText } from 'lucide-react'

const WhatsAppIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)


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
          <div className="relative group w-[180px] h-[46px]">
            {/* Main "Contact Me" Button (shows by default, fades out/shrinks on hover) */}
            <div className="absolute inset-0 flex items-center justify-center gap-2 bg-gold-brushed/10 group-hover:bg-gold-brushed/20 border border-gold-brushed/30 group-hover:border-transparent rounded text-gold-brushed text-sm tracking-wider uppercase font-semibold transition-all duration-300 shadow-[0_0_10px_rgba(212,175,55,0.05)] group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none cursor-pointer">
              <Mail size={16} />
              Contact Me
            </div>

            {/* Split sub-buttons (invisible/scaled down by default, shows on hover) */}
            <div className="absolute inset-0 flex items-center opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 gap-2">
              {/* LinkedIn */}
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="flex-1 h-full flex items-center justify-center bg-[#0077b5]/10 hover:bg-[#0077b5]/20 border border-[#0077b5]/30 hover:border-[#0077b5]/60 rounded text-[#0077b5] transition-all duration-300 shadow-[0_0_10px_rgba(0,119,181,0.05)]"
              >
                <Linkedin size={18} />
              </a>

              {/* Email */}
              <a
                href={`mailto:${profile.email}`}
                title="Email"
                className="flex-1 h-full flex items-center justify-center bg-gold-brushed/10 hover:bg-gold-brushed/20 border border-gold-brushed/30 hover:border-gold-brushed/60 rounded text-gold-brushed transition-all duration-300 shadow-[0_0_10px_rgba(212,175,55,0.05)]"
              >
                <Mail size={18} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/+970595428025"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                className="flex-1 h-full flex items-center justify-center bg-[#25d366]/10 hover:bg-[#25d366]/20 border border-[#25d366]/30 hover:border-[#25d366]/60 rounded text-[#25d366] transition-all duration-300 shadow-[0_0_10px_rgba(37,211,102,0.05)]"
              >
                <WhatsAppIcon className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>
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
