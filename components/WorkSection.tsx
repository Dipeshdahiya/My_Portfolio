'use client'

import { useEffect, useRef, useState } from 'react'

export default function WorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const techSkills = [
    { name: 'HTML', icon: '5', color: 'white' },
    { name: 'CSS', icon: '3', color: 'white' },
    { name: 'JavaScript', icon: 'JS', color: 'white' },
    { name: 'Webflow', icon: 'W', color: '#6366F1' },
  ]

  const projects = [
    {
      title: 'Your Career Starts Here',
      category: 'Jobportal',
      description: 'A comprehensive job portal platform',
    },
    {
      title: 'Future of Conversations',
      category: 'Chatbot',
      description: 'AI-powered conversational interface',
    },
    {
      title: 'Beyond Earth\'s Borders',
      category: 'Space Odyssey',
      description: 'Interactive space exploration experience',
    },
  ]

  return (
    <section
      id="work"
      ref={sectionRef}
      className="min-h-screen bg-black px-8 lg:px-16 py-16 lg:py-24"
    >
      <div
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 lg:mb-16">
          <span className="text-white">My Diverse </span>
          <span className="text-[#FF6B35]">Tech</span>
          <span className="text-white"> Skills</span>
        </h2>

        {/* Tech Skills Icons */}
        <div className="flex flex-wrap gap-8 mb-16 lg:mb-24 justify-center lg:justify-start">
          {techSkills.map((skill, index) => {
            const delay = index * 100
            return (
              <div
                key={index}
                className="flex flex-col items-center"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'scale(1)' : 'scale(0.9)',
                  transition: `all 0.5s ease-out ${delay}ms`,
                }}
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg border-2 border-white flex items-center justify-center mb-3 bg-black/50 hover:bg-[#FF6B35]/20 transition-colors duration-300">
                  <span className={`text-2xl md:text-3xl font-bold ${
                    skill.color === 'white' ? 'text-white' : 'text-[#6366F1]'
                  }`}>
                    {skill.icon}
                  </span>
                </div>
                <span className="text-white text-sm md:text-base font-medium">{skill.name}</span>
              </div>
            )
          })}
        </div>

        {/* Projects Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-all duration-300 cursor-pointer border border-gray-800 hover:border-[#FF6B35]/50 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 4) * 100}ms` }}
            >
              <div className="text-[#FF6B35] text-sm font-semibold mb-2">{project.category}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

