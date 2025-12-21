'use client'

import AboutSection from '@/components/AboutSection'
import { SkillsSection } from '@/components/SkillsSections'
export default function AboutPage() {
  return (
    <div className="w-full min-h-screen">
      <AboutSection />
      <SkillsSection/>
    </div>
  )
}
