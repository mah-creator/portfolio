import { useState, useEffect } from 'react'
import { Hero } from './components/Hero'
import { ProjectShowcase } from './components/ProjectShowcase'
import { ProjectModal } from './components/ProjectModal'
import { Timeline } from './components/Timeline'
import { SkillsGrid } from './components/SkillsGrid'
import profileData from './data/profile.json'
import type { Project } from './models/types'

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [initialSlideIndex, setInitialSlideIndex] = useState(0)

  const handleSelectProject = (project: Project, activeIndex: number) => {
    setSelectedProject(project)
    setInitialSlideIndex(activeIndex)
  }

  // Listen to Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <main className="min-h-screen bg-obsidian text-slate-300 flex flex-col justify-between selection:bg-gold-brushed/30">
      <div>
        <Hero />
        <ProjectShowcase onSelectProject={handleSelectProject} />
        <Timeline />
        <SkillsGrid />
      </div>

      <ProjectModal
        project={selectedProject}
        initialSlideIndex={initialSlideIndex}
        onClose={() => setSelectedProject(null)}
      />

      {/* Footer copyright */}
      <footer className="py-8 px-6 text-center border-t border-slate-900 bg-obsidian">
        <p className="text-xs text-slate-600 font-sans tracking-widest uppercase">
          &copy; {new Date().getFullYear()} {profileData.name}. Designed for visual excellence.
        </p>
      </footer>
    </main>
  )
}

export default App
