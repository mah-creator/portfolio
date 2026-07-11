import { describe, it, expect } from 'vitest'
import profileData from '../../src/data/profile.json'
import projectsData from '../../src/data/projects.json'
import experienceData from '../../src/data/experience.json'
import skillsData from '../../src/data/skills.json'

describe('Data Parsing and Validation', () => {
  it('should parse profile.json successfully and contain required fields', () => {
    expect(profileData).toBeDefined()
    expect(profileData.name).toBeTypeOf('string')
    expect(profileData.title).toBeTypeOf('string')
    expect(profileData.bio).toBeTypeOf('string')
    expect(profileData.email).toMatch(/@/)
  })

  it('should parse projects.json successfully and contain valid arrays', () => {
    expect(projectsData).toBeInstanceOf(Array)
    expect(projectsData.length).toBeGreaterThan(0)
    
    projectsData.forEach(project => {
      expect(project.id).toBeTypeOf('string')
      expect(project.title).toBeTypeOf('string')
      expect(project.tags).toBeInstanceOf(Array)
      expect(project.tags.length).toBeGreaterThan(0)
      expect(project.imageUrl).toBeTypeOf('string')
      expect(project.deliverables).toBeInstanceOf(Array)
      expect(project.deliverables.length).toBeGreaterThan(0)
    })
  })

  it('should parse experience.json successfully and contain valid structures', () => {
    expect(experienceData).toBeInstanceOf(Array)
    expect(experienceData.length).toBeGreaterThan(0)
    
    experienceData.forEach(exp => {
      expect(exp.id).toBeTypeOf('string')
      expect(exp.company).toBeTypeOf('string')
      expect(exp.role).toBeTypeOf('string')
      expect(exp.achievements).toBeInstanceOf(Array)
      expect(exp.achievements.length).toBeGreaterThan(0)
    })
  })

  it('should parse skills.json successfully and contain categories', () => {
    expect(skillsData).toBeInstanceOf(Array)
    expect(skillsData.length).toBeGreaterThan(0)
    
    skillsData.forEach(skillGroup => {
      expect(skillGroup.category).toBeTypeOf('string')
      expect(skillGroup.items).toBeInstanceOf(Array)
      expect(skillGroup.items.length).toBeGreaterThan(0)
      
      skillGroup.items.forEach(item => {
        expect(item.name).toBeTypeOf('string')
        expect(item.level).toBeTypeOf('number')
        expect(item.level).toBeGreaterThanOrEqual(1)
        expect(item.level).toBeLessThanOrEqual(100)
      })
    })
  })
})
